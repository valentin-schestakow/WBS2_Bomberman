import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import {Gamer} from './Gamer';
import {Bomb} from './Bomb';
import {Field} from './Field';
import {Block} from './Block';
import {Player} from '../player/Player';
import {delay} from 'rxjs/operators';
import {interval, timer} from 'rxjs';
import {PlayerService} from '../services/player.service';


@Component({
  selector: 'app-ingame',
  templateUrl: './ingame.component.html',
  styleUrls: ['./ingame.component.scss'],
  providers:[PlayerService]
})

//liste von fiels field kann player oder leer oder
//field of 20x15 objects -> max300 objects
export class IngameComponent implements OnInit, AfterViewInit {


  playField: Field[][];//new Field[19][14];// Größe des Feldes

  /** Template reference to the canvas element */
  @ViewChild('playground') playground: ElementRef;
  myPlayer: Gamer;
  gamers: Gamer[];
  size: number;
  myBomb: Bomb;
  /** Canvas 2d context */
  context: CanvasRenderingContext2D;
  @ViewChild('spaceshipimg') spaceshipAlly: ElementRef;
  //ctx: CanvasRenderingContext2D;
  currentPlayer: Player = this.playerService.currentPlayer;


  constructor(private playerService: PlayerService) {
    this.playerService.receiveMove().subscribe(data => {
      //console.log(data)
    });
    this.playerService.receiveField().subscribe( data => {
      //console.log(data);
      this.playField = data;
      this.reprintCanvas();
    });
    this.playerService.receiveGamer().subscribe( data => {
      //console.log(data);
      this.gamers = data;
      //console.log("CurrentPos x:"+this.convertAbsolutePosToRelativePos(this.myPlayer.posX)+ " y: "+this.convertAbsolutePosToRelativePos(this.myPlayer.posY));
      //console.log("CurrentPos x:"+this.myPlayer.posX+ " y: "+this.myPlayer.posY);
      this.reprintCanvas();
    });
  }

  broadcastMove(move: string, gamer: Gamer){
    this.playerService.emitMove({move,gamer});
  }
  broadcastField(){
    this.playerService.emitField(this.playField);
  }
  broadcastPlayer(){
    this.playerService.emitGamer(this.currentPlayer);
  }

  ngOnInit() {
    this.playerService.checkLogin().then(() => {
      console.log("Username:"+this.playerService.currentPlayer.username);
      this.currentPlayer = this.playerService.currentPlayer;
      this.broadcastPlayer();
      this.broadcastField();
      this.size = 25;
      this.myPlayer =  new Gamer(0, 0, this.currentPlayer.username);
      this.context = (this.playground.nativeElement as HTMLCanvasElement).getContext('2d');
      (this.playground.nativeElement as HTMLCanvasElement).setAttribute('width', '2000');//3200
      (this.playground.nativeElement as HTMLCanvasElement).setAttribute('height', '1500');//2400
      this.context.scale(4,4);
      this.generatePlayField();
    });

  }

  ngAfterViewInit() {
    //this.reprintCanvas();

  }


  private generatePlayField() {
    const size = 25;
    this.playField = [];
    for (let i = 0; i < 14; i++) {
      this.playField[i] = [];
      for (let j = 0; j < 20; j++) {
        this.playField[i][j] = new Field(j * size, i * size);
        if (i > 0  && Math.random() * 100 > 40 && i < 14 ) {
          this.playField[i][j] = new Block(j * size, i * size);
        }
      }
    }
  }

  spawnPlayer(player: Gamer) {
    this.context.drawImage(this.spaceshipAlly.nativeElement, player.posX * this.size, player.posY * this.size, this.size, this.size);
  }

  movePlayer(oldX: number, oldY: number, newX:number, newY:number){

    this.myPlayer.posX = newX;
    this.myPlayer.posY = newY;
    this.reprintCanvas();
  }

  reprintCanvas(){
    for (let i = 0; i < this.playField.length; i++ ){
      for (let j = 0; j < 20; j++ ){
        if(this.playField[i][j].type == 'Field'){
          this.context.fillStyle = '#eee';
        } else if (this.playField[i][j].type == 'Block') {
          this.context.fillStyle = 'green';
        } else if (this.playField[i][j].type == 'Bomb') {
          this.context.fillStyle = 'orange';
        } else if (this.playField[i][j].type == 'Fire') {
          this.context.fillStyle = 'red';
        }
        this.context.fillRect(this.playField[i][j].posX,this.playField[i][j].posY, 25, 25);
      }
    }
    //this.printPlayer(this.myPlayer);
    for (let gamer of this.gamers){
      this.printPlayer(gamer);
    }
    //this.context.drawImage(this.spaceshipAlly.nativeElement, this.myPlayer.posX * this.size, this.myPlayer.posY * this.size, this.size, this.size);
  }

  printPlayer(gamer: Gamer){
    this.context.fillStyle = gamer.color;
    this.context.fillRect(gamer.posX,gamer.posY, 25, 25);
    //this.context.drawImage(this.spaceshipAlly.nativeElement, gamer.posX * this.size, gamer.posY * this.size, this.size, this.size);
    this.context.font = "5px";
    this.context.fillStyle = "black";
    this.context.fillText(gamer.name, gamer.posX+25,  gamer.posY+25);
  }

