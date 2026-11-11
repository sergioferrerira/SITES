/* ============================================================
   AVISOS DE NOVA MARCAÇÃO
   ============================================================

   1) Notificação no telemóvel do Camazo (app ntfy, grátis, sem conta)
      Instalar a app "ntfy" (Android / iPhone) → "+" → subscrever o tópico abaixo
      (servidor ntfy.sh). Recebe "Nova marcação: Qui 12 nov · 14:00 · Corte"
      mesmo com o site fechado. A mensagem não leva nome nem telefone do
      cliente (os detalhes ficam na página de gestão).
      Deixar NTFY_TOPICO = null para desligar.                                  */
export const NTFY_TOPICO = "camazo-bg0l4itgrwp5sspamg44";

/* 2) Emails pelo EmailJS (grátis até 200 por mês), em https://www.emailjs.com
      - Email Services → ligar o Gmail da barbearia → copiar o Service ID
      - Email Templates → criar dois modelos (ver README) → copiar os Template ID
      - Account → copiar a Public Key
      - Account → Security: em "Allowed origins", pôr https://sergioferrerira.github.io
      Deixar EMAILJS = null para desligar.                                      */
export const EMAILJS = null;
// export const EMAILJS = {
//   publicKey: "xxxxxxxxxxxxxxx",
//   serviceId: "service_xxxxxxx",
//   templateCliente: "template_xxxxxxx",  // confirmação para o cliente (só se ele puser email)
//   templateCamazo: "template_xxxxxxx",   // aviso para o Camazo (o email dele fica no modelo, não aqui)
// };
