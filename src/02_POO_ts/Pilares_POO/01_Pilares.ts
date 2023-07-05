/*
 * Abstracao
 * Encapsulamento
 * Herança
 * Polimofismo
 */

// * Abstração: Permite isolar de um obj
// * somente conceito que são necessario p/ funcionamento
export class PersonExemp {
  private name: string;
  private lastName: string;

  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }
}
