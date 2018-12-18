import { Component, OnInit } from '@angular/core';
import {NamesService} from '../names.service';
import { Observable } from "rxjs/";
import {names} from '../names.interface';
@Component({
  selector: 'app-names-view',
  templateUrl: './names-view.component.html',
  styleUrls: ['./names-view.component.css','./loading.css','./names-view.component.responsive.css']
})
export class NamesViewComponent implements OnInit {
  namesobj:names ;
  fullname:string;
  isMale:boolean;
  age:number;
  counter:number =0;
  toomuchclicks:boolean= true;
  finishloading:boolean = false;
  namess:NamesService = null;
  constructor(private namessz:NamesService) {
  this.namess = namessz;
  this.generateNewColl();
  //   console.log(this.http.getNames());
  // this.http.getNames().subscribe(data => this.namesobj=data);
}

  ngOnInit() {
    // this.fullname = this.namesobj.nmale[0]+this.namesobj.nmale[1]+this.namesobj.surnames[0];


  }

  generateNewColl(){
    this.finishloading=false;
    this.namess.getNames().subscribe((data)=>
       {
         this.namesobj = data;
         this.fullname =  this.namesobj.randmalename[0]+" "+
                          this.namesobj.randmalename[1]+" "+
                          this.namesobj.randsurname[0] ;
        this.age = Math.floor(Math.random()*80);
        this.isMale = true;
        this.finishloading=true;


    });
    this.counter=0;
    this.toomuchclicks= this.toomuchclicks ? false :true;
  }
  random(){
    this.age = Math.ceil(Math.random()*80);
    if(Math.random()>=0.49) {
      this.isMale = true  ;
      let xxx=Math.floor(Math.random()*3)
      let yyy= (1<=xxx)? xxx-1 : 1 ;
      this.fullname =  this.namesobj.randmalename[xxx]+" "+
                       this.namesobj.randmalename[yyy]+" "+
                       this.namesobj.randsurname[Math.floor(Math.random()*3)] ;
    } else {
      this.isMale = false  ;

      this.fullname =  this.namesobj.randfmalename[Math.floor(Math.random()*3)]+" "+
                       this.namesobj.randmalename[Math.floor(Math.random()*3)]+" "+
                       this.namesobj.randsurname[Math.floor(Math.random()*3)] ;


    }
    this.counter++;
    if(this.counter >=12) this.toomuchclicks =true;
  }

}
