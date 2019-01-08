import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PlayerService implements OnInit{

  constructor(private http: HttpClient) { }


  public getUsers(){
    this.http.get('https://localhost:8080/players')
      .toPromise()
      .then((data: any) => {
        console.log(data);
      }).catch((err: HttpErrorResponse) => {
      console.log(err);
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

}


