// * tuple e array com tipos bem especifico
// em tuple posso ter quanto valow eu quiser
const dateClient: readonly [number, string] = [1, "Lucas"];
const dateClient2: [number, string, string] = [1, "Lucas", "Felipe"];
const dateClient3: [number, string, string?] = [1, "Lucas"];
const dateClient4: [number, string, ...string[]] = [1, "Lucas"];

//readonly
const array1: readonly string[] = ["Developers", "Desenvolvedor"];
//outro metodo de utiliza readonly
const array2: ReadonlyArray<string> = ["Developers", "Desenvolvedor"];
dateClient3[0] = 100;
dateClient2[1] = "Carl";

console.log(dateClient);
console.log(dateClient2);
console.log(dateClient3);
console.log(dateClient4);

//readonly

console.log(array1);
console.log(array2);
