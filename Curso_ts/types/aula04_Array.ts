// * Array<T> - T[] = Genericts

export function multArgs(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}

export function concatString(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}
//instancia
const result = multArgs(1, 2, 3);
const concate = concatString("Hello ", "world ", "!");
const wordUpperCase = toUpperCase("mai", "min", "max");

//saida
console.log(result);
console.log(concate);
console.log(wordUpperCase);
