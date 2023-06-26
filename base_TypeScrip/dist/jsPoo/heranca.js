class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} made some noise!`);
  }
}

class Dog extends Animal {
  constructor(nome) {
    super(nome); // vai chamar constructor do Animal
  }
  speak() {
    console.log(`Dog ${this.name} barked!`);
  }
}
const animal = new Animal("simba");
const dog = new Dog("bob");

animal.speak();
dog.speak();
