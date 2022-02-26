export default function objectSample(){
  const a: object ={
    name : "stamander",
    age : 25
  }
  // a.name

  //オブジェクト
  let country :{
    language:string,
    name:string
  }={
    language:"Japanege",
    name:"Japan"
  }

  console.log(country)
  
  
  country = {
    language:"English",
    name:"USA"
  }

  console.log(country);
  
  

  //オプショナルとreadonly

  const stamander : {
    age: number,
    lastName : string,
    readonly FirstName: string,
    gender? :string


  }={
    age:25,
    lastName: "Yamada",
    FirstName: "Taro",

  }


  stamander.gender = "male"
  stamander.lastName = "Tanjirou"
  // stamander.FirstName = "Kamado"

  console.log(stamander)


  //インデックスしシグネチャ
  const capitals:{
    [countryName:string]:string
  }={
    Japan:"Tokyo",
    Koria:"Seoul"
  }
  capitals.China = "Beijing"
  capitals.Canada = "Otawa"

  console.log(capitals)


}