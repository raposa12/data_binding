import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  //importou o Input em cima e reutilizou a variavel nomeDoCurso e alterou 
  //alguma coisa para ser imprimido
  @Input('nome')nomeCurso: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
