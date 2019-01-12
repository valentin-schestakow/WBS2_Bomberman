import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {User} from "../admin/User";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  public url = window.location.protocol+'//'+window.location.host+'/';


  getUsers(): Promise<User[]> {
    return this.http.get<User[]>(this.url+'user/getAll').toPromise()
      .then((res: any) => {
        console.log("User gefunden: ");
       //console.log(res.users);
        return res.users as User[];
      })
      .catch((err) => {
        console.log("User nicht gefunden");
        return [];
      });
  }

  addUser(user: User): Promise<void> {
    console.log(user);
    return this.http.post(this.url+'user/create', user, httpOptions).toPromise()
      .then((res: any) => {
        console.log("User hinzugefügt");
        this.getUsers();
      })
      .catch((err) =>  console.log("User nicht geaddet"));
  }

  updateUser(user: User): Promise<void> {
    console.log(user);
    return this.http.put(`${this.url}user/${user._id}`, user, httpOptions).toPromise()
      .then((res: any) => {
        console.log("User geupdated");
      })
      .catch((err) =>  console.log("User nicht geupdated: " +err.message));
  }

  deleteUser(user: User): Promise<void> {
    return this.http.delete(`${this.url}user/delete/${user.email}`).toPromise()
      .then((res: any) => {
        console.log("User gelöscht");
        this.getUsers();
      })
      .catch((err) =>  console.log("User nicht gelöscht"));
  }
}
