import {Component, OnInit} from '@angular/core';
import {PlayerService} from './services/player.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginFormComponent} from './login-form/login-form.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'bomberman';
  isLoggedIn: boolean;

  constructor(private playerService: PlayerService, private modalService: NgbModal) {
    this.playerService.checkLogin()
      .then((res:boolean) => {
        this.isLoggedIn = res;
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
    const modalRef = this.modalService.open(LoginFormComponent);

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
