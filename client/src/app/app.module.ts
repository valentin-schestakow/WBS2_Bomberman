import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngameComponent } from './ingame/ingame.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import { PlayerComponent } from './player/player.component';
import { PlayerListComponent } from './admin/player-list/player-list.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { UserDetailComponent } from './admin/user-list/user-detail/user-detail.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    IngameComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    PlayerComponent,
    UserComponent,
    PlayerListComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    AuthService,
    HttpClient
  ],
  bootstrap: [AppComponent],
  exports: [
    UserDetailComponent,
  ],
  entryComponents: [
    UserDetailComponent
  ]

})
export class AppModule { }
