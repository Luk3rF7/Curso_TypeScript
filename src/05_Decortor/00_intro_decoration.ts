export class Animal {
  constructor(public name: string, public cor: string) {}
}

function decorator<T extends new (...args: any) => any>(target: T): T {
  return class extends target {
    cor: string;
    name: string;
    constructor(...args: any[]) {
      super(...args);
      //inverter
      this.cor = this.invertString(args[0]);
      this.name = this.invertString(args[1]);
    }

    invertString(value: string): string {
      return value.split("").reverse().join("");
    }
  };
}

const AnimalDecorated = decorator(Animal);
const animal2 = new AnimalDecorated("blue", "Lucas");
console.log(animal2);
