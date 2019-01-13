import { Component, OnInit } from '@angular/core';
import {Oauth2Service} from '../services/oauth2.service';
import {PlayerService} from '../services/player.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {User} from '../admin/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string = "";
  public password: string = "";
  public username: string = "";


  user: User;

  constructor(private oauth: Oauth2Service, protected playerService: PlayerService, protected router: Router, protected authService: AuthService, protected userService: UserService) { }

  ngOnInit() {
    if(this.playerService.isLoggedIn){
      this.router.navigate(['/play']);
    }
  }

  facebookLogin(){
    this.oauth.facebookRedirect();
  }


  emailLogin(){
    this.playerService.createPlayer(this.email, this.password, this.username)
      .then((res:any) => {
        if(res){
          console.log(this.playerService.isLoggedIn);
          window.location.replace(this.playerService.url+"player")
        } else {
         console.log("email in use");
        }
      });
    //this.playerService.login(this.email, password);
  }
  //may be deprecated
  login(){
    this.playerService.login(this.email, this.password).then(
      () => {
        this.router.navigate(['/play']);
      }).catch(
      (err) => {
        alert("Login fehlgeschlagen: "+err);
      }
    );
  }
  logout () {
    this.authService.logout();
  }

}
