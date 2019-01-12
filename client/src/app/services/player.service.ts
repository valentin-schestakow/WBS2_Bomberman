import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Player} from '../player/Player';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import {Field} from '../ingame/Field';
import {Gamer} from '../ingame/Gamer';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PlayerService implements OnInit{

  private socket = io.connect(window.location.protocol + '//' + window.location.host);

  emitMove(data:any){
    this.socket.emit('move',data);
  }
  emitField(field:Field[][]){
    this.socket.emit('getField', field);
  }
  emitGamer(gamer:Gamer){
    this.socket.emit('gamer', gamer);
  }

  receiveMove(){
    let obbservable = new Observable<{move: string, gamer: Gamer}>(observer => {
      this.socket.on('move', (data:any) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect();}
    });
    return obbservable
  }

  receiveField(){
    let obbservable = new Observable<Field[][]>(observer => {
      this.socket.on('getField', (data:any) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect();}
    });
    return obbservable
  }

  receiveGamer(){
    let obbservable = new Observable<Gamer>(observer => {
      this.socket.on('gamer', (data:any) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect();}
    });
    return obbservable
  }






  public currentPlayer: Player;
  public isLoggedIn = false;

  constructor(private http: HttpClient) { }

  checkLogin() : Promise<void> {
    return this.http.get('https://localhost:8080/login/check')
      .toPromise()
      .then((data: any) => {
        console.log(data.message);
      }).catch((err: HttpErrorResponse) => {
        console.log(err);
        this.isLoggedIn = false;

    });
  }

  getAllPlayers() : Promise<Player[]> {
    return this.http.get('https://localhost:8080/players')
      .toPromise()
      .then((res: any) => {
        //console.log(data.players);
        return <Player[]>res.players;
      }).catch((err: HttpErrorResponse) => {
      console.log(err);
      return [];
    });
  }

  login(email: string, password: string) : Promise<void> {
    return this.http.post('https://localhost:8080/login/player', {email: email, password: password}, httpOptions)
      .toPromise()
      .then((res: any) => {
      this.isLoggedIn = true;
      this.currentPlayer = res.player;
      console.log(res.message);
    })
      .catch((err) => {
      console.log(err.message);
    });
  }

  logout(email: string) : Promise<void> {
    return this.http.post('https://localhost:8080/logout/player', {email: email}, httpOptions)
      .toPromise()
      .then((res: any) => {
        this.isLoggedIn = false;
        console.log(res.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  createPlayer(email: string, password: string, username: string) : Promise<void> {
    return this.http.post('https://localhost:8080/create/player', {email: email, password: password, username: username}, httpOptions)
      .toPromise()
      .then((res: any) => {
        //this.isLoggedIn = true;
        console.log(res.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  getPlayer(email: string) : Promise<void> {
    return this.http.get('https://localhost:8080/player/'+email)
      .toPromise()
      .then((data: any) => {
        console.log(data.player);
      }).catch((err: HttpErrorResponse) => {
      console.log(err);
    });
  }

  updateUser(email: string, username: string, password: string) : Promise<void> {
    return this.http.put('http://localhost:8080/user/' + email, {
      username: username,
      password: password
    })
      .toPromise()
      .then((data: any) => {
        console.log(data.message);
      }).catch((err: HttpErrorResponse) => {
      console.log(err.message);
    });
  }


  ngOnInit(): void {
  }

}


