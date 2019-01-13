import {Component, OnInit} from '@angular/core';
import {PlayerService} from './services/player.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginFormComponent} from './login-form/login-form.component';
import {IngameComponent} from './ingame/ingame.component';
import {Player} from './player/Player';
import {Gamer} from './ingame/Gamer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[PlayerService]
})
export class AppComponent implements  OnInit{
  title = 'bomberman';
  isLoggedIn: boolean;
  currentPlayer: Player;
  myPlayer: Gamer;
  lives: number = 0;
  private gamers: Gamer[];

  //this.ingameComponent.myPlayer.lives;
  constructor(private playerService: PlayerService, private modalService: NgbModal) {
    this.playerService.checkLogin()
      .then((res:boolean) => {
        this.isLoggedIn = res;
        this.currentPlayer = this.playerService.currentPlayer;
      });

    this.playerService.receiveGamer().subscribe( data => {
      this.gamers = data;
      for (let gamer of this.gamers){
        if (gamer.name == this.currentPlayer.username){
          this.myPlayer = gamer;
        }
      }
      this.lives = this.myPlayer.lives;
    });

  }

  ngOnInit(): void {

    //this.isLoggedIn = this.playerService.isLoggedIn;
    /*
    this.playerService.checkLogin()
      .then(() => {
        this.playerService.login("test@test.de", "test")
      })
      .then(() => {
        this.playerService.checkLogin()
      })
      .then(() => {
        this.playerService.createPlayer("new@test.de", "pw", "name")
      })
      .then(() => {
        this.playerService.getPlayer("new@test.de")
      })
      .then(() => {
        this.playerService.getAllPlayers()
      })
      .catch((err: HttpErrorResponse) => {
        console.log(err)
      });
      */
  }

  loginButton(){
    this.modalService.open(LoginFormComponent);
  }

  signUpButton(){
    window.location.replace(this.playerService.url+"login");
  }

  logoutButton(){
    this.playerService.logout(this.playerService.currentPlayer.email)
      .then(() => {
        window.location.replace('/');
      })
  }


}
