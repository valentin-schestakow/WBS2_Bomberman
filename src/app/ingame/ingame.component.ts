import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-ingame',
  templateUrl: './ingame.component.html',
  styleUrls: ['./ingame.component.scss']
})
export class IngameComponent implements OnInit, AfterViewInit {

  /** Template reference to the canvas element */
  @ViewChild('playground') playground: ElementRef;


  /** Canvas 2d context */
  context: CanvasRenderingContext2D;
  @ViewChild('spaceshipimg') spaceshipAlly: ElementRef;
  ctx: CanvasRenderingContext2D;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.context = (this.playground.nativeElement as HTMLCanvasElement).getContext('2d');
    this.draw();

  }




  private draw() {


    let size = 25;
    let box = new Image();
    box.src = '../../assets/images/box.JPG';
    console.log(box.height);
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 20; j++) {
        this.context.beginPath();

        this.context.fillStyle = ["#eee", "#eee"][(i + j) % 2];
        this.context.fillRect(j * size, i * size, size, size);
        if(i>0  && Math.random()*100>40 && i< 14 ){
          this.context.fillStyle = ["green", "green"][(i + j) % 2];
          this.context.fillRect(j * size, i * size, size, size);
        }

        this.context.closePath();
      }
    }
    // SET PLAYER ON MAP
    this.context.drawImage(this.spaceshipAlly.nativeElement, 0*size, 0*size, size, size);
    this.context.drawImage(this.spaceshipAlly.nativeElement, 19*size, 14*size, size, size);

  }

  movePlayer(direction: string){
    this.context.fillRect(0, 0, 25, 25);
    this.context.drawImage(this.spaceshipAlly.nativeElement, 25, 25, 25, 25);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event.code);
    if(event.code==="KeyW"){
      this.movePlayer("up");
    }
    if(event.code==="KeyS"){
      this.movePlayer("down");
    }
    if(event.code==="KeyA"){
      this.movePlayer("left");
    }
    if(event.code==="KeyD"){
      this.movePlayer("right");
    }
    }


  }
