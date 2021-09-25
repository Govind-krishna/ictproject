import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../customer.service';
import { AuthorModel } from '../customer/customer.model';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  customerItem = new CustomerModel("","",[],"","");

  constructor(private customerService: CustomerService, private _router: Router) { }

  ngOnInit(): void {
  }
  
  AddCustomer(){
    this.customerService.NewCustomerComponent(this.customerItem);
    console.log("added");
    alert("success");
    this._router.navigate(['/customers']); 
  }
}
