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

  public signupForm !: FormGroup;
  public submitted : false;

  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router:Router, private authService: AuthService) { }

  ngOnInit() : void {
    this.signupForm = this.formBuilder.group ({
        username : ['', Validators.required],
        email : ['', Validators.required],
        password : ['', Validators.required]
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
    .subscribe(res=>{
      alert("Votre compte a été crée avec succès");
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, err=> {
      alert("Erreur")
    }
    )
  }

}
