import { Component, OnInit } from '@angular/core';

declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  ngOnInit(){
    // modelo do jquery
    $('button').click(function() {
      alert("afdadfasdfa");
    });
  }
  
  title = 'sgb-layout';
}
