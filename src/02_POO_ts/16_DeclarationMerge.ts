interface Person {
  name: string;
}

interface Person {
  readonly lastname: string;
}
interface Person {
  readonly enderecos: readonly string[];
}
interface Person {
  readonly age?: number;
}
const person: Person = {
  name: "LC",
  lastname: "F",
  enderecos: ["Av.Brasil"],
  age: 30,
};

person.age = 30;
console.log(person);
