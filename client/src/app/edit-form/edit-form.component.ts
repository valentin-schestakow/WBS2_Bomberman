import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PlayerService} from '../services/player.service';
import {Player} from '../player/Player';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  username: string = "";
  email: string = "";
  password: string = "";

  constructor(public activeModal: NgbActiveModal, private playerService: PlayerService) {
    this.playerService.checkLogin()
      .then((res:boolean) => {
        if(res) {
          this.playerService.getPlayer(this.playerService.currentEmail)
            .then((res:any) =>{
              this.email = this.playerService.currentPlayer.email;
              this.username = this.playerService.currentPlayer.username;
              //window.location.reload();
            })
        }
      })
  }

  ngOnInit() {
  }

  submit() {

    if (this.username !== "") {
      this.playerService.currentPlayer.username = this.username;
    }

    if (this.password.trim() !== "") {
      this.playerService.currentPlayer.password = this.password;
    } else {
      this.playerService.currentPlayer.password = "$keepPassword";
    }

    this.playerService.updatePlayer(this.playerService.currentPlayer);
    this.activeModal.close();
    window.location.reload();
  }

}
