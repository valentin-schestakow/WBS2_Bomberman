export class User {
  public email: string;
  private password: string;

  constructor (mail: string, pwd: string){
    this.email = mail;
    this.password = pwd;
  }
}
