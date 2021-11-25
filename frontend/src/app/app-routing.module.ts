import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"", redirectTo: "home" , pathMatch: "full"},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path: "products", component:ProductsComponent},
  {path:"admin", component:AdminComponent
  ,  canActivate: [AuthGuard]
},
  
  {path:"home", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
