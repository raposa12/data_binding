import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  //dentro do contador ele vai começar com o numero 15
  valor: number = 15;
  /*@Output() mudouValor = new EventEmitter();*/
  /*@ViewChild('campoInput')
  campoValorInput: ElementRef;*/

  //o seu chamado pra clicar no botão de maais e aumentar()
  incrementa(){
    /*this.campoValorInpu.nativeElement.value++;*/
    this.valor++;
    /*this.mudouValor.emit({novoValor: this.valor});*/
  }

  //o seu chamado pra clicar no botao de menos e dimminiur()
  decrementa(){
    /*this.campoValorInpu.nativeElement.value--;*/
    this.valor--;
    /*this.mudouValor.emit({novoValor: this.valor});*/
  }

  /*onMudouValor(evento: any){
    console.log(evento.novoValor)
  }*/

  constructor() {}

  ngOnInit(): void {
  }

}
