import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PlayerService} from '../services/player.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(public activeModal: NgbActiveModal, private playerService: PlayerService) { }

  ngOnInit() {
  }

  login(){
    if((this.email !== "") && (this.password !== "")){
      this.playerService.login(this.email, this.password)
        .then((res:boolean) => {
          if(res){
            console.log("succes!");
            this.activeModal.dismiss();
            window.location.replace(this.playerService.url+"player")
          } else {
            console.log("email or password wrong");
          }
        })
    } else {
      console.log("error")
    }
  }

}
