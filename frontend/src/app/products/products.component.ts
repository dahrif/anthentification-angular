import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];

  constructor(private _eventServices : EventService, private _authService : AuthService) { }

  
  ngOnInit() {
    this._eventServices.getProducts()
    .subscribe(
      res => this.products = res,
      err => console.log(err)
    )
  }

  logOut(){
    
  }

}
