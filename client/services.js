"use strict";
//import { Injectable } from '@angular/core';
//import {HttpClient, HttpErrorResponse} from "@angular/common/http";
//import {BehaviorSubject} from "rxjs";
Object.defineProperty(exports, "__esModule", { value: true });
//@Injectable()
var RoutesService = /** @class */ (function () {
    function RoutesService() {
        this.serverURL = "https://localhost:8443";
        // constructor(private httpClient: HttpClient) {
    }
    return RoutesService;
}());
exports.RoutesService = RoutesService;
login();
{
    this.httpClient.get(this.serverURL + "/login").toPromise()
        .then(function (res) {
        //  }
    });
    //     .catch((err : HttpErrorResponse) => {
    //        RoutesService.handleError(err);
    //   });
}
// logout() {
this.httpClient.get(this.serverURL + "/logout").toPromise()
    .then(function (res) {
})
    .catch(function (err) {
    //   RoutesService.handleError(err);
});
