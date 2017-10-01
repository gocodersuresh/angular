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

const appRoutes: Routes = [
  { path: 'course', component: CourseComponent },
  { path: 'datalist', component: DatalistshowComponent },
  { path: 'form', component: FormcomponentComponent },
  { path: 'invoice', component: InvoicetwowayComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    DatalistshowComponent,
    FormcomponentComponent,
    InvoicetwowayComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
