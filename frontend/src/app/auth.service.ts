import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {

private _signupUrl = "http://localhost:3000/api/signup";

private _loginUrl = "http://localhost:3000/api/login";

private _signupAdminUrl = "http://localhost:3000/api/signupadmin";

private _loginAdminUrl = "http://localhost:3000/api/loginadmin";



  constructor(private http: HttpClient, private _router : Router){}

  signUp(user){
   return this.http.post<any>(this._signupUrl, user)
  }

  login(user){
    return this.http.post<any>(this._loginUrl, user)
   }

   signUpAdmin(admin){
    return this.http.post<any>(this._signupAdminUrl, admin)
   }
 
   loginAdmin(admin){
     return this.http.post<any>(this._loginAdminUrl, admin)
    }

   loggedIn(){
     return !!localStorage.getItem('token')
   }

   loggedInAdmin(){
    return !!localStorage.getItem('token')
  }

   getToken(){
     return localStorage.getItem('token')
   }

   logout(){
     localStorage.clear()
     this._router.navigate(['/home'])

   }

}
