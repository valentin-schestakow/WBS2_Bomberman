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
import { PlayerListComponent } from './admin/player-list/player-list.component';
import { UserListComponent } from './admin/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IngameComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    PlayerListComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
