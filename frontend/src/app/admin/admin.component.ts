import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admin = [];
  
  constructor(private _eventServices : EventService, private _router : Router, private _authService : AuthService) { }

  ngOnInit() {

    this._eventServices.getAdmin()
    .subscribe(
      res => this.admin = res,
      err => console.log(err)
      //  {
      //   if(err instanceof HttpErrorResponse){
      //     if (err.status === 401){
      //       this._router.navigate(['/login'])
      //     }
      //   }
      // }
    )
  }
}
