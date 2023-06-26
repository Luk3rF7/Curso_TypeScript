//Tipos Básicos
let age:number =5;
const nome:string = 'Lucas'
const isValid:boolean = true;
let idk:any = 5

//lista
 //caso queira ter array de numeros
const ids:number[] = [1,2,3,4,5]
const booleans:boolean[]
 = [true,false,true,false]
const names:string[] = ['Lucas', 'victoria','marcelo']

//tupla
// e tipo de variavel que tenha determinado valor e ordem

const personagem:[number,string] = [1,"first"]

//lista de tuplas

const people:[number,string][] = [
   [1,"firstName"],
   [2,"firstName2"],
   [3,"lastName"],
]

//intersections 
// noome const : string | number 
// | vai dar permisão para ser string ou number

const productId: string | number = 2

//Enum

// ele e bom um valor que atribui outro valor


enum Direction{
   up = 1,
   down = 2
}

const direction = Direction.up

//type Assertion
//quando agente quer mudar tipo diferente
//define como any
const productName:any = 'Boné'

//sem definição let productIds
//muda para string 
// productIds = productName as string ou
let productIds = <string>productName



console.log(direction)
