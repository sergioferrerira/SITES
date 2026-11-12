# Regras de trabalho (obrigatórias)

Estas regras valem para este projeto e para qualquer site ou aplicação que façamos.
Vêm de um erro real: a viagem da câmara para dentro da gaveta funcionava no Chrome do
computador, mas no iPhone ficava presa e invertida. Para "resolver", foi desligada no
iPhone e trocada por outra animação, sem perguntar. O cliente ia receber um site
diferente daquele que foi desenhado e aprovado.

## 1. O que foi desenhado e aprovado tem de existir na versão final

- Uma funcionalidade ou efeito aprovado **nunca** é desligado, trocado ou simplificado
  em silêncio. Se algo não funciona num aparelho, procura-se a causa e corrige-se.
- Se não houver forma de manter o efeito igual em todo o lado, **pergunta-se primeiro**
  ao Sérgio, explicando o problema e as opções, antes de mudar o que foi aprovado.
- Uma coisa só está "pronta" depois de verificada **na versão publicada**, e não só no
  ambiente de testes.

## 2. Todos os aparelhos desde o primeiro dia

- Constrói-se desde o início para funcionar em **qualquer** telemóvel, tablet ou
  computador e em qualquer browser: Chrome, Safari (incluindo **todos os browsers do
  iPhone**, que usam por dentro o motor do Safari), Firefox, Samsung Internet e Edge.
- **Um só caminho de código para todos.** Não se deteta o modelo, o sistema ou o browser
  (user agent) para mudar o comportamento. Só há alternativa quando algo **falha**
  (por exemplo, uma biblioteca que não carregou), nunca por ser um aparelho diferente.
- Não se usam funcionalidades em que os browsers se comportam de forma diferente sem
  as testar em todos os motores. Exemplo do que correu mal: CSS `zoom` combinado com
  transformações 3D e medidas (`getBoundingClientRect`).
- As bibliotecas são servidas pelo próprio site (pasta `vendor/`), não por servidores
  externos que um bloqueador de anúncios pode cortar.
- As definições do utilizador, como "reduzir movimento", não podem fazer desaparecer a
  experiência principal sem isso ter sido decidido com o Sérgio.

## 3. Como se testa antes de dizer que está feito

- Testa-se em vários tamanhos: telemóvel pequeno (320 px), telemóvel normal, tablet e
  computador (de 1280×600 a 1920×1080), com e sem "reduzir movimento".
- Testa-se nos **três motores**: Chromium, WebKit (o do Safari e do iPhone) e Firefox.
  Com Playwright: `chromium`, `webkit` e `firefox`.
- Se algum motor não estiver disponível no ambiente de testes, **diz-se isso
  claramente antes** de dar o trabalho como pronto e pede-se o teste num aparelho real
  (iPhone) **antes** de mandar ao cliente. Nunca se assume que funciona.
- Animações e efeitos testam-se fotograma a fotograma, com capturas, em cada motor, e
  não só "abre e fecha sem erros".
