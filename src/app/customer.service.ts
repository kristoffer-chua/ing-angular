import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomer(customerID: string, yearMonth: string): Observable<Object> {
    return this.http.get("http://localhost:8080/customer/" + customerID + "/" + yearMonth);
  }
}
