type hasName = { name: string };
type hasSurname = { surname: string };
type hasAge = { age: number };
type People = hasName & hasAge & hasSurname;

type AB = "A" | "B ";
type AC = "A" | "B";
type AD = "A" | "D";
type intersection = AB & AC & AD;
const people: People = {
  age: 30,
  name: "Lucas",
  surname: "Felipe",
};
console.log(people);
