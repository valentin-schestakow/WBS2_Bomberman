import {Component, Inject, Injector, OnInit, PLATFORM_ID} from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {Player} from "../../player/Player";
import {ActivatedRoute, Router} from "@angular/router";
import {isPlatformBrowser} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PlayerDetailComponent} from "./player-detail/player-detail.component";
import {GameStats} from "../../player/GameStats";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})

/**
 * PlayerList Component
 */
export class PlayerListComponent implements OnInit {

  protected player: Player[];
  protected playerAmount: number = 0;
  private modalService: NgbModal;

  constructor(private route: ActivatedRoute, private router: Router, @Inject(PLATFORM_ID) private platformID: Object, private injector: Injector, protected playerService: PlayerService) {
    if (isPlatformBrowser(this.platformID)) this.modalService = this.injector.get(NgbModal);
  }

  ngOnInit() {
    this.playerService.getAllPlayers().then(
      (player) => {
        //console.log(player)
        this.player = player;
        this.playerAmount = this.player.length;
      });
  }

  /**
   * edit player function
   * @param (player)
   * @returns  void
   */
  editPlayer(player: Player) {
    const modalRef = this.modalService.open(PlayerDetailComponent);
    modalRef.result.then(
      (player: Player) => {
        console.log("Update: " + player.email);
        this.playerService.updatePlayer(player).then(
          () => {
            // console.log("ging");
            this.getPlayers();
          }
        ).catch(
          () => console.log("ging nicht")
        );
      }).catch((err)=> this.router.navigateByUrl('/admin/userlist'));
      modalRef.componentInstance.player = Object.assign(player);

  }

  /**
   * edit player function
   * @param (player)
   * @returns  void
   */
  addPlayer() {
    const modalRef = this.modalService.open(PlayerDetailComponent);
    modalRef.result.then(
      (player: Player) => {
        console.log("Update: " + player.email);
        this.playerService.createPlayer(player).then(
          () => {
            // console.log("ging");
            this.getPlayers();
          }
        ).catch(
          () => console.log("ging nicht")
        );
      }).catch((err)=> this.router.navigateByUrl('/admin/userlist'));
      modalRef.componentInstance.player = Object.assign(new Player(0,new Date(),"username","test@test.com","password", new GameStats(0,0,0,0)));

  }

  delPlayer(player: Player) {
    this.playerService.deletePlayer(player).then(
      ()=> this.getPlayers()
    )
  }


  /**
   * get all players function
   * @param ()
   * @returns Promise<void>
   */
  getPlayers() : Promise<void>{
    return this.playerService.getAllPlayers().then((player)=>{
        this.player = player;
        this.playerAmount = this.player.length;

      }
    );
  }
}
