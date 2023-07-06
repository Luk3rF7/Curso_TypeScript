//type vai ser interface
interface TypeName {
  name: string;
}
interface TypeLastname {
  lastname: string;
}
interface TypeFullname {
  fullname(): string;
}
interface TypePerson extends TypeName, TypeLastname, TypeFullname {}

export class Person implements TypePerson {
  constructor(public name: string, public lastname: string) {}
  fullname(): string {
    return this.name + " " + this.lastname;
  }
}

const person = new Person("Luke", "Jr");
console.log(person);
console.log(person.fullname());
