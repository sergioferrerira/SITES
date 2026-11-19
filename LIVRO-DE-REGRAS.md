# Livro de Regras — Sites do Russo

Como fazemos sites. Cada site é diferente e tem a cara do seu negócio, mas todos nascem da mesma forma de pensar e do mesmo método.
Este livro é vivo: depois de cada site, atualiza-se com o que aprendemos (ver `APRENDIZAGENS.md`).

---

## 1. O sentimento

- **O site tem de saber ao sítio.** Quem abre o site deve sentir o cheiro, o barulho e a história do negócio antes de ler uma linha.
- **A verdade vem primeiro.** Usamos o que o negócio tem de real: a fachada, os objetos, os anos de casa, os nomes das coisas. Nada de frases genéricas que serviam a qualquer loja.
- **Clássico, com vida.** Respeitamos a tradição e a identidade de cada casa, e damos-lhe movimento e detalhe modernos sem a descaracterizar.
- **PC primeiro, depois um desenho próprio para o telemóvel** (regra do Russo, 4 nov. 2026). O site fica sempre muito diferente entre PC e telemóvel, por isso:
  1. desenha-se e acaba-se primeiro a versão de **computador**;
  2. depois faz-se o **desenho do telemóvel**, com **todos os mesmos elementos**, mas organizados de outra forma para ficar bonito e fluido no ecrã pequeno. Não basta empilhar as colunas: reordenar, redimensionar, trocar carrosséis por listas, etc.
  - É a **mesma página e o mesmo link**: o desenho do telemóvel vive no CSS (`@media`) e, quando preciso, em blocos HTML próprios para o telemóvel. Um só ficheiro, melhor para o Google.
  - A maioria das pessoas vê no telemóvel, por isso o desenho do telemóvel tem de ficar tão cuidado como o do PC.
  - **Lista do telemóvel (tirada do Cantinho do António, nov. 2026)**, a passar a 375 e 390 px antes de mostrar:
    - nada preso por cima de listas de texto (ementas, cartas): as fotos passam com o scroll;
    - sem barra fixa de ações em baixo, a não ser que o Russo peça;
    - o menu de cima cabe numa linha até ao limite, sem scroll para o lado (letra ajustada por JS à maior que cabe, em todas as línguas);
    - o que depende do cursor no PC fica sempre ligado ou funciona ao toque;
    - brilhos e efeitos mais fortes em letra pequena;
    - a primeira foto é a mais forte do site;
    - galerias sem buracos;
    - as 8 línguas testadas.
  - Quando o Russo pede correções só no telemóvel, mexe-se só nos `@media` e confirma-se depois que o PC ficou igual.
- **Menos tempo perdido.** Perguntas certas no início, protótipo rápido, ajustes com o cliente à frente.
- **Todos os sites em várias línguas** (regra do Russo, 12 nov. 2026). Desde o início, com seletor de língua; nada fica só em português. **As 8 línguas:** português, inglês, espanhol, francês, alemão, mandarim (chinês simplificado), japonês e coreano. Atenção às letras: o chinês, o japonês e o coreano precisam de tipos de letra próprios (ex.: Noto Sans SC / JP / KR), carregados só quando se escolhe essa língua.

### O que o Russo procura (tirado da Casa do Café, Bom-Sucesso e Recreio)

- **Sites para negócios e instituições locais de Aveiro** que estão mal representados online (blog parado, conteúdo dentro de imagens, redes desatualizadas). Muitas vezes **ninguém pediu**: o Russo vai apresentar a proposta por iniciativa própria.
- **Começar por um diagnóstico honesto** do que existe hoje e do que trava o negócio, sem culpar ninguém.
- **O site serve o negócio, não é decoração.** Cada secção liga-se a uma receita ou objetivo real: sócios, inscrições, alugueres, patrocinadores por níveis, visitas à loja.
- **Identidade tirada da casa:** cores do emblema, do toldo ou da sede; tipografia com o carácter do sítio (serifa clássica para casas antigas, condensada desportiva para clubes).
- **Uma cor de ação** usada só onde há algo para fazer ou um número que importa.
- **Profissional e rigoroso:** dados verificados, fontes citadas, RGPD (especialmente com menores), acessibilidade, SEO local.
- **Pensado para durar:** o cliente tem de conseguir atualizar pelo telemóvel; o site não pode parecer abandonado ao fim de um mês sem novidades (degradação graciosa).
- **Âmbito realista:** V1 pequena e sólida, o resto preparado para depois. Nada de "Em breve" que pareça amador.
- **Apresentar com peso:** protótipo clicável + apresentação + documento escrito, com notas internas para a reunião.

