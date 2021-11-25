import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor( private _authService : AuthService, private _authguard : AuthGuard ) { }

  
  ngOnInit() {

    !!this._authService.loggedIn()

   }


}
