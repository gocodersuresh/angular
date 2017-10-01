import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-invoicetwoway',
  templateUrl: './invoicetwoway.component.html',
  styleUrls: ['./invoicetwoway.component.css']
})
export class InvoicetwowayComponent implements OnInit {
  itemPrice:string="23";
  jsonContent: any = null;
  url:string="";
  constructor(private _http: Http) {
    this.getEmpList();
  }

  ngOnInit() {
  }
private getEmpList()
{
  return this._http.get('https://jsonplaceholder.typicode.com/posts/1')
               .map((res: Response) => res.json())
              .subscribe(jsonContent => {
                        this.jsonContent = jsonContent;
                        console.log(this.jsonContent);
                });
}



}
