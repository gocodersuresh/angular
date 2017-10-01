import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Book } from './book';
//example followedhttp://www.concretepage.com/angular-2/angular-2-http-post-example

@Injectable()
export class HttpserviceService {
  url = "api/books";
  constructor(private http:Http) { }
  addBookWithPromise(book:Book): Promise<Book> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
          return this.http.post(this.url, book, options).toPromise()
               .then(this.extractData)
                     .catch(this.handleErrorPromise);
      }	
      private extractData(res: Response) {
        let body = res.json();
              return body.data || {};
          }
          private handleErrorPromise (error: Response | any) {
            console.error(error.message || error);
            return Promise.reject(error.message || error);
              }		
}
