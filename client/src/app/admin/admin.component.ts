import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from "./User";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  role: string;
  path: string;
  email: string;
  password: string;
  user: User;
  constructor( protected route: Router, protected authService: AuthService) { }

  ngOnInit() {
    this.role = 'admin';
    this.path = this.route.url;
    this.email ='';
    this.password='';
    this.user = null;

  }

  login(){
    this.authService.userLogin(this.email, this.password);
  }
  logout () {
  }
}
