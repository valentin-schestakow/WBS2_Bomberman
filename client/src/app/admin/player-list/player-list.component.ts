import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {Player} from "../../ingame/Player";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  player: Player[];
  constructor(protected playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getUsers().then((player)=> console.log(this.playerService.player));
  }

}
