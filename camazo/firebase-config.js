/* ============================================================
   FIREBASE — marcações guardadas no site
   1. Cola aqui o "firebaseConfig" do projeto
      (Consola Firebase → Definições do projeto → As tuas apps → Web).
      Estes valores não são secretos: a segurança está em firestore.rules.
   2. Em ADMINS, as contas Google que podem abrir gestao.html.
      Têm de ser as mesmas que estão em firestore.rules.
   Enquanto firebaseConfig for null, o site usa o pedido por WhatsApp.
   ============================================================ */
export const firebaseConfig = null;

export const ADMINS = [];
