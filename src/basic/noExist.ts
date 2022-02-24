export default function noExistSample(){
  let name = null
  console.log("noExist sample 1:", typeof name, name)
  
  name = "stamander"
  if(!name){
    console.log("吾輩は猫である。名前はまだ"+name)
    
  }else{
    
    console.log("吾輩は猫である。名前は"+name)
  }

  let age = undefined
  console.log( typeof age,age)

}