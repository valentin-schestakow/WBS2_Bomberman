import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import {Player} from './Player';
import {Bomb} from './Bomb';
import {Field} from './Field';
import {Block} from './Block';
import {delay} from 'rxjs/operators';
import {interval, timer} from 'rxjs';




@Component({
  selector: 'app-ingame',
  templateUrl: './ingame.component.html',
  styleUrls: ['./ingame.component.scss']
})

//liste von fiels field kann player oder leer oder
//field of 20x15 objects -> max300 objects
export class IngameComponent implements OnInit, AfterViewInit {


  playField: Field[][];//new Field[19][14];// Größe des Feldes

  /** Template reference to the canvas element */
  @ViewChild('playground') playground: ElementRef;
  myPlayer: Player;
  size: number;
  myBomb: Bomb;
  /** Canvas 2d context */
  context: CanvasRenderingContext2D;
  @ViewChild('spaceshipimg') spaceshipAlly: ElementRef;
  //ctx: CanvasRenderingContext2D;

  constructor() {}

  ngOnInit() {
    this.size = 25;
    this.myPlayer =  new Player(0, 0, 'xXSlyerXx');
    this.context = (this.playground.nativeElement as HTMLCanvasElement).getContext('2d');
    let width = 800;

    //(this.playground.nativeElement as HTMLCanvasElement).setAttribute('width', '800');
    //(this.playground.nativeElement as HTMLCanvasElement).setAttribute('height', '600');

    (this.playground.nativeElement as HTMLCanvasElement).setAttribute('width', '3200');
    (this.playground.nativeElement as HTMLCanvasElement).setAttribute('height', '2400');
    this.context.scale(4,4);

    this.draw();
  }

  ngAfterViewInit() {
    this.spawnPlayer(this.myPlayer);

  }




  private draw() {


    const size = 25;
    const box = new Image();
    box.src = '../../assets/images/box.JPG';
    console.log(box.height);
    this.playField = [];
    for (let i = 0; i < 14; i++) {
      this.playField[i] = [];
      for (let j = 0; j < 20; j++) {
        this.context.beginPath();

        this.context.fillStyle = ['#eee', '#eee'][(i + j) % 2];
        this.context.fillRect(j * size, i * size, size, size);
        this.playField[i][j] = new Field(j * size, i * size);
        if (i > 0  && Math.random() * 100 > 40 && i < 14 ) {
          this.context.fillStyle = ['green', 'green'][(i + j) % 2];
          this.context.fillRect(j * size, i * size, size, size);
          this.playField[i][j] = new Block(j * size, i * size);
        }

        this.context.closePath();
      }
    }
    // SET PLAYER ON MAP


  }

  spawnPlayer(player: Player) {
    this.context.drawImage(this.spaceshipAlly.nativeElement, player.posX * this.size, player.posY * this.size, this.size, this.size);
  }

  movePlayer(oldX: number, oldY: number, newX:number, newY:number){
    //array
   // this.playField[this.convertAbsolutePosToRelativePos(oldX)][this.convertAbsolutePosToRelativePos(oldY)] = new Field(oldX,oldY);
    //this.playField[this.convertAbsolutePosToRelativePos(newX)][this.convertAbsolutePosToRelativePos(newY)] = new Player(newX,newY, "Slyaer");

    //drawing
    //console.log("Old Pos: "+this.convertAbsolutePosToRelativePos(oldX)+" "+this.convertAbsolutePosToRelativePos(oldY)+" "+this.playField[this.convertAbsolutePosToRelativePos(oldX)][this.convertAbsolutePosToRelativePos(oldY)].getType());
    /*if(this.playField[this.convertAbsolutePosToRelativePos(oldX)][this.convertAbsolutePosToRelativePos(oldY)].getType() == "Field"){
      this.context.fillStyle = '#eee';
    } else if (this.playField[this.convertAbsolutePosToRelativePos(oldX)][this.convertAbsolutePosToRelativePos(oldY)].getType() == "Block") {
      this.context.fillStyle = 'green';
    } else if (this.playField[this.convertAbsolutePosToRelativePos(oldX)][this.convertAbsolutePosToRelativePos(oldY)].getType() == "Bomb") {
      this.context.fillStyle = 'orange';
    }*/
    //this.context.fillRect(oldX, oldY, 25, 25);


    this.myPlayer.posX = newX;
    this.myPlayer.posY = newY;
    this.reprintCanvas();
    //this.context.drawImage(this.spaceshipAlly.nativeElement, newX, newY , 25, 25);

  }

