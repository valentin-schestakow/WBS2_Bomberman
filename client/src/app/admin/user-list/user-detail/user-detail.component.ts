import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../User";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

/**
 * UserDetail Component
 */
export class UserDetailComponent implements OnInit {

  @Input() user: User;
  protected  errormsg: string;
  constructor(protected activeModal: NgbActiveModal, protected router: Router) { }

  ngOnInit() {
  }

  /**
   * save user function
   * @param ()
   * @returns  void
   */
  save(){
    if(this.user.password=='' || this.user.password==undefined) this.errormsg = 'Please enter a password!';
    else {
      this.activeModal.close(this.user);
      this.router.navigateByUrl('/admin/userlist');
    }
  }

}
