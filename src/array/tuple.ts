export default function tupleSumple (){
  //一般的なタプル
  let response:[number,string] = [200,"OK"]
  // response = [400,"Bad request","Email palameter is missing"]
  // response = ["400","Bad request","Email palameter is missing"]

  console.log(response);

  const girlfriend: [string, ...string[]]  = ["Kana","Miku","Keiko"]
  girlfriend.push("Misa")
  console.log(girlfriend)

  //イミュータブルな配列
  const commands :  readonly string[] = ["gitadd","git commit","git push"]
  // commands.push("git fetch")
  // commands[2]="git fetch"

  console.log(commands)
  


}