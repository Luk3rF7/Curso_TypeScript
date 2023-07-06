export abstract class Avatar {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected atack: number,
    protected life: number
  ) {}

  atacker(person: Avatar): void {
    this.border();
    console.log(`${this.name} is Atacking!`);
    console.log(`"============/${this.emoji} Hit /=========="`);
    person.loserlife(this.atack);
  }
  loserlife(strongAtck: number): void {
    this.life -= strongAtck;
    console.log(`"=============/ blood ${this.emoji} /================="`);
    console.log(`${this.name} now it has ${this.life} living`);
  }
  border(): void {
    console.log(this.emoji, "Bordao");
  }
}
export class Warrior extends Avatar {
  protected emoji = "\u{1F9DD}";
  border(): void {
    console.log("==============================");
    console.log(this.emoji, "Is Warrior: This Attacking!!! ");
    console.log("==============================");
  }
}
export class Monster extends Avatar {
  protected emoji = "\u{1F9DF}";
  border(): void {
    console.log(`========================`);
    console.log(`${this.emoji} this Monster: "ONASAMS"`);
    console.log(`========================`);
  }
}

const warrior = new Warrior("Warrior", 100, 1000);
const monster = new Monster("Monster", 87, 1000);

warrior.atacker(monster);
monster.atacker(warrior);
monster.atacker(warrior);
warrior.atacker(monster);
monster.atacker(warrior);
warrior.atacker(monster);
monster.atacker(warrior);
