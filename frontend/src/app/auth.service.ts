import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AuthService {

  private _signupUrl = "http://localhost:3000/api/signup"

  constructor(private http: HttpClient){}

  signUp(user){
   return this.http.post<any>(this._signupUrl, user)
  }

}