  playerAction(action: string) {

    this.broadcastMove(action, this.myPlayer);
    /*
    if (action === 'moveUp') {
      if (this.myPlayer.posY > 0 && this.playField[this.myPlayer.posY / 25 - 1][this.myPlayer.posX / 25].type !== 'Block') {
        this.movePlayer(this.myPlayer.posX, this.myPlayer.posY, this.myPlayer.posX, this.myPlayer.posY - 25);
        //this.myPlayer.posY -= this.size;
      }
    } else if (action === 'moveDown') {
      if (this.myPlayer.posY / 25 < 13 && this.playField[this.myPlayer.posY / 25 + 1][this.myPlayer.posX / 25].type !== 'Block') {
        this.movePlayer(this.myPlayer.posX, this.myPlayer.posY, this.myPlayer.posX, this.myPlayer.posY + 25);
        //this.myPlayer.posY += this.size;
      }
    } else if (action === 'moveLeft') {
      if (this.myPlayer.posX > 0 && this.playField[this.myPlayer.posY / 25][this.myPlayer.posX / 25 - 1].type !== 'Block') {
        this.movePlayer(this.myPlayer.posX, this.myPlayer.posY, this.myPlayer.posX - 25, this.myPlayer.posY);
        //this.myPlayer.posX -= this.size;
      }
    } else if (action === 'moveRight') {
      if (this.myPlayer.posX / 25 < 19 && this.playField[this.myPlayer.posY / 25][this.myPlayer.posX / 25 + 1].type !== 'Block') {
        this.movePlayer(this.myPlayer.posX, this.myPlayer.posY, this.myPlayer.posX + 25, this.myPlayer.posY);
        //this.myPlayer.posX += this.size;
      }
    }
*/


    if (action === 'plantBomb') {
      if (this.myPlayer.bombPlanted < 1) {

        this.myPlayer.bombPlanted++;
        console.log("Plant Bomb at x:" + this.convertAbsolutePosToRelativePos(this.myPlayer.posX) + " y: " + this.convertAbsolutePosToRelativePos(this.myPlayer.posY));
        this.playField[this.convertAbsolutePosToRelativePos(this.myPlayer.posY)][this.convertAbsolutePosToRelativePos(this.myPlayer.posX)] =
          new Bomb(this.myPlayer.posX, this.myPlayer.posY, 2);
        this.myBomb = new Bomb(this.myPlayer.posX, this.myPlayer.posY, 2);
        this.reprintCanvas();
        //timer(500);


        //let timeLeft =3;
        let interval = setInterval(() => {
          if (this.myBomb.timeLeft > 0) {
            this.myBomb.timeLeft--;
          } else {
            this.broadcastField();
            this.bombExplode(this.convertAbsolutePosToRelativePos(this.myBomb.posY), this.convertAbsolutePosToRelativePos(this.myBomb.posX));
            clearInterval(interval);
          }
        }, 1000);
      }
    }



    else if (action === 'printDebug'){
      let row = "\t0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|\n";
      for (let i = 0; i < this.playField.length; i++ ){
        row = row.concat(i+":\t");
        for (let j = 0; j < 20; j++ ){
            row = row.concat(this.playField[i][j].type.charAt(0)+"|");
        }
        row = row.concat("\n");
      }
      console.log("%c"+row,"color:orange");

    } else if (action === 'reprintField'){
      this.reprintCanvas();
    }
    //this.broadcastPlayer();


  }

  convertAbsolutePosToRelativePos(absolutePos: number){
    return absolutePos/25;
  }
  convertRposToAPos(relativePos: number){
    return relativePos*25;
  }



  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    //console.log(event.code);
    //console.log("LastPos x:"+this.myPlayer.posX+ " y: "+this.myPlayer.posY);
    //this.playerService.checkLogin();
    //console.log("Username:"+this.playerService.currentPlayer.username);

    if (event.code === 'KeyW' || event.code === 'ArrowUp') {
      this.playerAction('moveUp' );
    }
    if (event.code === 'KeyS' || event.code === 'ArrowDown') {
      this.playerAction('moveDown');
    }
    if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
      this.playerAction('moveLeft');
    }
    if (event.code === 'KeyD' || event.code === 'ArrowRight') {
      this.playerAction('moveRight');
    }
    if (event.code === 'KeyB' || event.code === 'Space') {
      this.playerAction('plantBomb');
    }
    if (event.code === 'KeyP') {
      this.playerAction('printDebug');
    }
    if (event.code === 'KeyR') {
      this.broadcastField();
      this.playerAction('reprintField');
    }
    }



  bombExplode(posY:number,posX:number){

    this.explosionHelper(posY,posX,"Fire");
    this.reprintCanvas();
    var timeleft = 1;
    let interval = setInterval(() => {
      if(timeleft > 0) {
        timeleft--;
      } else {
        this.explosionHelper(posY,posX,"Field");
        this.myPlayer.bombPlanted--;
        this.reprintCanvas();
        this.broadcastField();
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
