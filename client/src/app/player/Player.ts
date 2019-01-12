import {GameStats} from './GameStats';


export class Player  {
  _id      : number;
  //time     : string; // time-time format defined[RFC 3339] e.g. 2017-12-31T23:59:6
  email: string;
  password: string;
  username : string;
  stats: GameStats;

  constructor(id:number, time:string, username:string, email:string, password:string, stats: GameStats) {
    this._id       = id;
    //this.time     = time;
    this.username = username;
    this.email = email;
    this.password = password;
    this.stats = stats;
  }
}