## 2. O método (sempre por esta ordem)

> **Regra de ouro: na dúvida, pergunta primeiro.** Se não tens a certeza de alguma coisa (o que é o negócio, um nome, um dado, uma decisão de design), perguntas ao Russo **antes** de fazer seja o que for. Só depois ages. Nunca escrever suposições como se fossem factos.

> **Exemplos antes de aplicar** (regra do Russo, 4 nov. 2026; vale para sites e apps). Aplica-se quando há mais do que uma forma boa de fazer algo e o Russo tem de escolher: letras, ícones, cores, estilo de desenho, disposição de uma secção, textos. Aplica-se também sempre que mostrar opções sai mais barato do que aplicar e refazer.
> 1. Fazer uma página pequena com **2 a 4 exemplos**, marcados A, B, C…, com o conteúdo real do site.
> 2. A página tem de ter um link que abra no telemóvel (guardar em `<projeto>/referencias/`).
> 3. O Russo escolhe pela letra; só depois se aplica no site.
>
> **Pedido claro com uma só resposta certa** (corrigir, mover, centrar, trocar a ordem) → aplica-se logo, sem exemplos.
>
> Porquê: aplicar no site custa o ciclo inteiro (alterar, testar PC + telemóvel, publicar, GitHub). Se o Russo não gostar, paga-se duas vezes. Exemplo que correu bem: as 4 letras da NiceHealthcare (`nicehealthcare/referencias/letras-titulos.html`).

0. **Ver o que já temos** — antes de tudo, procurar trabalho já feito nesse negócio ou área: a lista de artifacts do Russo, conversas anteriores e esta pasta. Se houver protótipos ou propostas, partimos daí em vez de começar do zero.
1. **Pesquisa + perguntas** — primeiro pesquiso eu os factos públicos do negócio e mostro-os ao Russo só para confirmar; depois, antes de desenhar, fazer o questionário (`QUESTIONARIO.md`). Não começar sem saber: o negócio, o objetivo (vender ou não), o público, o que se vende, a paleta/identidade e o que há de fotos e textos.
2. **Recolha** — pedir fotos reais, a fachada, o logótipo, a placa, o menu/tabela de preços. Uma foto da montra diz mais que dez perguntas.
3. **Plano curto** — paleta, tipos de letra, secções e o "momento especial" do site (o pormenor que só este negócio tem). Mostrar ao Russo em poucas linhas.
4. **Protótipo para PC** — uma página completa, com conteúdos reais e o que falta marcado a amarelo `[a confirmar]`.
5. **Desenho do telemóvel** — os mesmos elementos, reorganizados para o ecrã pequeno (ver secção 1). Ver no computador e no telemóvel antes de mostrar.
6. **Mostrar ao cliente** — link privado, com o aviso "Protótipo" visível.
7. **Ajustar e aprender** — registar em `APRENDIZAGENS.md` o que resultou e o que não.

## 3. Paleta de cores

- **A paleta tira-se do próprio negócio**: o toldo, as paredes, a madeira, o equipamento, as cores do emblema. Nunca cores ao calhas.
- Estrutura base (5 a 7 cores, sempre como variáveis CSS no `:root`):
  - **Fundo claro** (creme, papel, cal — nunca branco puro sem razão)
  - **Fundo escuro / texto** (a cor "séria" da casa)
  - **Cor principal** (a mais marcante do negócio — usada com moderação: botões, destaques)
  - **Cor de apoio** (dourado, verde, azul… para detalhes)
  - **Texto suave** (para descrições)
- Uma cor forte de cada vez. A força está num sítio só; o resto é calmo.
- Contraste sempre legível, também em cima de fotos (usar camada escura por cima da foto).

