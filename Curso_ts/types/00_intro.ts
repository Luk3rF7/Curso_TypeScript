/* esllint-disable */
// * Tipos Básico (aqui ocorre inferência de tipos)
let nome: string = "Luiz"; // qualquer tipo de strings
let idade: number = 29; //10,1.57,-5.55,oxf00d,0b1010,0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol("qualquer-symbol"); //symbol
let big: bigint = 10n; //bigint

// * Arrays
let arrayNumber: Array<number> = [1, 2, 3];
let arrayString: Array<string> = ["1", "2", "3"];
//outro tipos:
let arrayNumber2: number[] = [1, 2, 3];
let arrayString2: string[] = ["1", "2", "3"];

//objetos:
// * ?: < - opcional
let pessoa: { nome: string; age: number; adult?: boolean } = {
  nome: "Lucas",
  age: 28,
  adult: true,
};

//* Funções:

function sum(x: number, y: number) {
  return x + y;
}
// * outro metodo
const sum2: (x: number, y: number) => number = (x, y) => x + y;
const result = sum(2, 2);
