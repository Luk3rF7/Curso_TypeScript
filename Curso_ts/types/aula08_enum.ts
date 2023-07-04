//como criar enum

enum Cors {
  //adiciono os campos:
  VERMELHO = 100, //* posso usar = 1 dai ele começa
  BLUE = 200,
  GREEN = "GREEN",
  YELLO = 201,
}

enum Cors {
  PINK = 205,
  PURPLE = "PURPLE",
  GREY = 208,
}

export function optionCors(cor: Cors): void {
  console.log(Cors[cor]);
}

optionCors(Cors.PURPLE);
console.log(Cors);
console.log(Cors);
