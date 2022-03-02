export default function arraySample(){
  const colors :string[] = ["red","blue"]
  colors.push("yerrow")
  // colors.push(123)
  console.log("array sample1" , colors);


  const even: Array<number> = [2,4,6]
  even.push(8)
  // even.push("10")

  console.log("array sample2" , even);

  const ids:(string|number)[]=["ABC",123]
  ids.push("DEF")
  ids.push(456)
  // ids.push(true)

  console.log("array sample3" , ids);

  //配列の型推論

  const getsomeArray = () =>{
    const _someArray = [] //any[]
    _someArray.push(123)//number[]
    _someArray.push("ABC") //(number | string)[]
    return _someArray

  }

  const someArray = getsomeArray()
  someArray.push(456)
  // someArray.push(true)

  console.log("array sample4" , someArray);


  
}