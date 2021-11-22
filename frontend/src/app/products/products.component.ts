import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];

  constructor(private _eventServices : EventService) { }

  
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
