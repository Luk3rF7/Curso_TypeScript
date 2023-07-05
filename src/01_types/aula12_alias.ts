//alias = apelido
type age = number;
type People = {
  name: string;
  age: age;
  salary: number;
  favoriteCors?: string;
};
//type + union
type CorsRGB = "red" | "yellow" | "blue";
type CorsCMYK = "cyan" | "magenta" | "green" | "black";
type favoriteCors = CorsRGB | CorsCMYK;

const people: People = {
  age: 28,
  name: "Lc",
  salary: 2.3,
};

export function setFavoriteCor(people: People, cor: favoriteCors): People {
  return { ...people, favoriteCors: cor };
}
console.log(setFavoriteCor(people, "cyan"));
console.log(people);
