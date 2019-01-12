import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {Player} from "../../../player/Player";

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})

/**
 * PlayerDetail Component
 */
export class PlayerDetailComponent implements OnInit {

  @Input() player: Player;
  protected  errormsg: string;
  constructor(protected activeModal: NgbActiveModal, protected router: Router) { }

  ngOnInit() {
   // console.log(this.player);
  }


  /**
   * save player function
   * @param ()
   * @returns  void
   */
  save(){
    if(this.player.password=='' || this.player.password==undefined) this.errormsg = 'Please enter a password!';
    else {
      this.activeModal.close(this.player);
      this.router.navigateByUrl('/admin/playerlist');
    }
  }

}


