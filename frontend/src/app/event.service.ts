import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class EventService {

  private _homeUrl = "http://localhost:3000/api/home"

  private _adminUrl = "http://localhost:3000/api/admin";
  

  constructor(private http : HttpClient) { }

  getHome(){
    return this.http.get<any>(this._homeUrl)
  }

  getAdmin(){
    return this.http.get<any>(this._adminUrl)
  }
}
