export class Person {
  constructor(
    private name: string,
    private lastname: string,
    private idade: number,
    private _cpf: string
  ) {
    this.cpf = _cpf;
  }
  set cpf(value: string) {
    console.log("Setter call");
    this._cpf = value;
  }

  get cpf(): string {
    console.log("Getter call");
    return this._cpf.replace(/\D/g, "");
  }
}
const person = new Person("people", "civil", 30, "123.444.555-00");
person.cpf = "123.456.789-01";
console.log(person.cpf);
