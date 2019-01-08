import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PlayerService implements OnInit{

  private isLoggedIn = false;

  constructor(private http: HttpClient) { }


  public getUsers(){
    this.http.get('https://localhost:8080/players')
      .toPromise()
      .then((data: any) => {
        console.log(data.players);
      }).catch((err: HttpErrorResponse) => {
      console.log(err);
    });
  }

  logIn() : Promise<void> {
    return this.http.post('https://localhost:8080/login/player', {email: "test@test.de", password: "test"}, httpOptions)
      .toPromise()
      .then((res: any) => {
      this.isLoggedIn = true;
      console.log(res.message);
    })
      .catch((err) => {
      console.log(err.message);
    });
  }

  ngOnInit(): void {
    this.getUsers();
    this.logIn();
  }

}


