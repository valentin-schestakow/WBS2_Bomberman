import { Component, OnInit } from '@angular/core';
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
  email: string;
  password: string;

  user: User;

  constructor( protected route: Router, protected authService: AuthService, protected userService: UserService) { }

  ngOnInit() {
  }


  login(){
    this.authService.userLogin(this.email, this.password).then().catch(
      (err) => {
        alert("Login fehlgeschlagen: "+err);
      }
    );
  }
  logout () {
    this.authService.logout();
  }
}
