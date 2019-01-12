import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {Player} from "../../player/Player";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  protected player: Player[];
  protected playerAmount: number = 0;
  constructor(protected playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().then(
      (player)=> {
        console.log(player)
        this.player = player;
        this.playerAmount = this.player.length;
      });
  }

}
