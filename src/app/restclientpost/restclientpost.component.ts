import { Component, OnInit } from '@angular/core';
import {HttpserviceService} from './httpservice.service';
//import { httpserviceservice } from './httpservice.service';//'./httpservice.service';''
import { Book } from './book';

@Component({
  selector: 'app-restclientpost',
  templateUrl: './restclientpost.component.html',
  styleUrls: ['./restclientpost.component.css']
})
export class RestclientpostComponent implements OnInit {
  books: Book[];
  errorMessage: String;
  bookName: String;
  patient = new Book();    
  constructor(private httpService:HttpserviceService) 
  {

   }
   fetchBooks(): void {
    this.httpService.getBooksWithPromise()
      .then( books => this.books = books,
             error =>  this.errorMessage = <any>error);   
}
   addBook(): void {
    this.httpService.addBookWithPromise(this.patient)
      .then( patient => {
          this.fetchBooks();		
                             this.reset();   
                     this.bookName = patient.name;					 
       },
                   error => this.errorMessage = <any>error);
  }   
  private reset() {
          this.patient.id = null;	 
    this.patient.name = null;
    this.errorMessage = null;
    this.bookName = null;
  }   
  ngOnInit() {
  }

}
