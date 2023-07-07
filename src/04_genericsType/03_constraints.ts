type ObterKeyFn = <O, K extends keyof O>(Object: O, key: K) => O[K];

const obterKey: ObterKeyFn = (Object, Key) => Object[Key];

const animal = {
  cor: "pink",
  vaccine: ["vaccine 1", "vaccine 2"],
  age: 10,
};

const vaccine = obterKey(animal, "vaccine");
const cor = obterKey(animal, "cor");
console.log(vaccine, cor, obterKey(animal, "age"));
