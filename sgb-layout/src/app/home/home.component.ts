import { Component, OnInit } from '@angular/core';



export interface Processos {
  edital: string;
  name: string;
  descricao:string;
  situacao: string;
  etapa: string;
}

const PROCESSOS: Processos[] = [
  {edital: 'Edital nº 001/2018', name: 'Auxílio Emergencial', descricao: 'Descrição 1', situacao: 'Inscrições Encerradas', etapa: 'Recursos'},
  {edital: 'Edital nº 025/2018', name: 'Auxílio Moradia', descricao: 'Descrição 2', situacao: 'Em andamento', etapa: 'Entrevistas'},
  {edital: 'Edital nº 08/2018', name: 'Auxílio Creche', descricao: 'Descrição 3', situacao: 'Em andamento', etapa: 'Entrevistas'},
  {edital: 'Edital nº 09/2018', name: 'Auxílio 1', descricao:'Descrição 4', situacao: 'Inscrições Abertas', etapa: 'Recebendo Inscrições'},
  {edital: 'Edital nº 010/2018', name: 'Auxílio 2', descricao: 'Descrição 5', situacao: 'Inscrições Abertas', etapa: 'Recebendo Inscrições'}
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns2: string[] = ['edital', 'name', 'descricao', 'situacao', 'etapa'];
  dadosProcessos = PROCESSOS;

  constructor() { }

  ngOnInit() {
  }

}
