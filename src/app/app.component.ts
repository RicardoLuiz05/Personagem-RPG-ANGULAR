import { Component } from '@angular/core';
import { Personagem } from '../shared/model/personagem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'Ficha do personagem';
  personagem: Personagem;
  personagens: Array<Personagem>;

  constructor() {
    this.personagem = new Personagem();
    this.personagens = new Array<Personagem>();
  }

  inserirPersonagem(): void {
    this.personagens.push(this.personagem);
    this.personagem = new Personagem();
  }

  editarPersonagem(personagem : Personagem) : void {
    let index : number = this.personagens.findIndex(personagemRemover => personagemRemover.id == personagem.id);
    this.personagens[index] = this.personagem;
  }

  removerPersonagem(personagem : Personagem): void {
    let index : number = this.personagens.findIndex(personagemRemover => personagemRemover.id == personagem.id);
    this.personagens.splice(index, 1);
  }

}
