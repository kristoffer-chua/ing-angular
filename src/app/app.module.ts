import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SmartTableComponent } from './smart-table/smart-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    SmartTableComponent,
    CustomerComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, Ng2SmartTableModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
