//type e um objeto e define quais propriedade

type Order = {
   productId:string;
   price:number;
}

type User = {
   //pode usar tudo menos void
   firstName: string
   age:number
   email:string
   //utilizando ?: ele faz com que seja opcional
   password?:string;
   //definir string
   orders:Order[];
   register():string;
}

//criar objeto 

const user: User = {
   firstName: 'Lucas',
   age: 20,
   email:"user@mail.com",
   orders: [{
      productId:"mesa",
      price:50.60
   }],
   register(){
      return 'A'
   },
   
}//utilizando propriedade opcionais
const printLog =(msg?:string) =>{}
//adicionando password! ,agente tira undefined
printLog(user.password!)

//union
//consegui unir 
type Author = {
      books: string[]
}

const author:Author & User = {
   age:2,
   books:['1'],
   email: 'author@gmail.com',
   firstName:'FelipeDevs',
   orders: [{
      productId:'DevBook',price:19.90
   }],
   register(){
      return 'a'
   }

}

//
type Grade = number | string;
const grade : Grade = 1


//interfaces

interface UserInterface {
   //readonly = deixa somente leitura
   readonly firstNames:string,
   email:string;
   login():string
}

const emailUser: UserInterface = {
   email:'LcDev@gmail.com',
   firstNames:'LcDev',
   login(){
      return "Login"
   }
}
interface AuthorInterface {
   books:string[]
}

const newAuthor : UserInterface & AuthorInterface = {
   email:'Author@gmail.com',
   firstNames:"Dev_Author",
   books:[],
   login(){
      return "Login"
   }
}