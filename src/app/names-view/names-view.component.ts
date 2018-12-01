import { Component, OnInit } from '@angular/core';
import {NamesService} from '../names.service';
import { Observable } from "rxjs/";
@Component({
  selector: 'app-names-view',
  templateUrl: './names-view.component.html',
  styleUrls: ['./names-view.component.css']
})
export class NamesViewComponent implements OnInit {
  namesobj = null ;
  fullname:string;
  age:any;
  gender:string;
  constructor(private namess:NamesService) {
    namess.getNames().subscribe((data)=>
       {
         this.namesobj = data;
         this.fullname =  this.namesobj.randmalename[0]+" "+
                          this.namesobj.randmalename[1]+" "+
                          this.namesobj.randsurname[0] ;
        // this.age = parseInt(Math.random()*80);
        this.gender =
        "ذكر"
        ;


    });
  //   console.log(this.http.getNames());
  // this.http.getNames().subscribe(data => this.namesobj=data);
}

  ngOnInit() {
    // this.fullname = this.namesobj.nmale[0]+this.namesobj.nmale[1]+this.namesobj.surnames[0];


  }

}
