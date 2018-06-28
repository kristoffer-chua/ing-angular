import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Customer, Transaction } from '../customer/Customer';
import { DatePipe } from '@angular/common'

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

  constructor(fb: FormBuilder, private customerService:CustomerService, private datepipe: DatePipe) {
    this.myFormGroup = fb.group({ "customerID": ['12345', Validators.required], 
    "myDateYM": [new Date(), Validators.required] });
  }

  submitForm(f: FormGroup) {
    console.log("submitting" + JSON.stringify(f.value));
    let date = new Date(f.value['myDateYM']);
      
    this.customerService.getCustomer(f.value['customerID'], this.datepipe.transform(date,'yyyy-MM')).subscribe(
      resp => { this.customer = resp as Customer; this.transactions = this.customer.transactions; console.log(JSON.stringify(resp)); this.loading = false;},
      error => { console.log("error");  this.loading = false; },
      () => { console.log("complete"); this.loading = false; });
  
  }

}
