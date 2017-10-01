import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datalistshow',
  templateUrl: './datalistshow.component.html',
  styleUrls: ['./datalistshow.component.css']
})
export class DatalistshowComponent implements OnInit {
addresses:string[]=["Chopda","Pune"];
  constructor() { }

  ngOnInit() {
  }

}
