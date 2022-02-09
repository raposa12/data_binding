import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/sports/Dummy-Text';

  //criou uma variavel string vazia que sera chamado abaixo
  //com um clique ele prenche esse campo
  valorAtual: string = ''; 
  valorSalvo = '';//criou essa string para salvar o texto digitado no campo input

  isMouseOuver: boolean = false;//quando passar em cima do texto Passe o mouse sobre mim

  //variavel criada com valor atribuida para ser imprimida na tela 
  //e ser c chamada
  nomeDoCurso: string = 'Angular';

  //valorInicial = 15;

  nome: string = "";//deve ser do output/input

  /*pessoa: any = {
    nome: 'def',
    idade: 20
  }*/

  getValor(){
    return 1;
  }
    getCurtirCurso(){
      return true;

  }
  botaoClicado(){//isso é um get: quando clicar no botao ele mostra essa msg Botão clicado!
    alert('Botão clicado!');
  }

  //quando digitar no campo input ele mostra as letras digitadas na propia pagina 
  //sem ser no consol
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onKeyOp(disparo: KeyboardEvent){
    this.nome = (<HTMLInputElement>disparo.target).value;
  }

  //apos os digitos ele salva essa letras 
  salvarValor(valor: any){
    this.valorSalvo = valor;
  }


  //quando passar em cima da letra Passe o mouse sobre mim ele fica amarelo e depos some
  //quando passar de novo
  onMouseOver(){
    this.isMouseOuver = !this.isMouseOuver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
