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


  constructor(private router: Router, private http: HttpClient) { }

    checkLogin(){
        this.http.get('http://localhost:8080/login/check')
            .toPromise()
            .then((data: any) => {
                console.log(data.message);
                this.isLoggedIn = true;
            }).catch((err: HttpErrorResponse) => {
            console.log(err.message);
            this.isLoggedIn = false;
        })
    }


    login(email: string, password: string) {
        this.http.post('http://localhost:8080/login', {
            email: email,
            password: password
        })
            .toPromise()
            .then((data: any) => {
                this.isLoggedIn = true;
                this.email = email;
                //console.log(data.message);
            }).catch((err: HttpErrorResponse) => {
            this.isLoggedIn = false;
        });
    }

  userLogin(email: string, password: string): Promise<boolean> {
   return this.http.post('http://localhost:8080/userLogin', {email: email, password: password}, httpOptions)
      .toPromise()
      .then((res: any) => {
        this.isLoggedIn = true;
        this.role = res.role;
        return true;
      })
      .catch((err) => {
        return false;
      });
  }


  logout(){
        this.http.post('http://localhost:8080/logout', {
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
