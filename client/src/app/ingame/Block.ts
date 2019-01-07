import {Field} from './Field';

export class Block extends Field {

  constructor(posX:number, posY: number ){
    super(posX, posY);

    this.type = "Block";
    this.posX = posX;
    this.posY = posY;
  }
}
