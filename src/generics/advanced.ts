export default function genericAdvancedSample(){
  //map関数
  type Map<T,U> = (array:T[],fn:(item: T)=>U) => U[]
  const mapStringtoNumbers :Map<string,number> = (array,fn) =>{
    let result = []
    for(let i = 0; i< array.length;i++){
      const item = array[i]
      result[i] = fn(item)
    }

    return result

  }

  const numbers = mapStringtoNumbers(["123","456","789"],(item:string) =>Number(item))
  console.log("Genericadvanced Numbers",numbers)

  const mapNumberstoStrings :Map<number,string> = (array,fn) =>{
    let result = []
    for(let i = 0; i< array.length;i++){
      const item = array[i]
      result[i] = fn(item)
    }

    return result

  }

  const strings = mapNumberstoStrings([123,456,789],(item:number) =>String(item))
  console.log("Genericadvanced Strings",strings)

}