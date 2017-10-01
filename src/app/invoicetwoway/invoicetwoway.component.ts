import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoicetwoway',
  templateUrl: './invoicetwoway.component.html',
  styleUrls: ['./invoicetwoway.component.css']
})
export class InvoicetwowayComponent implements OnInit {
  itemPrice:string="23";
  constructor() { }

  ngOnInit() {
  }

}
