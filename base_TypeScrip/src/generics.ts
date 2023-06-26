//generics passa types 

const returnValue = <T>(value:T) => value
const message = returnValue<string>("Hello world")
const count = returnValue(5)

function getFirstValueFromArray<Type>(array:Type[]) {
   return array[0]
}

const firstValueFromStringArray = getFirstValueFromArray<string>(['1','2', '3'])
const firstValueFromNumberArray = getFirstValueFromArray<number>([1,2, 3])

//Promisse

const  returnPromisse = async ():Promise<number> => {
   return 5
}
//classe

class GenericNumber<T>{
   zeroValue:T;
   sum: (x: T,y: T) => T;

   constructor(zeroValue: T, sum:(x:T, y:T) => T){
      this.zeroValue = zeroValue;
      this.sum = sum;
   }
}

const myGenericNumber = new GenericNumber<number>(0,(x:number,y:number) =>{
   return x + y;
})