function add(a: number, b: number): number {
  return a + b;
}
function addConcatOrSum(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") return a + b;
  if (typeof a === "string" && typeof b === "string") return a + b;
  return `${a}${b}`;
}

console.log(add(10, 20));
console.log(addConcatOrSum(10, 20));
console.log(addConcatOrSum("10", "20"));
