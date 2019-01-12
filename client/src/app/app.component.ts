import {Component, OnInit} from '@angular/core';
import {PlayerService} from './services/player.service';
import {HttpErrorResponse} from '@angular/common/http';

import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'bomberman';

  constructor(protected router: Router,private playerService: PlayerService) {}

  ngOnInit(): void {
    //this.router.navigate(['/login']);
    /*
    this.playerService.checkLogin()
      .then(() => {
        this.playerService.login("test@test.de", "test")
      })
      .then(() => {
        this.playerService.checkLogin()
      })
      .then(() => {
        this.playerService.createPlayer("new@test.de", "pw", "name")
      })
      .then(() => {
        this.playerService.getPlayer("new@test.de")
      })
      .then(() => {
        this.playerService.getAllPlayers()
      })
      .catch((err: HttpErrorResponse) => {
        console.log(err)
      });
      */
  }
}
