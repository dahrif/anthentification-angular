import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtService } from './jwt.service';

@Injectable()

export class AuthService {

private _signupUrl = "http://localhost:3000/api/signup";

private _loginUrl = "http://localhost:3000/api/login";




  constructor(private http: HttpClient, private _router : Router, private jwtService:JwtService){}

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
    // let token = this.jwtService.DecodeToken('token')
     return localStorage.getItem("token")
   }

   logout(){
     localStorage.clear()
     this._router.navigate(['/home'])

   }

  //  validateLogin(user){
  //   return this.http.post('/api/user/login',{
  //    username : user.username,
  //    password : user.password
  //   })
  //  }
}

