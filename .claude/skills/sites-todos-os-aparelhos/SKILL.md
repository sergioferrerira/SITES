---
name: sites-todos-os-aparelhos
description: Regras obrigatórias do Sérgio para construir ou alterar qualquer site, página web, web app ou aplicação (HTML/CSS/JS, React, animações, efeitos 3D, marcações, landing pages). Usar SEMPRE antes de começar a construir, ao mudar o design ou as animações, e antes de dizer que algo está pronto ou de o publicar. Garante que o design aprovado existe na versão final e que tudo funciona igual em todos os aparelhos e browsers, incluindo iPhone/Safari.
---

# Sites e apps: o design aprovado, igual em todos os aparelhos

Estas regras são obrigatórias em qualquer site ou aplicação.

**De onde vêm:** no site da Camazo Barbershop, a viagem da câmara para dentro de uma gaveta
funcionava no Chrome do computador, mas no iPhone ficava presa e invertida. Para "resolver",
foi desligada no iPhone e trocada por outra animação, sem perguntar. Num outro telemóvel não
aparecia animação nenhuma. O cliente ia receber um site diferente do que foi desenhado.
Isto não pode voltar a acontecer.

## Regra 1: o que foi desenhado e aprovado tem de existir na versão final

- Nunca desligar, trocar ou simplificar em silêncio um efeito, animação ou funcionalidade
  aprovada. Se falha num aparelho, procurar a **causa** e corrigi-la.
- Se for mesmo impossível manter igual em todo o lado, **perguntar primeiro ao Sérgio**,
  explicando o problema e as opções, antes de mudar o que foi aprovado.
- Só está "pronto" depois de verificado **na versão publicada** (o endereço real), e não só
  no ambiente de testes.

## Regra 2: todos os aparelhos desde o primeiro dia

- Construir desde o início para **qualquer** telemóvel, tablet ou computador e para todos os
  browsers: Chrome, Safari, Firefox, Samsung Internet e Edge.
  **Todos os browsers do iPhone e do iPad** (Safari, Chrome, Brave, Instagram, WhatsApp…) usam
  por dentro o motor do Safari (WebKit).
- **Um só caminho de código para todos.** Não detetar o modelo, o sistema ou o browser
  (user agent, `navigator.platform`…) para mudar o comportamento. Só há alternativa quando
  algo **falha** (por exemplo, uma biblioteca que não carregou), nunca por ser outro aparelho.
- Evitar técnicas em que os browsers se comportam de forma diferente, ou testá-las em todos
  os motores antes de as usar. Exemplos de risco:
  - CSS `zoom` (cada motor mede-o à sua maneira; com transformações 3D e
    `getBoundingClientRect` entortou a cena no Safari);
  - 3D com `preserve-3d` em várias camadas;
  - `backdrop-filter`, `:has()` e unidades novas sem alternativa;
  - `position: fixed` dentro de elementos com `transform`, `filter` ou animação.
- Bibliotecas (GSAP, etc.) servidas pelo próprio site (pasta `vendor/`), e não por CDN
  externa, que bloqueadores de anúncios e browsers como o Brave podem cortar.
- As definições do utilizador ("reduzir movimento", poupança de bateria) não podem fazer
  desaparecer a experiência principal sem isso ter sido decidido com o Sérgio.
- Layout pensado para o telemóvel e para o computador desde o início: 320 px de largura até
  ecrãs grandes, ecrãs baixos de portátil, zoom do browser e escalas do Windows (125%/150%).

## Regra 3: testar antes de dizer que está feito

1. Tamanhos: telemóvel pequeno (320×568), telemóvel normal (390×844), tablet e computador
   (1280×600, 1366×650, 1920×1080), com e sem "reduzir movimento".
2. Os **três motores**: Chromium, WebKit (Safari/iPhone) e Firefox. Com Playwright:
   `chromium`, `webkit` e `firefox`.
3. Animações e efeitos testam-se **fotograma a fotograma, com capturas, em cada motor**, e não
   só "abre e fecha sem erros". Confirmar que o primeiro e o último fotograma batem certo com
   a página real.
4. Testar também o caso de falha: sem a biblioteca de animação, sem rede a meio e com o
   bloqueador de anúncios ligado. Nada pode ficar preso.
5. Se algum motor **não estiver disponível** no ambiente de testes (é comum faltar o WebKit),
   **dizê-lo claramente ao Sérgio antes** de dar o trabalho como pronto, e pedir o teste num
   **iPhone real** antes de mandar ao cliente. Nunca assumir que funciona.

## Antes de entregar ao cliente

- [ ] O design e as animações aprovadas estão todas na versão publicada.
- [ ] Testado em Chromium, WebKit e Firefox (ou falta assinalada e testada num iPhone real).
- [ ] Testado em telemóvel pequeno, telemóvel normal, tablet e computador.
- [ ] Nenhum código deteta o aparelho para mudar o comportamento.
- [ ] Bibliotecas servidas pelo próprio site.
- [ ] Os casos de falha não deixam nada preso.
