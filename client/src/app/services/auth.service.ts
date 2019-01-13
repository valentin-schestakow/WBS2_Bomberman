import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {UserService} from './user.service';
import {Router} from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  crossDomain: true,
  xhrFields: { withCredentials: true }
};

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  isLoggedIn: boolean;
  email: string;
  role: string;
  public url = window.location.protocol+'//'+window.location.host+'/';

  constructor(private router: Router, private http: HttpClient) { }

    checkLogin() : Promise<boolean>{
        return this.http.get(this.url+'user/login/check')
            .toPromise()
            .then((data: any) => {
                console.log(data.message);
                this.isLoggedIn = true;
                this.email = data.email;
                console.log(this.email + "still logged in");
                return true;
            }).catch((err: HttpErrorResponse) => {
            console.log(err.message);
            this.isLoggedIn = false;
            return false;
        })
    }


    login(email: string, password: string) {
        this.http.post(this.url+'login', {
            email: email,
            password: password
        })
            .toPromise()
            .then((data: any) => {
                this.isLoggedIn = true;
              console.log(this.email + "logged in");
                //console.log(data.message);
            }).catch((err: HttpErrorResponse) => {
            this.isLoggedIn = false;
        });
    }

  userLogin(email: string, pwd: string) : Promise<void> {
    return this.http.post(this.url+'user/login', {email: email, password: pwd}, httpOptions)
      .toPromise()
      .then((res: any) => {
        this.isLoggedIn = true;
        this.email = email;
        console.log(res.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }


  logout(){
        this.http.post(this.url+'user/logout', {
            username: this.email
        })
            .toPromise()
            .then((data: any) => {
                this.isLoggedIn = false;
                this.router.navigate(['']);

                //console.log(data.message);
            }).catch((err: HttpErrorResponse) => {
            //this.isLoggedIn = false;
            console.log(err.message);
        });
    }


    ngOnInit(): void {
        this.checkLogin();
    }
}
