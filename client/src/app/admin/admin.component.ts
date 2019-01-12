import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from "./User";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

/**
 * Admin Dashboard
 */
export class AdminComponent implements OnInit {
  role: string;
  path: string;
  email: string;
  password: string;
  user: User;
  protected errormsg;
  constructor( protected route: Router, protected authService: AuthService, protected userService: UserService) { }

  ngOnInit() {
    this.role = 'admin';
    this.path = this.route.url;
    this.email ='';
    this.password='';
    this.user = null;
    this.errormsg ='';
    this.authService.checkLogin();
    this.userService.getUsers().then(
      (users: User[]) => {


        if(users.length==0){
          console.log("keine User gefunden, erstelle Admin Accout: mail@max-spies.de");
          this.userService.addUser(new User(1,"mail@max-spies.de","password","admin"));
        }

      }

    ).catch((err)=> {
      console.log("getUser fehlgeschlagen: " +err);
    });
  }

  /**
   * login user function
   * @param
   * @returns void
   */
  login(){
    this.authService.userLogin(this.email, this.password).then(
      () => {
        if(!this.authService.isLoggedIn) this.errormsg = 'Login failed: email/password is wrong!';
      }
    );
  }

  /**
   * logout user
   * @param ()
   * @returns void
   */
  logout () {
    this.authService.logout();
  }
}
