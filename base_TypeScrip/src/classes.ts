//gente pode decidir oque receber

interface IPerson {
   id:number;
    name:string;
   age:number;
   sayMyName():string;
}
class Person implements IPerson {
   readonly id:number;
   name:string;
   age:number;
   //readonly somente leitura
   //protected somento na sua class se tem acesso
   //private so dentro da classe
   constructor(
      id: number,
      name:string,
      age:number ){
         this.id =id;
         this.name =name;
         this.age =age;
   }

   sayMyName(): string {
      return this.name
   }
}


class Employee extends Person {
   constructor(
      id:number,
      name:string,
     age:number,
   ){
      super(id,name,age)
   }
   whoAmI(){
      // protect acesssa
      // private não tem acesso
      return this.age
   }
}
const person = new Person(1,"LcDev",28)

//msm que acima
class PersonRefact{
   constructor(
       readonly ids:number,
       protected names:string,
       private ages:number){

   }
}