import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signupadmin',
  templateUrl: './signupadmin.component.html',
  styleUrls: ['./signupadmin.component.css']
})
export class SignupadminComponent implements OnInit {

  signupAdminData = {}

  constructor(private _auth: AuthService, private _router : Router) {}

  ngOnInit() {
  }

  signUpAdmin() {
    this._auth.signUpAdmin(this.signupAdminData)
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
