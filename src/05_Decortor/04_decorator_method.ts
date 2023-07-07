function decorador(
  classPrototype: any,
  nameMetodo: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(nameMetodo);
  console.log(descriptor);
}
export class OnePerson {
  name: string;
  lastname: string;
  age: number;
  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  @decorador
  metodo(msg: string): string {
    return `${this.name}${this.lastname}:${msg}`;
  }
  get fullName(): string {
    return `${this.name}${this.lastname}`;
  }

  set fullName(value: string) {
    const word = value.split(/\s+/g);
    const firstName = word.shift();
    if (!firstName) return;
    this.name = this.fullName;
    this.lastname = word.join(" ");
  }
}
const person = new OnePerson("LC", "Felipe", 28);
const metodo = person.metodo("Hello wprd!");
console.log(metodo);
