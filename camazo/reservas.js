/* Marcações no Firebase (Firestore), partilhado por index.html e gestao.html.

   Coleções:
   - marcacoes/{id}   dados do cliente. Qualquer pessoa pode criar; só o Camazo lê e apaga.
   - ocupado/{dia_HHMM}  um documento por meia hora ocupada, sem dados pessoais.
       Qualquer pessoa pode ler (para o site mostrar as horas livres).
       Como o id é a própria hora, duas marcações nunca conseguem ficar com a
       mesma meia hora: a segunda falha (a criação é feita num só lote). */
import { firebaseConfig } from "./firebase-config.js";

const PASSO = 30; // minutos por bloco de agenda (igual a INTERVALO_MIN em dados.js)

// Simulador local (só em localhost com ?emu): para testar sem tocar em dados reais
const emu = ["localhost", "127.0.0.1"].includes(location.hostname) && new URLSearchParams(location.search).has("emu");
const config = emu ? { apiKey: "demo", authDomain: "localhost", projectId: "demo-camazo", appId: "demo" } : firebaseConfig;

const hhmm = (m) => `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
const slotId = (dia, m) => `${dia}_${hhmm(m).replace(":", "")}`;
/** Ids das meias horas ocupadas por um serviço de `min` minutos a começar em `inicio` (minutos do dia). */
export const slotsPara = (dia, inicio, min) => {
  const out = [];
  for (let m = inicio; m < inicio + min; m += PASSO) out.push(slotId(dia, m));
  return out;
};
/** Data absoluta de um dia "AAAA-MM-DD" às `min` minutos, hora de Lisboa. */
export function lisboa(dia, min) {
  const [a, me, d] = dia.split("-").map(Number);
  const utc = Date.UTC(a, me - 1, d, Math.floor(min / 60), min % 60);
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Lisbon", hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" })
    .formatToParts(new Date(utc)).map((x) => [x.type, x.value]));
  const comoLisboa = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute);
  return new Date(utc - (comoLisboa - utc));
}

// a biblioteca do Firebase só é descarregada quando o projeto está configurado
const V = "https://www.gstatic.com/firebasejs/10.14.1/";
let falhou = false;
const [
  { initializeApp },
  { getFirestore, connectFirestoreEmulator, collection, doc, writeBatch, query, where, onSnapshot, getDoc, Timestamp, serverTimestamp },
  { getAuth, connectAuthEmulator, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signInWithCredential, onAuthStateChanged, signOut },
] = await (config ? Promise.all([import(V + "firebase-app.js"), import(V + "firebase-firestore.js"), import(V + "firebase-auth.js")]) : Promise.resolve([{}, {}, {}]))
  .catch(() => { falhou = true; return [{}, {}, {}]; }); // sem internet ou bloqueado: o site avisa

let db = null, auth = null;
if (config && !falhou) {
  const app = initializeApp(config);
  db = getFirestore(app);
  auth = getAuth(app);
  if (emu) {
    connectFirestoreEmulator(db, "127.0.0.1", 8080);
    connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
  }
}

const api = {
  ativo: !!db,
  falhou, // estava configurado mas a biblioteca não carregou
  slotsPara, lisboa, hhmm,

  /** Chama cb(Map slotId → dados) sempre que as horas ocupadas de `dia` mudam. Devolve a função para parar. */
  ouvirOcupados(dia, cb) {
    if (!db) return () => {};
    return onSnapshot(query(collection(db, "ocupado"), where("dia", "==", dia)),
      (s) => cb(new Map(s.docs.map((d) => [d.id, d.data()]))), () => cb(new Map()));
  },

  /** Cria a marcação e ocupa as horas num só lote. Falha se alguma meia hora já estiver ocupada. */
  async marcar({ servId, servNome, min, preco, dia, inicio, nome, tel }) {
    if (!db) throw new Error("sem-ligacao");
    const ref = doc(collection(db, "marcacoes"));
    const slots = slotsPara(dia, inicio, min);
    const b = writeBatch(db);
    b.set(ref, {
      servId, servNome, min, preco, dia, hora: hhmm(inicio), inicio: Timestamp.fromDate(lisboa(dia, inicio)),
      nome: nome.trim().slice(0, 60), tel: tel.trim().slice(0, 20), slots, criado: serverTimestamp(),
    });
    for (const id of slots) b.set(doc(db, "ocupado", id), { dia, marcacao: ref.id });
    try { await b.commit(); }
    catch (e) {
      if (e.code === "permission-denied") { // quase sempre: alguém ficou com a hora entretanto
        const ocupada = await Promise.all(slots.map((id) => getDoc(doc(db, "ocupado", id)).then((d) => d.exists()).catch(() => false)));
        if (ocupada.some(Boolean)) throw Object.assign(new Error("hora-ocupada"), { code: "hora-ocupada" });
      }
      throw e;
    }
    return ref.id;
  },

  /* ---------- gestão (só para as contas em ADMINS) ---------- */
  db, auth,
  /** É administrador se existir admins/{uid} na base de dados (só o próprio o pode ler). */
  eAdmin: async (u) => { if (!u) return false; try { return (await getDoc(doc(db, "admins", u.uid))).exists(); } catch (e) { return false; } },
  aoMudarConta: (cb) => (auth ? onAuthStateChanged(auth, cb) : cb(null)),
  async entrar() {
    const p = new GoogleAuthProvider(); p.setCustomParameters({ prompt: "select_account" });
    try { await signInWithPopup(auth, p); }
    catch (e) { if (e.code === "auth/popup-blocked" || e.code === "auth/operation-not-supported-in-this-environment") await signInWithRedirect(auth, p); else throw e; }
  },
  sair: () => signOut(auth),

  /** Marcações de um dia, em tempo real. */
  ouvirMarcacoes(dia, cb, erro) {
    return onSnapshot(query(collection(db, "marcacoes"), where("dia", "==", dia)),
      (s) => cb(s.docs.map((d) => ({ id: d.id, ...d.data() })).sort((a, b) => a.hora.localeCompare(b.hora))), erro);
  },
  /** Marcações feitas a partir de agora (para o aviso de nova marcação). */
  ouvirNovas(desde, cb) {
    return onSnapshot(query(collection(db, "marcacoes"), where("criado", ">", Timestamp.fromDate(desde))), (s) => {
      s.docChanges().forEach((c) => { if (c.type === "added" && !c.doc.metadata.hasPendingWrites) cb({ id: c.doc.id, ...c.doc.data() }); });
    });
  },
  /** Marcações entre dois dias (para os números da semana). */
  ouvirIntervalo(de, ate, cb) {
    return onSnapshot(query(collection(db, "marcacoes"), where("dia", ">=", de), where("dia", "<=", ate)),
      (s) => cb(s.docs.map((d) => d.data())));
  },
  async cancelar(m) {
    const b = writeBatch(db);
    b.delete(doc(db, "marcacoes", m.id));
    for (const id of m.slots || []) b.delete(doc(db, "ocupado", id));
    await b.commit();
  },
  async bloquear(dia, minutos) {
    const b = writeBatch(db);
    for (const m of minutos) b.set(doc(db, "ocupado", slotId(dia, m)), { dia, bloqueio: true });
    await b.commit();
  },
  async desbloquear(dia, minutos) {
    const b = writeBatch(db);
    for (const m of minutos) b.delete(doc(db, "ocupado", slotId(dia, m)));
    await b.commit();
  },
};
// só no simulador: entrar sem a janela da Google (para os testes automáticos)
if (emu && auth) api._entrarTeste = (email) => signInWithCredential(auth, GoogleAuthProvider.credential(JSON.stringify({ sub: email, email, email_verified: true })));

window.CMZ = api;
window.dispatchEvent(new Event("cmz-pronto"));