**Referências já feitas:**

| Site | Fundo | Escuro | Principal | Apoio | De onde veio |
|---|---|---|---|---|---|
| Casa do Café | creme `#fffbf3` / toldo `#f1e4bd` | café `#3b2418` | vermelho moinho `#b3262b` | dourado `#b9862f` | toldo creme, madeira, moinhos vermelhos |
| FC Bom-Sucesso | branco / névoa `#F4F5F7` | azul `#16357E` / `#0D2255` | dourado `#F2C300` (texto: `#B58C00`) | — | emblema do clube |
| Recreio (apresentação) | creme `#FBF7EE` | `#1A1414` | vermelho `#D52B1E` | amarelo `#F2D50F` | cores do Recreio |
| NiceHealthcare | creme `#fff6ea` | azul-marinho `#3b4f8b` (texto) | azul `#526cc3` | rosa `#eb7aac` / `#f392bc`, lilás `#d3c4df` | publicações originais do Canva (paleta escolhida pela Inês) |
| O Cantinho do António | carvalho `#f3e8d4` / `#e4cfa9` | preto `#171513` (balcão e toldo) | conhaque `#a35d33` | vinho tinto `#4a1f24` só na garrafeira (antes verde Juniper `#3b5322`) | balcão de azulejo preto, toldo preto, parede de carvalho, cadeiras de pele; o rosa é do prédio, não conta |

**Linhas finas** entre fotos e secções: na cor escura do site (ex.: o fundo do topo), nunca preto puro `#000`. **Uma secção especial pode ter cor própria** tirada do que mostra (garrafeira do Cantinho em vinho tinto).

**Tipografia usada:** Casa do Café — Fraunces + Inter · Bom-Sucesso — Barlow Condensed + Inter · Recreio — Libre Baskerville + Public Sans · NiceHealthcare — Cormorant Garamond itálico + Atkinson Hyperlegible · O Cantinho do António — Young Serif + Instrument Sans.

**Escolher letras com o Russo:** ele não conhece os nomes das letras. Mostrar sempre as opções escritas (a frase real do site em cada letra) numa página com link, que abra no telemóvel, e pedir que escolha por letra (A, B, C…).

## 4. Tipografia

- **Dois tipos de letra**: um de carácter para títulos (usado com contenção) e um limpo para o texto.
- Sempre do Google Fonts, com alternativa definida (`Georgia, serif` / `system-ui, sans-serif`).
- Casa do Café: **Fraunces** (títulos, itálico nos destaques) + **Inter** (texto).
- Títulos grandes e curtos. Texto corrido com no máximo ~65 caracteres por linha.
- Etiquetas pequenas em MAIÚSCULAS com espaçamento entre letras (ex.: "A NOSSA HISTÓRIA").
- **Línguas asiáticas:** a letra do site vem primeiro e a Noto (SC/JP/KR) depois, para as letras latinas não mudarem ao trocar de língua.
- Títulos curtos e diretos ("A casa", "A ementa"); nada de frases-título decorativas.

## 5. Estrutura típica de um site

Adaptar ao negócio, mas partir disto:

1. **Entrada** — foto real do sítio em fundo inteiro, título curto com a promessa da casa, 2 botões (ver produto / visitar).
2. **3 destaques** — o que torna a casa única.
3. **Faixa a deslizar** — palavras do negócio (origens, produtos, valores).
4. **História** — foto da fachada + texto + números verdadeiros (ano de abertura, etc.).
5. **O produto** — menu, origens, serviços, equipas… a peça central.
6. **Como funciona / processo** — quando existe um processo real (só usar números 01, 02… se for mesmo uma sequência).
7. **Galeria** — fotos reais.
8. **Visite-nos / contactos** — horário (com "Aberto agora"), morada, mapa, telefone.
9. **Rodapé** — redes sociais + **assinatura "Site feito por Sérgio David Ferreira"**.

## 6. Movimento e animações (a nossa forma de dar vida)

Usar com intenção, sem exagerar:

