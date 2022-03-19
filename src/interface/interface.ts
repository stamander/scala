interface Bread{
  calories:number
}

interface Bread{
  type:string
}


const francePan :Bread = {
  calories:300,
  type: 'hard'
}

//型エイリアス

type MaboDofu =  {
  calories : number
  spiceyLevel : number
}

type Rice = {
  calories:number
  gram:number
}

type MaboDon = MaboDofu & Rice //ユニオン

const maboDon : MaboDon = {
  calories: 500,
  spiceyLevel :10,
  gram:350
}

//インターフェースの継承
interface Book {
  page:number
  title :string
}

interface Magajine extends Book{
  cycle : 'daily' | 'weekly' | 'Monthly' | 'yearly'

}

const jamp : Magajine ={
  page:300,
  title:'週刊少年ジャンプ',
  cycle : 'weekly'
}

type BookType = {
  page: Number
  title: string
  
}

interface HandBook extends BookType{
  theme:string,

}

const cotrip: HandBook ={
  page:120,
  title:"ことりっぷ",
  theme:"旅行"
}

//implementsを使ってクラスを定義

class Comic implements Book{
  page:number
  title: string

  constructor(page: number , title: string , private publishYear : string){
    this.page = page
    this.title = title

  }

  getPublishYear(){
    return this.title + "が発売されたのは" + this.publishYear + "年です。"

  }

}

const popularComic = new Comic(200,"鬼滅の刃", "2016")
console.log(popularComic.getPublishYear())