import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../customer';
import { AuthorModel } from '../customer/customer.model';

@Component({
  selector: 'app-singlecustomer',
  templateUrl: './singlecustomer.component.html',
  styleUrls: ['./singlecustomer.component.css']
})
export class SinglecustomerComponent implements OnInit {

  customerItem = new customerModel("","",[],"","");

  constructor(private customerService: CustomerService, private _router: Router) { }

  ngOnInit(): void {
    let customerId = localStorage.getItem("singleCustomerId");
    this.customerService.getcustomer(authorId)
    .subscribe((data)=>{
      this.customerItem = JSON.parse(JSON.stringify(data)); //stringify = convert from object to JSON ; parse = convert from JSON to object
      console.log(this.customerItem);
    })
  }

}
