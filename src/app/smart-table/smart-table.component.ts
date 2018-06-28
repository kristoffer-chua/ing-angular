import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css']
})
export class SmartTableComponent implements OnInit {
  @Input() transactions;

  settings = {
    filter:false,
    actions: {add: false, edit: false, delete: false},
    columns: {
      transactionID: {
        title: 'Transaction ID'
      },
      transactionDate: {
        title: 'Transaction Date'
      },
      transactionAmount: {
        title: 'Transaction Amount'
      },
      transactionType: {
        title: 'Transaction Type'
      }
    }
  };
/*
  data = [
    {
      transactionID: 1,
      transactionDate: "2017-02-11",
      transactionAmount: 100.32,
      transactionType: "Deposit"
    },
    {
      transactionID: 2,
      transactionDate: "2017-12-11",
      transactionAmount: 302.32,
      transactionType: "Withdrawal"
    },
    
  ];
*/
  data = this.transactions;
  constructor() { }

  ngOnInit() {
  }

}
