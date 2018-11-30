import { Component, OnInit } from '@angular/core';
import {NamesService} from '../names.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-names-view',
  templateUrl: './names-view.component.html',
  styleUrls: ['./names-view.component.css']
})
export class NamesViewComponent implements OnInit {
  namesobj = null ;
  fullname:string;
  age:number;
  posts:any;
  constructor(private http:HttpClient) {
    this.posts=http.get('https://jsonplaceholder.typicode.com/posts');
  //   console.log(this.http.getNames());
  // this.http.getNames().subscribe(data => this.namesobj=data);
}

  ngOnInit() {

    // this.fullname = this.namesobj.nmale[0]+this.namesobj.nmale[1]+this.namesobj.surnames[0];
  }

}
