/*
 * Polimorfismo
 * algo que e polimorfo tem a habilidade de assumir diff forma
 */

import { Animal, Dog, Cat } from "./03_Herança";
class AnimalSounds {
  public playSound(animal: Animal): void {
    animal.makeNoise();
  }
}

const dog = new Dog("Tina :");
const cat = new Cat("Suzy :");
const animalSounds = new AnimalSounds();
animalSounds.playSound(dog);
animalSounds.playSound(cat);
console.log(dog);
console.log(cat);
