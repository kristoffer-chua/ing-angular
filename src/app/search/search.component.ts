import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Customer, Transaction } from '../customer/Customer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  myFormGroup: FormGroup;
  loading:boolean;
  customer:Customer;
  transactions:Transaction[];

  ngOnInit() {
  }

  constructor(fb: FormBuilder, private customerService:CustomerService) {
    this.myFormGroup = fb.group({ "customerID": ['12345', Validators.required], "month": ['05', Validators.required], "year": ['2018', Validators.required] });
  }

  submitForm(f: FormGroup) {
    console.log("submitting" + JSON.stringify(f.value));
    this.customerService.getCustomer(f.value['customerID'],f.value['year']+'-'+f.value['month']).subscribe(
      resp => { this.customer = resp as Customer; this.transactions = this.customer.transactions; console.log(JSON.stringify(resp)); this.loading = false;},
      error => { console.log("error");  this.loading = false; },
      () => { console.log("complete"); this.loading = false; });
  
  }

}
