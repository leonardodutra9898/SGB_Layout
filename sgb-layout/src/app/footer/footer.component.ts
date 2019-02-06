import { Component, OnInit } from '@angular/core';


const SITE_UFC = 'http://crateus.ufc.br';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  
  siteUfc = SITE_UFC;

  constructor() {
    
   }

  ngOnInit() {
  }

}
