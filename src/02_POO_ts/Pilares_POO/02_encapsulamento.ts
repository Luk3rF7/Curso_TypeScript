/*
 * Encapsulamento:
 * Visa ocultar parte interna de um obj
 * e exibir apena o necessario para uso de externo.
 */

export class RemoteControll {
  constructor(private powerStatus = false) {}

  public turnOns(): void {
    this.powerStatus = true;
  }

  public turnOffs(): void {
    this.powerStatus = false;
  }

  public getStatus(): boolean {
    return this.powerStatus;
  }
}
