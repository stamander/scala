type Suji = 1 | 2| 3| 4| 5| 6| 7| 8| 9
type Dan = "1"| "2" | "3" | "4" | "5" | "6" | '7' | "8" |"9"
type Player = "first" | "second"

//コマの位置を表す
class Position {
  constructor (private suji : Suji , private dan : Dan){}
  distanceFrom(position:Position,player:Player){
    if(player==='first'){
      return {
        suji:Math.abs(position.suji-this.suji),
        dan:Math.abs(Number(position.dan)-Number(this.dan))
      }
    }else{
      return {
        suji:Math.abs(position.suji-this.suji),
        dan:-(Math.abs(Number(position.dan)-Number(this.dan)))
      }

    }
  }
}


new Position(1,"2")

//コマを表す
abstract class Piece {
  protected position : Position
  //Pieceクラスとサブクラスでアクセスできる
  constructor(
    private readonly player: Player,
    suji : Suji,
    dan  : Dan
  ){
    this.position = new Position(suji,dan)

  }
  //メソッド
  //コマの移動メソッド
  moveTo(position : Position){
    this.position = position
  
  }

  //移動できるかどうか
  abstract canMoveTo(position:Position,player:Player):boolean


}

class Osho extends Piece{
  //王将のcanmovetoを実装
  canMoveTo(position: Position, player: Player): boolean {
      const distance = this.position.distanceFrom(position,player)
      return (distance.suji < 2 && distance.dan < 2)
  }
}


class Game{
  private private = Game.makePieces()
  private static makePieces(){
    return[
      new Osho('first',5,'1'),
      new Osho('second',5,'9')
    ]
  }
}