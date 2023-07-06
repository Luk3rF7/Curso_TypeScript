//type vai ser interface
type TypePerson = {
  name: string;
  lastname: string;
  fullname(): string;
};

export class Person implements TypePerson {
  constructor(public name: string, public lastname: string) {}
  fullname(): string {
    return this.name + " " + this.lastname;
  }
}

const person = new Person("Luke", "Jr");
console.log(person);
console.log(person.fullname());
