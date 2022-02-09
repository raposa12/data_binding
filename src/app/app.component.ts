import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  //pra aparecer o valor de 5 na tela valor
  valor: number = 5;

  //aqui ele diz por enquato não destroy os components
  deletarCiclo: boolean = false;

  //quando clicar no botao mudar valor ele acrescenta components
  mudarValor(){
    this.valor++
  }

  //quando clicar no botao deletar ele deleta co components
  destruirCiclo(){
    this.deletarCiclo = true;
  }

}
