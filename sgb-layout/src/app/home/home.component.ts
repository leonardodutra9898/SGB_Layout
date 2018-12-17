import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  edital: string;
}

export interface PeriodicElement2 {
  name: string;
  situacao: string;
  etapa: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Auxílio Emergencial', edital: 'Edital nº 001/2018'},
  {name: 'Auxílio Moradia', edital: 'Edital nº 025/2018'},
  {name: 'Auxílio Creche', edital: 'Edital nº 08/2018'},
  {name: 'Auxílio 1', edital: 'Edital nº 09/2018'},
  {name: 'Auxílio 2', edital: 'Edital nº 010/2018'}
];

const ELEMENT_DATA2: PeriodicElement2[] = [
  {name: 'Auxílio Emergencial', situacao: 'Inscrições Encerradas', etapa: 'Recursos'},
  {name: 'Auxílio Moradia', situacao: 'Em andamento', etapa: 'Entrevistas'},
  {name: 'Auxílio Creche', situacao: 'Em andamento', etapa: 'Entrevistas'},
  {name: 'Auxílio 1', situacao: 'Inscrições Abertas', etapa: 'Recebendo Inscrições'},
  {name: 'Auxílio 2', situacao: 'Inscrições Abertas', etapa: 'Recebendo Inscrições'}
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'edital'];
  dataSource = ELEMENT_DATA;

  displayedColumns2: string[] = ['name', 'situacao', 'etapa'];
  dataSource2 = ELEMENT_DATA2;

  constructor() { }

  ngOnInit() {
  }

}
