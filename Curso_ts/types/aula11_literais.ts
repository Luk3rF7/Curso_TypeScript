let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
let a = 100 as const;

function optionCors(cor: "red" | "yellow" | "blue"): string {
  return cor;
}

console.log(optionCors("red"));
const person = {
  name: "Lucas" as const,
  surname: "Felipe",
};

console.log(person);
//module mode
export default 1;
