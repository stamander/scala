export default function typeAliasSample(){

  type Country ={
    capital:string,
    language:string,
    name:string
  }

  const japan:Country={
    capital:"Tokyo",
    language:"Japanese",
    name:"Japan"
  }

  console.log(japan);

  const America:Country={
    capital:"washingtonD.C",
    language:"English",
    name : "USA"
  }
  
  console.log(America);


  //合併(union) 交差型（intersection）
  type Knight ={
    hp:number,
    sp:number,
    weapon:string,
    swordSkill:string,
  } 

  type Wizard ={
    hp: number,
    mp: number,
    weapon: string,
    magicSkill: string

  }

  //合併型 または
  type Adventure = Knight | Wizard

  //交差型 かつ
  type Paradin = Knight & Wizard

  //Knigtよりの冒険書
  const adventure1 : Adventure ={
    hp:100,
    sp:30,
    weapon:"木の剣",
    swordSkill:"三連切り",

  }

  const adventure2 :Wizard={
    hp:100,
    mp:30,
    weapon:"木の杖",
    magicSkill:"ファイアーボール"
  }

  console.log(adventure1);
  console.log(adventure2);

  const paladin : Paradin = {
    hp:100,
    sp:100,
    mp:100,
    weapon:"銀の剣",
    swordSkill:"三連切り",
    magicSkill:"ファイアーボール"

  }

  console.log(paladin)
  


}