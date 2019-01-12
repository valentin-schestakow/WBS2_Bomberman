import {Component, Inject, Injector, OnInit, PLATFORM_ID} from '@angular/core';
import {UserService} from "../../services/user.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from "../User";
import {ActivatedRoute, Router} from "@angular/router";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  protected users: User[];
  protected userAmount: number =0;
  private modalService: NgbModal;
  constructor(protected userService: UserService, private route: ActivatedRoute, private router: Router, @Inject(PLATFORM_ID) private platformID: Object, private injector: Injector) {
    if(isPlatformBrowser(this.platformID)) this.modalService = this.injector.get(NgbModal);
  }

  ngOnInit() {
    this.userService.getUsers().then((users)=>{
      this.users = users;
      this.userAmount = this.users.length;

      }
    );
    /*this.route.params.subscribe((params: any) => {
      if (params['id'] != null) {
        const user = this.users.find((el) => el._id === params['id']);

        const modalRef = this.modalService.open(UserDetailComponent);
        modalRef.componentInstance.user = Object.assign({}, user);
      }
    });*/
  }

  editUser(user: User){
    const modalRef = this.modalService.open(UserDetailComponent);
    modalRef.result.then(
      (user: User) => this.userService.updateUser(user)
    ).catch((err)=> console.log("Modal geschlossen"))
    //modalRef.componentInstance.user = Object.assign({}, user);
    //this.router.navigate('/admin/userlist/edit/' + user._id);
   // this.userService.updateUser(user);
  }

  delUser(user: User){
    this.userService.deleteUser(user)
      /*.then(
      () => {
        this.users.find(user).splice(0,1);
      });*/
  }



}
