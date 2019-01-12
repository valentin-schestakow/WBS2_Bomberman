import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Player} from "../ingame/Player";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PlayerService implements OnInit{

  private isLoggedIn = false;
  public player: Player[];

  constructor(private http: HttpClient) { }


  public getUsers(): Promise<Player[]>{
    this.http.get('https://localhost:8080/players')
      .toPromise()
      .then((player: Player[]) => {
        this.player = player;
        return player;
      }).catch((err: HttpErrorResponse) => {
      console.log(err);
      return [];
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

  }

}


