import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {IngameComponent} from "./ingame/ingame.component";
import {UserComponent} from "./user/user.component";
import {LoginComponent} from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {PlayerComponent} from './player/player.component';

const routes: Routes = [
  { path: 'play', component: IngameComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'gamer', component: PlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
