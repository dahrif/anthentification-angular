import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AuthService {

  private _signupUrl = "http://localhost:3000/api/signup";

private _loginUrl = "http://localhost:3000/api/login";



  constructor(private http: HttpClient){}

  signUp(user){
   return this.http.post<any>(this._signupUrl, user)
  }

  login(user){
    return this.http.post<any>(this._loginUrl, user)
   }

   loggedIn(){
     return !!localStorage.getItem('token')
   }

   getToken(){
     return localStorage.getItem('token')
   }

}
