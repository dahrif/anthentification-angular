import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admin = [];
  username: any = "";
  
  constructor(private _eventServices : EventService) { }

  ngOnInit() {

    this._eventServices.getAdmin()
    .subscribe(
      res => this.admin = res,
      err => console.log(err)
    )
  }

  session(){
    this.username = sessionStorage.getItem("username")
  }

}
