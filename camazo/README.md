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
5. Em Definições do projeto → As tuas apps, adicionar uma app Web (`</>`) e copiar o `firebaseConfig` para `firebase-config.js`.
6. Pôr o email Google do Camazo em `ADMINS` (`firebase-config.js`) e em `admin()` (`firestore.rules`).
7. Colar o conteúdo de `firestore.rules` em Firestore → Regras e carregar em Publicar.

### Testar sem tocar em dados reais

Com o simulador do Firebase (`npx firebase emulators:start --only firestore,auth --project demo-camazo` dentro de `camazo/`), abrir `http://localhost:8766/camazo/?emu` e `http://localhost:8766/camazo/gestao.html?emu`.
