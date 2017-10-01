import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CourseComponent } from './course/course.component';
import { DatalistshowComponent } from './datalistshow/datalistshow.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { InvoicetwowayComponent } from './invoicetwoway/invoicetwoway.component';
import { RestclientpostComponent } from './restclientpost/restclientpost.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';//in memory for rest post
import { BookData } from './restclientpost/book-data';//in memory for rest post
import {HttpserviceService} from './restclientpost/httpservice.service';//in memory for rest post
const appRoutes: Routes = [
  { path: 'course', component: CourseComponent },
  { path: 'datalist', component: DatalistshowComponent },
  { path: 'form', component: FormcomponentComponent },
  { path: 'invoice', component: InvoicetwowayComponent },
  { path: 'restclient', component: RestclientpostComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    DatalistshowComponent,
    FormcomponentComponent,
    InvoicetwowayComponent,
    RestclientpostComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(BookData),//for rest post example
    RouterModule.forRoot(appRoutes)],
    
  exports:[RouterModule],
  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
