import {Player} from './Player';
import {Bomb} from './Bomb';

export class Field {




  public posX: number;
  public posY: number;
  public type: String;


  constructor(posX:number, posY: number){
    //this.type = type;
    this.type = "Field";
    this.posX = posX;
    this.posY = posY;

  }

  getType(){
    return this.type;
  }

  spawnPlayer(player: Player){

  }

  plantBomb() {

  }

  movePlayer(){

  }

}