  reprintCanvas(){
    for (let i = 0; i < this.playField.length; i++ ){
      for (let j = 0; j < 20; j++ ){
        if(this.playField[i][j].getType() == 'Field'){
          this.context.fillStyle = '#eee';
        } else if (this.playField[i][j].getType() == 'Block') {
          this.context.fillStyle = 'green';
        }else if (this.playField[i][j].getType() == 'Bomb') {
          this.context.fillStyle = 'orange';
        } else if (this.playField[i][j].getType() == 'Fire') {
          this.context.fillStyle = 'red';
        }
        this.context.fillRect(this.playField[i][j].posX,this.playField[i][j].posY, 25, 25);
      }
    }
    this.context.drawImage(this.spaceshipAlly.nativeElement, this.myPlayer.posX,  this.myPlayer.posY , 25, 25);
    this.printPlayer();
  }

  printPlayer(){
    this.context.font = "5px";
    this.context.fillStyle = "black";
    this.context.fillText(this.myPlayer.name, this.myPlayer.posX+25,  this.myPlayer.posY+25);
  }

  playerAction(action: string) {


    if (action === 'moveUp') {
      if(this.myPlayer.posY > 0) {
        if(this.playField[this.myPlayer.posY/25 - 1][this.myPlayer.posX/25].getType() !== 'Block') {
          this.movePlayer(this.myPlayer.posX, this.myPlayer.posY, this.myPlayer.posX, this.myPlayer.posY - 25);
          //this.myPlayer.posY -= this.size;
        }
      }

    } else if (action === 'moveDown') {
      if(this.myPlayer.posY/25 < 13) {
        if(this.playField[this.myPlayer.posY/25 + 1][this.myPlayer.posX/25].getType() !== 'Block') {
          this.movePlayer(this.myPlayer.posX, this.myPlayer.posY, this.myPlayer.posX, this.myPlayer.posY + 25);
          //this.myPlayer.posY += this.size;
        }
      }
    } else if (action === 'moveLeft') {
      if(this.myPlayer.posX > 0) {
        if(this.playField[this.myPlayer.posY/25][this.myPlayer.posX/25 - 1 ].getType() !== 'Block') {
          this.movePlayer(this.myPlayer.posX, this.myPlayer.posY, this.myPlayer.posX - 25, this.myPlayer.posY);
          //this.myPlayer.posX -= this.size;
        }
      }

    } else if (action === 'moveRight') {
      if(this.myPlayer.posX/25 < 19) {
        if(this.playField[this.myPlayer.posY/25][this.myPlayer.posX/25 + 1 ].getType() !== 'Block') {
          this.movePlayer(this.myPlayer.posX, this.myPlayer.posY, this.myPlayer.posX + 25, this.myPlayer.posY);
          //this.myPlayer.posX += this.size;
        }
      }
    }

    if (action === 'plantBomb') {
      console.log("Plant Bomb at x:"+this.convertAbsolutePosToRelativePos(this.myPlayer.posX)+ " y: "+this.convertAbsolutePosToRelativePos(this.myPlayer.posY));
      this.playField[this.convertAbsolutePosToRelativePos(this.myPlayer.posY)][this.convertAbsolutePosToRelativePos(this.myPlayer.posX)] =
        new Bomb(this.myPlayer.posX,this.myPlayer.posY,2);
      this.myBomb =  new Bomb(this.myPlayer.posX,this.myPlayer.posY,2);
      this.reprintCanvas();
      //timer(500);


      /*Tiemr*/
      //let timeLeft =3;

      let interval = setInterval(() => {
        if(this.myBomb.timeLeft > 0) {
          this.myBomb.timeLeft--;
        } else {
          this.bombExplode(this.convertAbsolutePosToRelativePos(this.myBomb.posY),this.convertAbsolutePosToRelativePos(this.myBomb.posX));
          clearInterval(interval);
        }
      },1000);
    } else if (action === 'printDebug'){
      let row = "\t0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|\n";
      for (let i = 0; i < this.playField.length; i++ ){
        row = row.concat(i+":\t");
        for (let j = 0; j < 20; j++ ){
            row = row.concat(this.playField[i][j].getType().charAt(0)+"|");
        }
        row = row.concat("\n");
      }
      console.log("%c"+row,"color:orange");

    } else if (action === 'reprintField'){
      this.reprintCanvas();
    }
    //console.log("CurrentPos x:"+this.myPlayer.posX+ " y: "+this.myPlayer.posY);
    //console.log("CurrentPos x:"+this.convertAbsolutePosToRelativePos(this.myPlayer.posX)+ " y: "+this.convertAbsolutePosToRelativePos(this.myPlayer.posY));
  }

