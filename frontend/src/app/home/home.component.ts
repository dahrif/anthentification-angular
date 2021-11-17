import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home = [];

  constructor(private _eventServices : EventService) { }

  
  ngOnInit() {
    this._eventServices.getHome()
    .subscribe(
      res => this.home = res,
      err => console.log(err)
    )
  }

  logOut(){
  
  }


}
