# Camazo Barbershop · Aveiro

Site de uma página (bancada com gavetas) com galeria, serviços com preços e marcações online.

## Ficheiros

- `index.html`: o site.
- `dados.js`: serviços, preços, duração e horário. É usado pelo site e pela página de gestão.
- `gestao.html`: página de gestão do Camazo. Ele entra com a conta Google e vê as marcações por dia, cancela marcações, bloqueia horas ou dias e recebe aviso (som e notificação) de novas marcações.
- `reservas.js`: ligação ao Firebase (Firestore e login Google).
- `firebase-config.js`: configuração do projeto Firebase e contas de administrador.
- `firestore.rules`: regras de segurança. Têm de ser coladas na consola do Firebase.
- `img/`: fotos. Os cortes da galeria estão em `img/cortes/` e são listados em `GALERIA` no `index.html`.

## Marcações

As marcações ficam guardadas em `marcacoes/`. Cada meia hora ocupada fica em `ocupado/{dia_HHMM}`, sem dados pessoais. O id é a própria hora, por isso duas pessoas nunca ficam com a mesma meia hora.

Enquanto `firebaseConfig` for `null`, o site usa o pedido por WhatsApp.

### Ligar o Firebase (uma vez)

1. Em https://console.firebase.google.com, criar um projeto (o Google Analytics não é preciso).
2. Em Build → Firestore Database, criar a base de dados em modo de produção, na localização `eur3` (Europa).
3. Em Build → Authentication, carregar em Get started e ativar o fornecedor **Google**.
4. Em Authentication → Settings → Authorized domains, adicionar `sergioferrerira.github.io`.
5. Em Definições do projeto → As tuas apps, adicionar uma app Web (`</>`) e copiar o `firebaseConfig` para `firebase-config.js`. Já está feito, para o projeto `camazo`.
6. Colar o conteúdo de `firestore.rules` em Firestore → Regras e carregar em Publicar.

### Dar acesso à gestão

1. A pessoa abre `gestao.html` e entra com a conta Google. Aparece "Sem acesso" com um código, que é o uid da conta.
2. Na consola: Firestore Database → Dados → Iniciar coleção `admins`. Como ID do documento usar esse código e acrescentar um campo qualquer (por exemplo `nome`). Guardar.
3. A pessoa recarrega a página e já vê a agenda. Para tirar o acesso, apaga-se o documento.

Nenhum email fica no código público.

### Avisos de nova marcação (`avisos-config.js`)

- **Notificação no telemóvel (ntfy):** já está ligada. O Camazo instala a app **ntfy**, carrega em `+` e subscreve o tópico que está em `NTFY_TOPICO` (servidor ntfy.sh). A mensagem só diz o dia, a hora e o serviço. O nome e o telefone do cliente não vão na mensagem.
- **Emails (EmailJS, grátis até 200 por mês):** em https://www.emailjs.com
  1. Email Services → Add service → Gmail, com a conta da barbearia → copiar o **Service ID**.
  2. Email Templates → criar o modelo **para o Camazo**. Em "To Email" pôr o email dele (fica no EmailJS e não no código). Assunto: `Nova marcação: {{quando}}`. Corpo: `{{nome}} ({{telefone}}) marcou {{servico}} para {{quando}}. Preço: {{preco}}. Gestão: {{gestao}}`.
  3. Criar o modelo **para o cliente**, com "To Email" = `{{to_email}}`. Assunto: `Marcação confirmada · Camazo Barbershop`. Corpo: `Olá {{nome}}, está marcado {{servico}} ({{duracao}}, {{preco}}) para {{quando}}. Morada: {{morada}}. Se não puderes vir, liga {{contacto}}.`
  4. Account → copiar a **Public Key**. Em Account → Security → Allowed origins, pôr `https://sergioferrerira.github.io`.
  5. Preencher `EMAILJS` em `avisos-config.js`. O campo de email no site só aparece depois disso.

### Testar sem tocar em dados reais

Com o simulador do Firebase (`npx firebase emulators:start --only firestore,auth --project demo-camazo` dentro de `camazo/`), abrir `http://localhost:8766/camazo/?emu` e `http://localhost:8766/camazo/gestao.html?emu`.
