export class Person {
  static standardAge = 0;
  static standardCpf = "000.000.000-00";

  constructor(
    public name: string,
    public lastname: string,
    public idade: number,
    public _cpf: string
  ) {}

  methodRegular(): void {}
  //metodo sem instancia  = Static
  static createPerson(name: string, lastname: string): Person {
    return new Person(name, lastname, Person.standardAge, Person.standardCpf);
  }
}
const person = new Person("people", "civil", 30, "123.444.555-00");
const person2 = Person.createPerson("Developer", "people");
console.log(person);
console.log(person2);
person.methodRegular();
