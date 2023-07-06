export function add(a: unknown, b: unknown): string | number {
  if (typeof a === "number" && b === "number") return a + b;
  /* ou  =>
 return typeof a === 'number' && typeof b === 'number' ? a+b :`${a}${b}`
 */
  return `${a}${b}`;
}

console.log(add(1, 5));
console.log(add("a", "b"));

type Person = { type: "Person"; name: string };
type Animal = { type: "Animal"; cor: string };
type PersonAnimal = Person | Animal;

export class Student implements Person {
  type: "Person" = "Person";
  constructor(public name: string) {}
}

function showName(obj: PersonAnimal): void {
  /*   if ("name" in obj) console.log(obj.name); */

  switch (obj.type) {
    case "Person":
      console.log(obj.name);
      return;
    case "Animal":
      console.log("this Animal");
  }
}

showName(new Student("Dev"));
showName({ type: "Animal", cor: "brown" });
