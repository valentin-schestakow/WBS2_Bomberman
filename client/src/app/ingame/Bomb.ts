import {Field} from './Field';

export class Bomb extends Field {

  public timestamp: number;
  public range:number = 1;


  constructor(posX:number, posY: number, timestamp: number ){
    super(posX, posY);

    this.timestamp = timestamp;
    this.type = "Bomb";
    this.posX = posX;
    this.posY = posY;
  }


}
