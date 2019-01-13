import {Component, Input, OnInit} from '@angular/core';
import {Player} from './Player';
import {PlayerService} from '../services/player.service';
import {Oauth2Service} from '../services/oauth2.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  player: Player;

  constructor(public playerServie: PlayerService, public oauth: Oauth2Service) {
    this.player = this.playerServie.currentPlayer;
  }


  ngOnInit() {
    this.playerServie.checkLogin()
      .then((res:boolean) => {
        if(res) {
          console.log(this.playerServie.currentPlayer);
          this.player = this.playerServie.currentPlayer;
        } else {
          if (!this.playerServie.isLoggedIn){
            this.oauth.getProfile();
          }
        }

      })
  }

}
