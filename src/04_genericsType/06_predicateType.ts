export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

export function sum<T>(...args: T[]): number {
  const returns = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);
  return returns;
}
console.log(sum(132, 132));
console.log(sum(...[1, 2, 3, "b", "a", "c", 1]));
console.log(sum("a", "b", "c"));
