import {GameStats} from './GameStats';

/**
 * Player Model
 */
export class Player  {
  _id      : number;
  //time     : string; // time-time format defined[RFC 3339] e.g. 2017-12-31T23:59:6
  public email: string;
  public password: string;
  public username : string;
  public stats: GameStats;

  /**
   * create new player instance
   * @param id:number, time:string, username:string, email:string, password:string, stats: GameStats
   * @returns new User
   */
  constructor(id:number, time:string, username:string, email:string, password:string, stats: GameStats) {
    this._id       = id;
    //this.time     = time;
    this.username = username;
    this.email = email;
    this.password = password;
    this.stats = stats;
  }
}
