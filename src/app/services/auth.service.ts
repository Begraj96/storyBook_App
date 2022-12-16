
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isAuthenticated = new BehaviorSubject<boolean>(false)
  token: string | null;

  constructor(private router: Router, private _http: HttpClient) {
      this.token = (localStorage.getItem('token'));
      //this.isauthenticated();
  }


  getregisterData(name: string, email: string, password: number, password2: number) {
    return this._http.post("http://localhost:5000/users/register",
      { name, email, password, password2, returnSecureToken: true }, httpOptions)
  }

  getloginData(email: string, password: number) {
    return this._http.post('http://localhost:5000/users/login',
      { email: email, password: password, returnSecureToken: true }, httpOptions)
  };


  setToken(token: string) {
    //console.log('token', token)
    localStorage.setItem('token', JSON.stringify('Bearer '+token));
   //console.log('token', token)
    //  this.isauthenticated();
  }

  getToken(): any {
     return JSON.parse(localStorage.getItem('token')??'');
  }



  isLoggedIn(): boolean {
    let a = localStorage.getItem('token') ? true : false;
    // console.log(a)
    if (a == false) {
      this.router.navigate(['login'])
    }
    return a;
  }


  // isauthenticated() {
  //   if (localStorage.getItem('token')) {
  //     this.isAuthenticated.next(true);
  //   } else {
  //     this.isAuthenticated.next(false);
  //   }
  // }

}



// private authentivatedUser(email: string, userId: string, token: string, expiresIn: number) {
//   const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
//   const user = new User(email, userId, token, expirationDate);
//   console.log('user =>', user)
//   this.user.next(user);
// }



//private handleUser(response: AuthResponseData) {
// 1 decode jwt
// 2 make object to save {isAuthentication:true, user:{email:''}, token:''}
// 2 save object


// const expireDate = new Date(
//   new Date().getTime() + +response.expiresIn * 1000
// );
// const user = new User(
//   response.email,
//   response.localId,
//   response.idToken,
//   expireDate
// );
// this.user.next(user);
// console.log(user)

// localStorage.setItem('userData', JSON.stringify(user));
// }



// function isLoggedIn() {
//   throw new Error('Function not implemented.');
// }

