import {Component, Input, OnInit} from '@angular/core';
import {Player} from './Player';
import {PlayerService} from '../services/player.service';
import {Oauth2Service} from '../services/oauth2.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginFormComponent} from '../login-form/login-form.component';
import {EditFormComponent} from '../edit-form/edit-form.component';
import {GameStats} from './GameStats';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  player: Player;

  constructor(public playerServie: PlayerService, public oauth: Oauth2Service, private modalService: NgbModal) {
    this.player = new Player(0,"","","","",new GameStats(0,0,0,0));
    this.playerServie.checkLogin()
      .then((res:boolean) => {
        if(res) {
          console.log(this.playerServie.currentPlayer);
          this.player = this.playerServie.currentPlayer;
        } else {
          if (!this.playerServie.isLoggedIn){
            this.oauth.getProfile()
              .then(() => {
                this.player = this.playerServie.currentPlayer;
                window.location.reload();
              });
          }
        }

      })
  }


  ngOnInit() {

  }

  edit(){
    this.modalService.open(EditFormComponent);
  }

}
