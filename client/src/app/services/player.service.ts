import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Player} from '../player/Player';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import {Field} from '../ingame/Field';
import {Gamer} from '../ingame/Gamer';
import {User} from "../admin/User";



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PlayerService implements OnInit{
  public url = window.location.protocol+'//'+window.location.host+'/';

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

  checkLogin() : Promise<boolean> {
    return this.http.get(this.url+'login/check')
      .toPromise()
      .then((res: any) => {
        this.isLoggedIn = true;
        this.currentPlayer = res.player;
        //console.log(res.player);
        return true;
      }).catch((err: HttpErrorResponse) => {
        console.log(err);
        this.isLoggedIn = false;
        return false;

    });
  }

  getAllPlayers() : Promise<Player[]> {
    return this.http.get(this.url+'players')
      .toPromise()
      .then((res: any) => {
        console.log(res);
        return <Player[]>res.players;
      }).catch((err: HttpErrorResponse) => {
      console.log(err);
      return [];
    });
  }

  login(email: string, password: string) : Promise<boolean> {
    return this.http.post(this.url+'login/player', {email: email, password: password}, httpOptions)
      .toPromise()
      .then((res: any) => {
      this.isLoggedIn = true;
      this.currentPlayer = res.player;
      console.log(res.message);
        return true;
    })
      .catch((err) => {
      console.log(err.message);
        return false;
    });
  }

  logout(email: string) : Promise<void> {
    return this.http.post(this.url+'logout/player', {email: email}, httpOptions)
      .toPromise()
      .then((res: any) => {
        this.isLoggedIn = false;
        console.log(res.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  createPlayer(email: string, password: string, username: string) : Promise<boolean> {
    return this.http.post(this.url+'create/player', {email: email, password: password, username: username}, httpOptions)
      .toPromise()
      .then((res: any) => {
        this.isLoggedIn = true;
        console.log(res.player);
        return true;
      })
      .catch((err) => {
        console.log(err.message);
        return false;
      });
  }

  getPlayer(email: string) : Promise<void> {
    return this.http.get(this.url+'player/'+email)
      .toPromise()
      .then((data: any) => {
        console.log(data.player);
      }).catch((err: HttpErrorResponse) => {
      console.log(err);
    });
  }

  updatePlayer(player: Player) : Promise<void> {
    return this.http.put(this.url+'player/' + player.email, player)
      .toPromise()
      .then((data: any) => {
        console.log(data.message);
      }).catch((err: HttpErrorResponse) => {
      console.log(err.message);
    });
  }

  deletePlayer(player: Player): Promise<void> {
    return this.http.delete(`${this.url}player/${player.email}`).toPromise()
      .then((res: any) => {
        console.log("User gelöscht");
      })
      .catch((err) =>  console.log("User nicht gelöscht"));
  }


  ngOnInit(): void {
  }

}