- **Entrada animada** na primeira visita, ligada ao negócio (ex.: chávena a encher). Curta (~2 s) e só uma vez por sessão.
- **Título que sobe palavra a palavra** e foto de fundo com zoom lento.
- **Revelar ao fazer scroll**, em cascata, variando: subir, entrar da esquerda/direita, cortina nas fotos.
- **Paralaxe suave** na foto de entrada e pequenos elementos do negócio a flutuar (grãos de café, bolas, etc.).
- **Faixa a deslizar** que acelera com o scroll.
- **Contadores** nos números importantes.
- **Barra de progresso** no topo e menu que se esconde ao descer e volta ao subir.
- **3D com significado** (o Russo gosta e pede): um objeto real do negócio em 3D na abertura (ex.: o moinho da Casa do Café) e um globo/mapa 3D quando há origens ou localização. Three.js r128 do cdnjs; desenhar só quando está no ecrã; sempre com alternativa sem WebGL.
- **Secções-cortina e realismo** (pedido do Russo, nov. 2026):
  - alternar secções claras e escuras;
  - **3D leve para PCs fracos.** As cenas 3D têm de correr num portátil fraco:
    - resolução no máximo 1,5×;
    - camadas desfocadas em baixa resolução;
    - nada de `backdrop-filter` por cima de animações;
    - tudo para quando sai do ecrã;
    - qualidade adaptável que baixa a resolução se as imagens por segundo caírem.
  - **cortinas: no máximo duas**, uma à saída da entrada e outra no fim. A secção fica presa (`position: sticky`, `top = altura do ecrã − altura da secção`) e a seguinte sobe por cima, com cantos redondos e sombra, enquanto a de baixo escurece. Uma por secção cansa: o Russo rejeitou.
  - o efeito mais forte vai para a entrada, por exemplo objetos 3D realistas (grãos com sulco, luz de estúdio, desfoque nos que estão perto) e um objeto da casa (ex.: o saco kraft);
  - o objeto 3D do negócio vai para a secção que conta a história dele (ex.: o moinho na secção dos moinhos);
  - etiquetas em letra de máquina (JetBrains Mono, "// ...").
  - Referências de outros sites servem só de inspiração, nunca se copiam.
- **O movimento segue o sentimento do negócio.** Numa loja ou num clube pode impressionar; num serviço de saúde tem de acalmar (NiceHealthcare: fios 3D finos que ondulam devagar com o scroll e um fundo que muda entre tons claros). Público idoso: letra grande, contraste forte, ação principal sempre à vista.
- **Fotos fracas não vão para a abertura.** Se a única foto boa não existe, a abertura é 3D ou gráfica, e as fotos ficam para a galeria.
- **Linhas longas que seguem o scroll desenham-se num canvas dentro da página** (não preso ao ecrã: no iPhone encrava), redesenhando só a faixa à vista e com o tamanho limitado a cerca de 12 M píxeis. SVG com tracejado em páginas muito altas pode parar a pintura.
- **Respeitar quem pede menos movimento** (`prefers-reduced-motion`): tudo visível sem animação.

## 7. Conteúdo e textos

