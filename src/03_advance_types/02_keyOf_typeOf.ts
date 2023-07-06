type CorsObj = typeof corsObj;
type CorsKeys = keyof CorsObj;

const corsObj = {
  red: "red",
  green: "green",
  blue: "blue",
};

function translateCor(cor: "red" | "green" | "blue", cors: CorsObj) {
  return cors[cor];
}

console.log(translateCor("red", corsObj));
console.log(translateCor("blue", corsObj));
