import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class EventService {

  private _productsUrl = "http://localhost:3000/api/products"

  private _adminUrl = "http://localhost:3000/api/admin";
  

  constructor(private http : HttpClient) { }

  getProducts(){
    return this.http.get<any>(this._productsUrl)
  }

  getAdmin(){
    return this.http.get<any>(this._adminUrl)
  }
}
