interface Constructor {
  new (...args: any[]): any;
}
function invertNameCor(param1: string, param2: string) {
  return function <T extends new (...args: any) => any>(target: T): T {
    console.log("I am Decorator ", target);
    return class extends target {
      cor: string;
      name: string;
      constructor(...args: any[]) {
        super(...args);
        this.cor = this.invertString(args[0]);
        this.name = this.invertString(args[1]);
      }
      //inverter
      invertString(value: string): string {
        return value.split("").reverse().join("") + " " + param1 + " " + param2;
      }
    };
  };
}
function(param1:string){
   return function outroDecorador(target: Constructor) {
  console.log("outher Decorator" + param1);
  return target
}
}

@outroDecorador('parametro do outro decorator')
@invertNameCor("blue", "name")
export class Animal {
  constructor(public name: string, public cor: string) {
    console.log("I am class");
  }
}
const animal = new Animal("luiz", "Roxo");
console.log(animal);
