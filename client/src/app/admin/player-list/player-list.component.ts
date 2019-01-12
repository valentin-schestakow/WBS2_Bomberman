import {Component, Inject, Injector, OnInit, PLATFORM_ID} from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {Player} from "../../player/Player";
import {ActivatedRoute, Router} from "@angular/router";
import {isPlatformBrowser} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PlayerDetailComponent} from "./player-detail/player-detail.component";

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
        console.log(player)
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
        this.playerService.updateUser(player.email, player.username, player.password).then(
          () => {
            // console.log("ging");
            this.getPlayers();
          }
        ).catch(
          () => console.log("ging nicht")
        );
        //alert("ging");
      }
    ).catch((err) => this.router.navigateByUrl('/admin/userlist'));
    modalRef.componentInstance.player = Object.assign(player);
    //this.router.navigateByUrl('/admin/userlist/edit/' + user._id);
  }

  /**
   * get all Players function
   * @param ()
   * @returns  Promise<void>
   */
  getPlayers(): Promise<void> {
    return this.playerService.getAllPlayers().then((player) => {
        this.player = player;
        this.playerAmount = this.player.length;

      }
    );
  }
}
