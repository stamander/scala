export default function genericsBasicSample(){
  //ジェネリックを使わない
  const stringReduce =(array:string[],initialValue:string):string=>{
    let result = initialValue
    for(let i=0; i< array.length;i++){
      result += array[i] 
    }
    return result
  }
  console.log("basic1" , stringReduce(["May","the","force","be","with","you"],""));

  const numberReduce =(array:number[],initialValue:number):number=>{
    let result = initialValue
    for(let i=0; i< array.length;i++){
      result += array[i] 
    }
    return result
  }
  console.log("basic2" , numberReduce([100,200,300],1000));

  type Reduce = {
    (array: string[],initialValue:string):string
    (array:number[],initialValue:number):number

    //型が増えるごとに定義をしないといけないそれを解消するのがジェネリック
  }



  
}