//criando class:
export class Emprise {
  //metodo longo
  public readonly name: string;
  //private so dentro da classe pode ser mudado
  private readonly cooperators: Cooperador[] = [];
  protected readonly cnpj: string;
  constructor(name: string, cnpj: string) {
    //passo o valor
    this.name = name;
    this.cnpj = cnpj;
  }
  public addCooperador(cooperador: Cooperador): void {
    this.cooperators.push(cooperador);
  }

  public showCooperador(): void {
    for (const cooperator of this.cooperators) {
      console.log(cooperator);
    }
  }

  public getNome(): string {
    return this.name;
  }
}
//moldando private:
export class Cooperador {
  constructor(
    //utilizando atalho
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

//instancia e saida
const emprise1 = new Emprise("Developer", "11.111.111/0001-11");
const cooperador1 = new Cooperador("LC", "dev");
const cooperador2 = new Cooperador("User", "Dev");
const cooperador3 = new Cooperador("Dev", "_user");
emprise1.addCooperador(cooperador1);
emprise1.addCooperador(cooperador2);
emprise1.addCooperador(cooperador3);
emprise1.showCooperador();
