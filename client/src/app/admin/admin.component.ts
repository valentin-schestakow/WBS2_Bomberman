import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  role: string;
  path: string;
  constructor( protected route: Router) { }

  ngOnInit() {
    this.role = 'admin';
    this.path = this.route.url;
  }

  logout () {
  }
}
