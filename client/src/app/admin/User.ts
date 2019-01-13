/**
 * User Model
 */
export class User {
  public _id: number;
  public email: string;
  public password: string;
  public role: string;

  /**
   * creates user instance
   * @param id: number, email: string, password: string, role: string
   * @returns new User
   */
  constructor(id: number, email: string, password: string, role: string){
    this.email = email;
    this._id = id;
    this.password = password;
    this.role = role;
  }
}
