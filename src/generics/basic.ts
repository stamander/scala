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


  type GenericReduce<T> ={
    (array:T[],initialValue:T):T
  }


  const genericStringReduce: GenericReduce<string> = (array,initialValue) =>{
    let result = initialValue
    for(let  i= 0; i<array.length; i++){
      result+=array[i]

    }
    return result
  }

  console.log("generic sample3",genericStringReduce(["Make","Typescript","TRY","Again"],""))

  const genericNumberReduce: GenericReduce<number> = (array,initialValue) =>{
    let result = initialValue
    for(let  i= 0; i<array.length; i++){
      result+=array[i]

    }
    return result
  }

  console.log(genericNumberReduce([-100,-200,-300,],1000))


  //色々なジェネリック型の呼び出し方法
  //完全な呼び出し
  type genericReduce2 ={
    <T>(array:T[],initialValue:T):T
    <U>(array:U[],initialValue:U):U


  }

  //呼び出しシグネチャ省略法
  type genericReduce3<T> = (array: T[],initialValue: T)=>T
  type genericReduce4 = <T>(array: T[],initialValue: T)=>T




  
}