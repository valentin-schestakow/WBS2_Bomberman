export class Player {

  public lives: number;
  public kills: number;
  public color: string;
  public name: string;
  public bombs: number;

  constructor (name: string){
    this.lives=3;
    this.kills=0;
    this.bombs=1;
    this.name=name;
    this.color = this.getRandomColor();
  }

  private getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
