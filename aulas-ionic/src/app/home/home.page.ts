import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public nomeDaVariavel: any;

  public pessoa = {
    id: 1,
    nome: 'Joao',
    sobrenome: 'Milagres',
    gostoMusical: 'trap',
    idade: 21
  }

  public listaAlunos : any=[]

  constructor() {
    this.nomeDaVariavel = "objeto em ts";
    this.pessoa.gostoMusical = "rap";

    console.log(this.pessoa.gostoMusical)
  }

  public acrescentaIdade(){
    this.pessoa.idade += 1;

  }
  
  public diminuiIdade(){
    this.pessoa.idade -= 1;

  }

  public addAluno(nome: String, idade: number, gostoMusical: String){
    this.listaAlunos.push({
      nome: nome,
      idade: idade,
      gostoMusical: gostoMusical
    });

    this.printaListaAlunos();
  }

  public printaListaAlunos(){
    this.listaAlunos.forEach((element:any) => {
      console.log(element)
    });

  }


}
