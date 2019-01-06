//import { Injectable } from '@angular/core';
//import {HttpClient, HttpErrorResponse} from "@angular/common/http";
//import {BehaviorSubject} from "rxjs";

//@Injectable()
export class RoutesService {


  private serverURL : string = "https://localhost:8443";


 // constructor(private httpClient: HttpClient) {
  }

  login() {
    this.httpClient.get(
      this.serverURL + "/login",
    ).toPromise()
      .then((res: Object) => {

        //  }
      })
 //     .catch((err : HttpErrorResponse) => {
//        RoutesService.handleError(err);
   //   });
  }


 // logout() {
    this.httpClient.get(
      this.serverURL + "/logout"
    ).toPromise()
      .then((res: any) => {

      })
      .catch((err: HttpErrorResponse) => {
        //   RoutesService.handleError(err);
      })


