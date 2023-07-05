// * Recomendado
//condicional
const body = document.querySelector("body");
if (body) body.style.background = "red";
//type assertion
const body3 = document.querySelector("body") as HTMLBodyElement;
body3.style.background = "red";

//htmlEleme
const input = document.querySelector(".input") as HTMLInputElement;
input.value = " qualquer coisa";
input.focus();

//* não recomendado
//typeassertion 2
const body4 = document.querySelector("body") as unknown as number;

//non-null assertion (!)
const body2 = document.querySelector("body")!;
body2.style.background = "red";
