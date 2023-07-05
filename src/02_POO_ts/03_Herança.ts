export class Person {
  constructor(
    public name: string,
    public lastname: string,
    private age: number,
    protected cpf: string
  ) {}

  getIdade(): number {
    return this.age;
  }
  getCpf(): string {
    return this.cpf;
  }
  getFullName(): string {
    return this.name + " " + this.lastname;
  }
}

export class Stundet extends Person {
  getFullName(): string {
    return `Student: ${this.name}  ${this.lastname} `;
  }
}
export class Client extends Person {
  getFullName(): string {
    return ` Name: ${this.name} Client: ${this.lastname} `;
  }
}

const person = new Person("people", "pl", 28, "000.000.000.-00");
const student = new Stundet("Lc", "student", 28, "000.000.000-00");
const client = new Client("Lc", "premium", 28, "000.000.000-00");

console.log(person.getFullName());
console.log(student.getFullName());
console.log(client.getFullName());
