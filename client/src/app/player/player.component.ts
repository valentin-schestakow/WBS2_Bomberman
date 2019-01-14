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

  constructor(public playerService: PlayerService, public oauth: Oauth2Service, private modalService: NgbModal) {
    this.player = new Player(0,"","","","",new GameStats(0,0,0,0));
    this.playerService.checkLogin()
      .then((res:boolean) => {
        if(res) {
          this.playerService.getPlayer(this.playerService.currentPlayer.email)
            .then(() =>{
              this.player = this.playerService.currentPlayer;
              console.log(this.player);
              //window.location.reload();
            })
        } else {
          if (!this.playerService.isLoggedIn){
            this.oauth.getProfile()
              .then((res:boolean) => {
                if (res) {
                  this.player = this.playerService.currentPlayer;
                  window.location.reload();
                } else {
                  window.location.replace(this.playerService.url);
                }

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
