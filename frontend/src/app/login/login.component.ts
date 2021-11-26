import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService, private _router : Router) { }

  ngOnInit() : void {
    
  }

  login(){
    this._auth.login(this.loginUserData)
    .subscribe(
      res =>{
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/admin'])
      },
      err => console.log(err)
    )
  }
}
