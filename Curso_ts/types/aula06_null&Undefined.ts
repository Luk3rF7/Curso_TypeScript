// linguagem utiliza  undefined

let x;
if (typeof x === "undefined") x = 20;
console.log(x * 2);

export function createPerson(
  firstNames: string,
  LastName?: string
): {
  firstNames: string;
  LastName?: string;
} {
  return {
    firstNames,
    LastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === "number") return x * x;
  return null;
}

const squareOFTwoNumber = squareOf(2);
const squareOFTwoString = squareOf("2");

if (squareOFTwoNumber === null) {
  console.log("conta inválida!");
} else {
  console.log(squareOFTwoNumber * 100);
}
