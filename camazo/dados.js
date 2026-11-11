/* ============================================================
   DADOS: editar aqui preços, serviços e horário.
   Usado pelo site (index.html) e pela página de gestão (gestao.html).
   ============================================================ */
const TELEFONE = "351924711734";

const SERVICOS = [
  { id: "corte",        cat: "cortes", ic: "tesoura", nome: "Corte",                                        min: 30, preco: 15 },
  { id: "barba",        cat: "cortes", ic: "navalha", nome: "Barba",                                        min: 15, preco: 10 },
  { id: "crianca-deg",  cat: "cortes", ic: "maquina", nome: "Corte criança · degradê",                      min: 30, preco: 15 },
  { id: "crianca-soc",  cat: "cortes", ic: "pente",   nome: "Corte criança · social",                       min: 30, preco: 13 },
  { id: "blackmask",    cat: "cortes", ic: "mascara", nome: "Máscara Black · pontos negros",                   min: 20, preco: 12 },
  { id: "sobrancelhas", cat: "cortes", ic: "pinca",   nome: "Sobrancelhas",                                 min: 10, preco: 5 },
  { id: "cera",         cat: "cortes", ic: "cera",    nome: "Cera no nariz",                                min: 10, preco: 5 },

  { id: "c-sob",        cat: "combos", ic: "tesoura", nome: "Corte + sobrancelhas",                         min: 30, preco: 17, avulso: 20 },
  { id: "c-barba",      cat: "combos", ic: "navalha", nome: "Corte + barba",                                min: 60, preco: 20, avulso: 25 },
  { id: "c-barba-sob",  cat: "combos", ic: "navalha", nome: "Corte + barba + sobrancelhas",                 min: 60, preco: 22, avulso: 30 },
  { id: "c-full",       cat: "combos", ic: "chave",   nome: "Corte + barba + sobrancelhas + cera no nariz", min: 60, preco: 25, avulso: 35 },
  { id: "c-bm",         cat: "combos", ic: "mascara", nome: "Corte + Máscara Black",                           min: 50, preco: 25, avulso: 27 },
  { id: "c-barba-bm",   cat: "combos", ic: "mascara", nome: "Corte + barba + Máscara Black",                   min: 80, preco: 30, avulso: 37 },
  { id: "c-top",        cat: "combos", ic: "chave",   nome: "CAMAZOPACK · corte + barba + cera no nariz + Máscara Black", min: 85, preco: 35, avulso: 42 },

  { id: "pintar",       cat: "cor",    ic: "pincel",  nome: "Pintar cabelo",                                min: 30, preco: 55, ate: 70 },
  { id: "madeixas",     cat: "cor",    ic: "pincel",  nome: "Madeixas",                                     min: 45, preco: 45, ate: 70 },
];

/* 0 = domingo … 6 = sábado  ·  null = fechado */
const HORARIO = {
  1: ["09:00", "20:00"], 2: ["09:00", "20:00"], 3: ["09:00", "20:00"],
  4: ["09:00", "20:00"], 5: ["09:00", "20:00"], 6: ["09:00", "20:00"],
  0: ["09:00", "15:00"],
};
const INTERVALO_MIN = 30;
const DIAS_A_MOSTRAR = 14;
