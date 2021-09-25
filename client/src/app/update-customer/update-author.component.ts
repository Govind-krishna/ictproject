import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../customer';
import { AuthorModel } from '../customer/customer.model';

@Component({ 
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
 
  custoerItem = new CustomerModel("","",[],"","");

  constructor(private customerService: CustomerService, private _router: Router) { }

  ngOnInit(): void {
    let customerId = localStorage.getItem("updateCustomerId");
    this.customerService.getCustomer(customerId)
    .subscribe((data)=>{
      this.customerItem = JSON.parse(JSON.stringify(data)); //stringify = convert from object to JSON ; parse = convert from JSON to object
      console.log(this.customerItem);
    })
  }

  updateCustomer(){
    this.customerService.updateCustomer(this.customerItem);
    alert("success");
    this._router.navigate(['/customer']);
  }

}
