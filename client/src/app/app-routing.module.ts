import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CustomerComponent } from './customer/customer.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';

import { SignupComponent } from './signup/signup.component';
import { SinglecustomerComponent } from './singlecustomer/singlecustomer.component';

import { UpdateCustomerComponent } from './update-customer/update-author.component';


const routes: Routes = [
  {path: '' , 
  component: HomeComponent},

  {path: 'signup',
  component: SignupComponent},

  {path: 'login', 
  component: LoginComponent},
  
  {path: 'customer' , 
  component: CustomerComponent},

  {path: 'newcustomer' , 
  canActivate : [AuthGuard],
  component: NewCustomerComponent},

  {path: 'updatecustomer',
  canActivate : [AuthGuard],
  component: UpdateCustomerComponent},

  {path: 'singlecustomer',
  component: SinglecustomerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
