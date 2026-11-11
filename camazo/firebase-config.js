/* ============================================================
   FIREBASE — marcações guardadas no site
   Configuração do projeto "camazo" (Consola Firebase → Definições do projeto
   → As tuas apps → camazo-site). Estes valores não são secretos: a segurança
   está em firestore.rules.

   Quem pode abrir gestao.html: um documento admins/{uid} na base de dados
   (criado à mão na consola). O uid aparece no ecrã "Sem acesso" da gestão.
   Assim nenhum email fica no código público.
   ============================================================ */
export const firebaseConfig = {
  apiKey: "AIzaSyCUY62AXTJDjzhXb_Tfxa_PK_E1F00FytM",
  authDomain: "camazo.firebaseapp.com",
  projectId: "camazo",
  storageBucket: "camazo.firebasestorage.app",
  messagingSenderId: "706952847139",
  appId: "1:706952847139:web:21e021fcc3fd08c9f53696",
};
