import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../User";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  protected users: User[];
  constructor(protected userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().then((users)=>{
      this.users = users;
      console.log(this.users.length+ "user gefudnen");
      }
    );
  }

}
