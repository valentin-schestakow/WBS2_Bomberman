import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {User} from '../admin/User';
import {PlayerService} from '../services/player.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  user: User;

  constructor(protected playerService: PlayerService, protected router: Router, protected authService: AuthService, protected userService: UserService) { }

  ngOnInit() {
    if(this.playerService.isLoggedIn){
      this.router.navigate(['/play']);
    }
  }


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
