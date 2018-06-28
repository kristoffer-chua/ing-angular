export class Customer {
    customerID: string;
    yearMonth: string;
    classification: string;
    balance: number;
    transactions: Transaction[];
}

export class Transaction { 
    transactionID:string;
    transactionDate:string;
    transactionAmount:number;
    transactionType:string;

}