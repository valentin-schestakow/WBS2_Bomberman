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

/**
 * UserList Component
 */
export class UserListComponent implements OnInit {
  protected users: User[];
  protected userAmount: number =0;
  private modalService: NgbModal;
  constructor(protected userService: UserService, private route: ActivatedRoute, private router: Router, @Inject(PLATFORM_ID) private platformID: Object, private injector: Injector) {
    if(isPlatformBrowser(this.platformID)) this.modalService = this.injector.get(NgbModal);
  }

  ngOnInit() {
    this.getUsers().then(
      () => {

        this.route.params.subscribe((params: any) => {
          if (params['id'] != null) {

            const user = this.users.find((el) => el._id === params['id']);

            const modalRef = this.modalService.open(UserDetailComponent);
            modalRef.result.then(
              (user: User) => {
                console.log("Update: " +user.email);
                this.userService.updateUser(user).then(
                  ()=> {
                    // console.log("ging");
                    this.getUsers();
                  }
                ).catch(
                  () => console.log("ging nicht")
                );
                //alert("ging");
              }
            ).catch((err)=> this.router.navigateByUrl('/admin/userlist'));
            modalRef.componentInstance.user = Object.assign(user);
          }
        });

      }
    );

  }

  /**
   * get all users function
   * @param ()
   * @returns Promise<void>
   */
  getUsers() : Promise<void>{
    return this.userService.getUsers().then((users)=>{
        this.users = users;
        this.userAmount = this.users.length;

      }
    );
  }

  /**
   * get all users function
   * @param (user)
   * @returns void
   */
  editUser(user: User){
   /* const modalRef = this.modalService.open(UserDetailComponent);
    modalRef.result.then(
      (user: User) => {
        console.log("Update: " +user.email);
        this.userService.updateUser(user).then(
          ()=> {
           // console.log("ging");
            this.getUsers();
          }
        ).catch(
          () => console.log("ging nicht")
        );
        //alert("ging");
      }
    ).catch((err)=> this.router.navigateByUrl('/admin/userlist'));
    modalRef.componentInstance.user = Object.assign(user);*/
    this.router.navigateByUrl('/admin/userlist/edit/' + user._id);
  }

  /**
   * delete user function
   * @param (user)
   * @returns void
   */
  delUser(user: User){
    this.userService.deleteUser(user).then(
      () => this.getUsers()
    );
  }

  /**
   * add user function
   * @param ()
   * @returns void
   */
  addUser(){
    const modalRef = this.modalService.open(UserDetailComponent);
    modalRef.result.then(
      (user: User) => {
        this.userService.addUser(user);
        this.getUsers();
      }
    );
    modalRef.componentInstance.user = Object.assign(new User(0,"newUser@mail.com","","mod"));
  }



}
