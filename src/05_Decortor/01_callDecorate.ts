function invertNameCor<T extends new (...args: any[]) => any>(target: T): T {
  console.log("Sou o decorador e recebi", target);
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
@invertNameCor
export class Animal {
  constructor(public name: string, public cor: string) {
    console.log("sou a class");
  }
}

const animal2 = new Animal("blue", "Lucas");
console.log(animal2);
