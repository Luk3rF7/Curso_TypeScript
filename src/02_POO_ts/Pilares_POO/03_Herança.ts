/*
import { abstract } from './03_Herança';
 *       Herança
 *  visa passar Caracteristica de um obj p/ outro
 */

export abstract class Animal {
  constructor(public name: string) {}
  abstract makeNoise(): void;
}

export class Dog extends Animal {
  makeNoise(): void {
    console.log(`${this.name} Au Au!`);
  }
}

export class Cat extends Animal {
  makeNoise(): void {
    console.log(`${this.name} Miauu!meooow!`);
  }
}
