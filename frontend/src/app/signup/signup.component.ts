import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  signupUserData = {}

  constructor(private _auth: AuthService, private _router : Router) {}

  ngOnInit(){ 
  }


  signUp() {
    this._auth.signUp(this.signupUserData)
    .subscribe(
      res =>
       {console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/products'])
      },
      err => console.log(err)
    )

  }

}
