import { Component, OnInit } from '@angular/core';
import {Oauth2Service} from '../services/oauth2.service';
import {PlayerService} from '../services/player.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string = "";
  public password: string = "";
  public username: string = "";


  constructor(private oauth: Oauth2Service, private playerService: PlayerService) { }

  ngOnInit() {
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

}
