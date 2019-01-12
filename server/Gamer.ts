import {Field} from './gameServer';

export class Gamer extends Field{

  public points: number;
  public lives: number;
  public kills: number;
  public color: string;
  public name: string;
  public bombs: number;
  public posX: number;
  public posY: number;
  public bombPlanted:number;

  constructor (posX: number, posY: number, name: string) {
    super(posX, posY);
    this.type = "Gamer";
    this.bombPlanted = 0;
    this.lives = 3;
    this.kills = 0;
    this.bombs = 1;
    this.name = name;
    //this.color = this.getRandomColor();
    //this.posX = posX;
    //this.posY = posY;
    this.points = 0;
  }

  private getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



}
