import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {PlayerService} from './player.service';



@Injectable({
  providedIn: 'root'
})
export class Oauth2Service {

  public url = window.location.protocol+'//'+window.location.host+'/';

  constructor(private http: HttpClient, private playerService: PlayerService) { }

  facebookRedirect(){
    window.location.replace('https://localhost:8443/auth/facebook')
  }

  getProfile() : Promise<boolean>{
    return this.http.get(this.url + 'oauth/userProfile')
      .toPromise()
      .then((res: any) => {
        this.playerService.login(res.player.player.emails[0].value, res.player.player.photos.value);
        console.log(res);
        return true;
      }).catch((err : HttpErrorResponse) => {
        console.log(err);
        return false;
      })
  }



}
