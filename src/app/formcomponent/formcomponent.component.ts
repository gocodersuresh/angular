import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'form-sel',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})

export class FormcomponentComponent implements OnInit {
  ngOnInit() {
    console.log('hit');
  }

  constructor() { 
   }
      regUser(e) {
        e.preventDefault();
        console.log(e);
        var dishName = e.target.elements[0].value;
        var quantity = e.target.elements[1].value;        
        if(dishName == 'admin' && quantity == 'admin') {
          console.log(dishName);
          alert(dishName+" and quantty"+quantity);
         // this.user.setUserLoggedIn();
          //this.router.navigate(['dashboard']);
        }
    } 
 }