  convertAbsolutePosToRelativePos(absolutePos: number){
    return absolutePos/25;
  }
  convertRposToAPos(relativePos: number){
    return relativePos*25;
  }



  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    //console.log(event.code);
    //console.log("LastPos x:"+this.myPlayer.posX+ " y: "+this.myPlayer.posY);
    if (event.code === 'KeyW') {
      this.playerAction('moveUp');
    }
    if (event.code === 'KeyS') {
      this.playerAction('moveDown');
    }
    if (event.code === 'KeyA') {
      this.playerAction('moveLeft');
    }
    if (event.code === 'KeyD') {
      this.playerAction('moveRight');
    }
    if (event.code === 'KeyB') {
      this.playerAction('plantBomb');
    }
    if (event.code === 'KeyP') {
      this.playerAction('printDebug');
    }
    if (event.code === 'KeyR') {
      this.playerAction('reprintField');
    }
    }

  /*private delay(ms: number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }*/

  bombExplode(posY:number,posX:number){
    /*
        if(posY > 0){
          this.context.fillStyle = 'red';
          this.context.fillRect(this.playField[posY-1][posX].posX,this.playField[posY-1][posX].posY, 25, 25);

          this.playField[posY-1][posX] = new Field(this.playField[posY-1][posX].posX,this.playField[posY-1][posX].posY);
        }
        if(posY < 13){
          this.context.fillStyle = 'red';
          this.context.fillRect(this.playField[posY+1][posX].posX,this.playField[posY+1][posX].posY, 25, 25);

          this.playField[posY+1][posX] = new Field(this.playField[posY+1][posX].posX,this.playField[posY+1][posX].posY);
        }
        if(posX > 0){
          this.context.fillStyle = 'red';
          this.context.fillRect(this.playField[posY][posX-1].posX,this.playField[posY][posX-1].posY, 25, 25);

          this.playField[posY][posX-1] = new Field(this.playField[posY][posX-1].posX,this.playField[posY][posX-1].posY);
        }
        if(posX < 19){
          this.context.fillStyle = 'red';
          this.context.fillRect(this.playField[posY][posX+1].posX,this.playField[posY][posX+1].posY, 25, 25);

          this.playField[posY][posX+1] = new Field(this.playField[posY][posX+1].posX,this.playField[posY][posX+1].posY);
        }
        this.playField[posY][posX] = new Field(this.playField[posY][posX].posX,this.playField[posY][posX].posY);
        */
    this.explosionHelper(posY,posX,"Fire");
    this.reprintCanvas();
    var timeleft = 1;
    let interval = setInterval(() => {
      if(timeleft > 0) {
        timeleft--;
      } else {
        this.explosionHelper(posY,posX,"Field");
        this.reprintCanvas();
        clearInterval(interval);
      }
    },1000);
  }

  explosionHelper(posY:number,posX:number, type:String){
    if(posY > 0){
      this.playField[posY-1][posX].type = type;
    }
    if(posY < 13){
      this.playField[posY+1][posX].type = type;
    }
    if(posX > 0){
      this.playField[posY][posX-1].type = type;
    }
    if(posX < 19){
      this.playField[posY][posX+1].type = type;
    }
    this.playField[posY][posX].type = type;
  }


  }
