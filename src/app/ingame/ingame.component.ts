import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import {Player} from './Player';

@Component({
  selector: 'app-ingame',
  templateUrl: './ingame.component.html',
  styleUrls: ['./ingame.component.scss']
})
export class IngameComponent implements OnInit, AfterViewInit {

  /** Template reference to the canvas element */
  @ViewChild('playground') playground: ElementRef;

  myPlayer: Player;
  size: number;
  /** Canvas 2d context */
  context: CanvasRenderingContext2D;
  @ViewChild('spaceshipimg') spaceshipAlly: ElementRef;

  constructor() {}

  ngOnInit() {
    this.size = 25;
    this.myPlayer =  new Player(0,0,"xXSlyerXx");
    this.context = (this.playground.nativeElement as HTMLCanvasElement).getContext('2d');
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
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 20; j++) {
        this.context.beginPath();

        this.context.fillStyle = ['#eee', '#eee'][(i + j) % 2];
        this.context.fillRect(j * size, i * size, size, size);
        if (i > 0  && Math.random() * 100 > 40 && i < 14 ) {
          this.context.fillStyle = ['green', 'green'][(i + j) % 2];
          this.context.fillRect(j * size, i * size, size, size);
        }

        this.context.closePath();
      }
    }
    // SET PLAYER ON MAP


  }

  spawnPlayer(player: Player){
    this.context.drawImage(this.spaceshipAlly.nativeElement, player.posX * this.size, player.posY * this.size, this.size, this.size);
  }
  movePlayer(direction: string) {



    this.context.fillRect(this.myPlayer.posX, this.myPlayer.posY, 25, 25);


    if (direction === 'up') {

      this.context.drawImage(this.spaceshipAlly.nativeElement, this.myPlayer.posX,this.myPlayer.posY - 25 , 25, 25);
      this.myPlayer.posY -=this.size;

    } else if (direction === 'down') {

      this.context.drawImage(this.spaceshipAlly.nativeElement, this.myPlayer.posX, this.myPlayer.posY + 25, 25, 25);
      this.myPlayer.posY += this.size;

    } else if (direction === 'left') {

      this.context.drawImage(this.spaceshipAlly.nativeElement, this.myPlayer.posX - 25, this.myPlayer.posY, 25, 25);
      this.myPlayer.posX -= this.size;

    } else if (direction === 'right') {

      this.context.drawImage(this.spaceshipAlly.nativeElement, this.myPlayer.posX + 25, this.myPlayer.posY, 25, 25);
      this.myPlayer.posX +=this.size;

    }




  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event.code);
    if (event.code === 'KeyW' || event.code === 'ArrowUp') {
      this.movePlayer('up');
    }
    if (event.code === 'KeyS' || event.code === 'ArrowDown') {
      this.movePlayer('down');
    }
    if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
      this.movePlayer('left');
    }
    if (event.code === 'KeyD' || event.code === 'ArrowRight') {
      this.movePlayer('right');
    }
    }


  }