- Português de Portugal. Frases curtas e diretas, como se fala ao balcão.
- **Nunca inventar** opiniões de clientes, números, prémios ou histórias. O que não se sabe fica `[a confirmar]` a amarelo.
- Usar as palavras do negócio (ex.: bica, galão, moagem, arábica, sócios, plantel).
- O aviso "Protótipo · texto em amarelo a confirmar" fica visível até o cliente aprovar.
- **Publicações das redes não são conteúdo de site** (regra da Inês, NiceHealthcare, 4 nov. 2026). Das publicações usa-se a **informação** (serviços, valores, cores, estilo), nunca o **formato**: nada de "3 sinais de…", "X vs Y", listas com tracinhos, etiquetas soltas ou textos copiados palavra a palavra. O site escreve-se de raiz.
- **Site informativo = curto.** A pessoa tem de perceber o que é, onde, e como marcar/ligar. Cada secção tem de responder a uma dessas perguntas; se não responde, sai.
- **Consistência:** só 2 estilos de letra no site inteiro (títulos e texto), as mesmas cores de texto em todo o lado (só da paleta do cliente, nunca tons inventados "para contraste"), e, quando há cartões, o mesmo tipo de cartão. Nada de caixa clara sobre fundo claro, nem de um cartão de cor diferente "em destaque".
- **Cada secção entrega a informação de forma diferente** (Russo e Inês, NiceHealthcare, 6 nov. 2026). Consistência é na letra e nas cores, não na forma. Caixas atrás de caixas enjoam, mesmo com um bom fundo: se uma secção é caixa, a seguinte é outra coisa (linhas sem caixa, faixa, linha que se enche, tabela, seletor, número gigante). É isto que dá flow a um site só de informação. Modelo: a Casa do Café.
- **Sites com linhas animadas** (pesquisa de 6 nov. 2026, relatório em `nicehealthcare/reports/Animação de linhas na web.md`). O ar infantil vem de tudo pesar o mesmo, não da falta de técnica:
  - a linha tem de **significar** alguma coisa e ir de A a B, acabando numa ação (por exemplo, o número de telefone);
  - a qualidade decide-se no **desenho de origem**: gesto feito à mão, poucos pontos, curvas decididas, nunca vetorização automática;
  - **traço com grossos e finos**: forma preenchida revelada por máscara, porque o traço normal de SVG tem sempre a mesma espessura;
  - **nunca desenhar ilustrações por código**: vêm de uma pessoa ou de um gerador de imagens, no estilo aprovado, e o código só as revela, por máscara, ao ritmo do scroll (lição da v20 da NiceHealthcare, que o Russo achou horrível);
  - **três pesos** (principal, carril a 20-30 %, hachura), um só degradê e nada de néon ou halos;
  - **desenho grande**, 70 a 120 % da altura do ecrã, cortado pela borda; ícones pequenos centrados parecem pictogramas;
  - gesto em vez de boneco: nada de bonecos a esticar-se, estetoscópios ou figuras frágeis;
  - **o caminho é do dedo, o gesto acontece uma vez**: o fio segue o scroll, os desenhos completam-se e ficam parados, o texto nunca se mexe, e nada de ressaltos;
  - os fios andam nas margens e nunca por cima de títulos;
  - scroll sempre nativo, sem secções presas nem Lenis;
  - feixes como seda: ruído que muda ao longo do fio e quase nada entre fibras; em fundo claro, a cor absorve como tinta, não emite luz;
  - **movimento automático com mais de 5 s precisa de botão de pausa**, mesmo decorativo (WCAG 2.2.2): pará-lo aos 4 s;
  - o telefone de referência é um Android barato de 2023, e o texto, o número e o botão vivem em HTML puro, sem depender da animação.
