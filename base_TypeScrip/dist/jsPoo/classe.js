class Person {
  constructor(
    //oque ela via ter de propriedade
    firstName,
    lastName,
    age
  ) {
    //assimilamos classe
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  //metodo
  getFullName() {
    console.log(this.firstName + " " + this.lastName);
  }

  static speak() {
    //pode ser statico por não usar dado da pessoa
    console.log("Hello World");
  }
  //metodo estatico são metodos que nao necessitao
  //serem instanciada assim
}

//instanciado
const person = new Person("lucas", "developer", 29);

console.log(person);
person.getFullName();
//executar metodo static
//metodo estatico nao tem o this
Person.speak();
