import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

import { UpdateCustomerComponent } from './update-customer/update-customer.component';

import { NewCustomerComponent } from './new-customer/new-customer.component';

import { SinglecusomerComponent } from './singlecustomer/singlecustomer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth.service';

import { CustomerService } from './customer.service';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    AuthorsComponent,
    HomeComponent,
  
    UpdateCustomerComponent,
    
    NewCustomerComponent,
  
    SinglecustomerComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookService, AuthorService, AuthService,
             {
              provide : HTTP_INTERCEPTORS,
              useClass : TokenInterceptorService,
              multi : true
             }],
  bootstrap: [AppComponent]
})
export class AppModule { }
