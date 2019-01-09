import {Component, Input, OnInit} from '@angular/core';
import {Player} from './Player';
import {PlayerService} from '../services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  player: Player;

  constructor(public playerServie: PlayerService) { }


  ngOnInit() {
    this.playerServie.login("new@test.de", "pw")
      .then(() => {
        this.player = this.playerServie.currentPlayer;
    });
  }

}
