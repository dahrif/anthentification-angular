import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()

export class AuthGuard implements CanActivate{

 constructor(private _authService : AuthService, private _router : Router) {}

 canActivate() : boolean {
    


     if (this._authService.loggedIn()){
         return true
     } else {
         this._router.navigate(['/login'])
         return false
     }

     if (this._authService.loggedInAdmin()){
        return true
    } else {
        this._router.navigate(['/loginadmin'])
        return false
    }
    }
}
