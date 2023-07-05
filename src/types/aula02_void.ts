// * Void = retorna nda

// * ...arg: string[] -> recebe array de string
function noReturn(...arg: string[]): void {
  console.log(arg.join(""));
}

noReturn("Lucas", " felipe", " vicky");

// * Obj com metodo
const people = {
  nome: "Dev",
  sobrenome: "Stack",

  showName(): void {
    console.log(this.nome + " " + this.sobrenome);
  },
};
people.showName();