- Ver sites do mesmo género (em Portugal e lá fora) antes de desenhar a estrutura.
- **Prompts para outras IAs (ChatGPT, imagens, 3D): sempre o mais completos possível** (regra do Russo, 14 nov. 2026). Nunca curtos. Cada prompt leva:
  - o objetivo e o contexto (para que serve e como vai ser usado no site, por exemplo repetido ao longo de um caminho);
  - o formato e o tamanho em píxeis, e o fundo (transparente, ou verde croma #00FF00 se não der);
  - a disposição exata, com coordenadas, quando há várias peças;
  - a descrição detalhada de cada peça;
  - a câmara, a lente, a luz e as cores em hex (as do site);
  - a lista do que é proibido e uma lista de verificação antes de entregar;
  - uma frase pronta para pedir a correção se sair mal.
  - Exemplo: `cantinho-antonios-spot/referencias/PROMPTS-CHATGPT.md`.

## 8. Fotografias

- **Sempre fotos reais** do negócio. São o que mais valoriza o site.
- Fotos do Google Maps só como provisórias, com crédito ao autor, e substituir antes de ir para o ar.
- Recortar barras e botões de capturas de ecrã antes de usar.
- Guardar em `img/` dentro da pasta do site, em `.jpg`, com nomes simples (`fachada.jpg`, `balcao.jpg`).
- Sugerir ao cliente: fotos de dia, com boa luz, da fachada, do interior, do produto em detalhe e da equipa.

## 9. Técnica

### Cada site é um repositório no GitHub, com front-end e back-end desde o início (regra do Russo, 4 nov. 2026)
Alguns sites vão precisar de back-end (formulários, encomendas, marcações, emails). Para **nunca ter de refazer um site**, todos nascem já com esta estrutura:
```
<nome-do-site>/            ← um repositório GitHub por site (privado)
  frontend/                ← o site: index.html + img/ (o que o visitante vê)
  backend/functions/       ← funções do servidor (Netlify Functions), vazias até serem precisas
  netlify.toml             ← diz à Netlify onde está o site e as funções
  README.md                ← o que é, como pré-visualizar e publicar
  BRIEFING.md, referencias/, publicar/   ← o nosso trabalho interno
```
- **Alojamento:** Netlify, ligado ao repositório do GitHub (cada envio publica o site sozinho). Grátis para sites pequenos.
- **Back-end:** Netlify Functions em `backend/functions/`. O site chama-as em `/api/<nome>`.
- Repositório **privado** por defeito, na conta GitHub do Russo: **`sergioferrerira`** (`gh` já tem sessão iniciada neste PC).
- No fim de cada sessão de trabalho num site: commit + `git push` para o GitHub.

### Pronto para publicar (checklist técnica, tirada da revisão da NiceHealthcare)
- **Letras alojadas no próprio site** (`frontend/fonts/`, só os pesos usados). Nada de pedidos à Google no site final, por causa do RGPD.
- **Imagens:**
  - versões para telemóvel e PC (`srcset`);
  - logótipo em PNG transparente, pequeno;
  - nada acima de ~250 KB sem razão.
- **Cabeçalho:**
  - título final e `description`;
  - `canonical` e `theme-color`;
  - favicon SVG e `apple-touch-icon`;
  - **Open Graph** com imagem de partilha 1200×630 (o link vai circular no WhatsApp).
- **Google:** dados estruturados (`LocalBusiness` ou `MedicalBusiness`), `robots.txt` e `sitemap.xml`.
- **Página de política de privacidade** ligada no rodapé.
- **Animações:**
  - um só ciclo `requestAnimationFrame` (nunca arrancar dois ao voltar ao separador);
  - 30 imagens por segundo no telemóvel.
- **Ícones repetidos** desenhados uma vez (`<symbol>` + `<use>`).
- **Contraste:** letra pequena ≥ 4,5:1 **em todos os fundos** por onde passa (atenção aos fundos que mudam de cor).
- **Sem notas internas** nos comentários do código (o código-fonte é público).
- **O link do Claude gera-se** a partir de `frontend/` com `publicar/gerar.ps1`. Nunca se edita a cópia à mão.

### O site em si
- Um só ficheiro HTML com CSS e JS lá dentro, sem frameworks — abre em qualquer computador com duplo clique.
- Cores e tipos de letra sempre em variáveis CSS no topo.
- Testar a ~375 px (telemóvel) e no computador. Nada pode fazer scroll para o lado.
  - Usar sempre `html, body { overflow-x: clip }`: no telemóvel, `overflow-x: hidden` no body **não chega** e a página continua a deslizar para os lados se algo sair do ecrã (aconteceu na NiceHealthcare, 4 nov.).
  - Como testar: comparar `innerWidth` com `document.documentElement.clientWidth`. Se forem diferentes, há algo a sair para o lado. O `scrollWidth` engana.
- Pré-visualizar com o servidor local (`.claude/serve.ps1`): `http://localhost:5180/<nome-do-site>/frontend/` (sites antigos sem `frontend/`: `http://localhost:5180/<nome-do-site>/`).

## 10. Publicar para mostrar ao cliente

- Link privado do Claude (artifact). A cópia para publicar fica em `<site>/publicar/`.
- No link publicado não é possível embutir mapas (iframes): trocar o mapa por um cartão "Abrir no Google Maps".
- O link começa privado: partilhar no menu **Partilhar** da página antes de enviar ao cliente.

## 11. Checklist antes de mostrar

- [ ] Fotos reais (ou provisórias com crédito)
- [ ] Nome, morada, horário e contactos certos ou marcados `[a confirmar]`
- [ ] Nada inventado
- [ ] Testado no telemóvel e no computador
- [ ] Animações suaves e funciona sem elas
- [ ] Assinatura "Site feito por Sérgio David Ferreira" no rodapé
- [ ] Aviso de protótipo visível

## 12. O motor de trabalho (como uma empresa: nada se perde)

### Uma pasta por projeto, sempre igual (e cada pasta é um repositório GitHub)
```
Sites/
  <projeto>/
    BRIEFING.md        ← fonte de verdade: estado, links, respostas do Russo, identidade, por confirmar
    frontend/          ← o site: index.html + img/ (fotos e emblema, nomes simples)
    backend/functions/ ← funções do servidor (vazias até serem precisas)
    netlify.toml       ← alojamento na Netlify
    publicar/          ← cópia preparada para o link do Claude
    referencias/       ← especificações, propostas, protótipos antigos, notas
```
Tudo o que for feito noutra conversa ou noutro sítio (artifacts, documentos, apresentações) fica **ligado no BRIEFING.md**. Se não está no BRIEFING, não existe.

### Estados de um projeto
`Ideia` → `Pesquisa` → `Perguntas` → `Plano` → `Protótipo` → `Pronto a apresentar` → **`Em pausa (a apresentar)`** → `Feedback` → `Final` → `Publicado` → `Manutenção`
O estado de cada projeto está na tabela do `CLAUDE.md` e no topo do seu `BRIEFING.md`. Projeto em pausa não se mexe sem o Russo dizer.

### O ciclo de cada conversa
1. **Abrir:** ler este livro, `APRENDIZAGENS.md`, o `CLAUDE.md` e o `BRIEFING.md` do projeto.
2. **Procurar o que já existe:** artifacts do Russo, conversas anteriores, a pasta.
3. **Pesquisar os factos públicos** e mostrar ao Russo só para confirmar.
4. **Perguntar o que só o Russo sabe** (objetivo, sentimento, cores, contexto da reunião). Na dúvida, perguntar antes de agir.
5. **Trabalhar.**
6. **Fechar:** atualizar o `BRIEFING.md` (estado, links novos, o que ficou por confirmar), a tabela do `CLAUDE.md` e `APRENDIZAGENS.md`. Regra geral nova → este livro.

### Entregáveis para apresentar
Conforme o caso: **protótipo do site** (link privado), **apresentação** (Slides) e **proposta escrita** (documento) com secção "Notas internas — apagar antes de entregar". Nomes dos links: `<Projeto> · <peça>` (ex.: "Recreio · Apresentação").

### Decisões de negócio (respostas do Russo, 31 out. 2026)
- **Tecnologia do site final:** decide-se caso a caso. O protótipo é sempre uma página simples para apresentar; o site final pode ser outra coisa (ex.: Next.js + Sanity + Vercel no Bom-Sucesso).
- **O que se oferece:** a proposta de partida é sempre o pacote **site + redes sociais + gestão**, a **valor fixo**. Cada cliente é uma decisão nova: o Russo diz-me o que ficou combinado depois de falar com o cliente. Não assumir preço nem âmbito.
- **Preços de lançamento (Russo, 2 nov. 2026)** — valores simbólicos para os primeiros clientes, em troca de poder mostrar o site como exemplo:
  - Site à medida: **50 – 100 €**
  - Pacote de funcionalidades extra (3D, várias línguas, encomenda para levantar, ficha do Google Maps com fotos, horário e descrição): **50 €** (as línguas estão incluídas)
  - Alojamento: 0 € para sites simples (Netlify / GitHub Pages)
  - Folha de consulta rápida: `casa-do-cafe/PRECOS.md`
  - Criar as redes sociais: **50 €** · Gestão das redes: **30 €/mês**
  - Manutenção do site: **20 – 30 €/mês** · Domínio: **15 – 20 €/ano**
- **Domínio, alojamento e manutenção:** combinados com cada cliente. Ficam no BRIEFING quando houver decisão.
- **Assinatura pública:** "Site feito por **Sérgio David Ferreira**" no rodapé. ("Russo" é só como eu o trato.)

### Correções e conflitos
- Se a pesquisa contradiz um documento do projeto, **vale o documento do projeto** e assinala-se a diferença no BRIEFING.
- Datas e números em conflito ficam `[a confirmar]` até o cliente confirmar.
