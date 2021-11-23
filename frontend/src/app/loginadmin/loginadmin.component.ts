import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

  loginAdminData = {}


  constructor(private _auth: AuthService, private _router : Router) { }

  ngOnInit() {
  }

  login(){
    this._auth.loginAdmin(this.loginAdminData)
    .subscribe(
      res =>
       {console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/admin'])
      },
      err => console.log(err)
    )
  }

}
