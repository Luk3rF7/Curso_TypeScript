//interface com funçoes
interface MathFunc{
   (x:number,y:number) : number;
}
const sum: MathFunc = (x:number,y:number): number =>{
   return x + y;
}

const value = sum(2,3)

const sub:MathFunc = (x:number,y:number) => {
   return x - y;
}
/* //void e um função que retorna nada
const log = (message:string): void => {
   console.log(message)
}
 */
