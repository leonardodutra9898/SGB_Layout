import { Component } from '@angular/core';

declare var $:any;

export interface Step {
  step : string;
  subStep: string;
  status: boolean;
}

const STEPS : Step[]  = [
  {step : 'publicacao', subStep: 'editais', status: true},
  {step : 'publicacao', subStep: 'aditivos', status: true},
  {step : 'publicacao', subStep: 'resultados', status: true},
  {step : 'publicacao', subStep: 'informativos', status: true},
  {step : 'inscricao', subStep: 'dadosPessoais', status: false},
  {step : 'inscricao', subStep: 'contatosEndereco', status: false},
  {step : 'inscricao', subStep: 'documentacao', status: false}
];

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent {
  
  title : string = "Leo";

  constructor() { }

  ngOnInit() {  
}

  public toggleTitle(){
    console.log("Novo teste");
    $('.title').slideToggle();
  }

}