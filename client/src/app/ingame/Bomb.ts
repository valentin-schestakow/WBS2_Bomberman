import {Field} from './Field';

export class Bomb extends Field {

  public timeLeft: number;
  public range:number = 1;

  constructor(posX:number, posY: number, timeLeft: number ){
    super(posX, posY);

    this.timeLeft = timeLeft;
    this.type = "Bomb";
    this.posX = posX;
    this.posY = posY;

  }


}
