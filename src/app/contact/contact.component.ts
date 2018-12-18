import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  copied:boolean =false;
  constructor() { }

  ngOnInit() {
  }
  copyfun(){
          let from = document.getElementById("myinput");
          let range = document.createRange();
          window.getSelection().removeAllRanges();
          range.selectNode(from);
          window.getSelection().addRange(range);
          document.execCommand('copy');
          window.getSelection().removeAllRanges();
          this.copied = true;
    setTimeout(()=>{this.copied=false;},4100);
  }

}
