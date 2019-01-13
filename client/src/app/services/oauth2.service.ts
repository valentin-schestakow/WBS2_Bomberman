import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class Oauth2Service {

  public url = window.location.protocol+'//'+window.location.host+'/';

  constructor(private http: HttpClient) { }

  facebookRedirect(){
    window.location.replace('https://localhost:8443/auth/facebook')
  }

  getProfile() {
    return this.http.get('https://localhost:8443/oauth/userProfile')
      .toPromise()
      .then((res: any) => {
        console.log(res.player.player);
      }).catch((err : HttpErrorResponse) => {
        console.log(err);
      })
  }



}
