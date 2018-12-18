import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.css','./first-view.component.responsive.css']
})
export class FirstViewComponent implements OnInit {
  boolvar:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  public Generate(){
  this.boolvar = false;


}


}
