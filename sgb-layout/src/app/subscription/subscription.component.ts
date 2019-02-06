import { Component, OnInit } from '@angular/core';

export interface Step {
  step : string;
  subStep: string;
}

const STEPS : Step[]  = [
  {step : 'publicacao', subStep: 'editais'},
  {step : 'publicacao', subStep: 'aditivos'},
  {step : 'publicacao', subStep: 'resultados'},
  {step : 'publicacao', subStep: 'informativos'}
];

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
