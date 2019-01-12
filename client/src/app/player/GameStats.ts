export class GameStats {
  gameCount: number;
  points: number;
  kills: number;
  deaths: number;

  constructor(gameCount:number, points:number, kills:number, deaths:number){
    this.gameCount = gameCount;
    this.points = points;
    this.kills = kills;
    this.deaths = deaths;
  }
}
