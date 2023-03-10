import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.page.html',
  styleUrls: ['./form2.page.scss'],
})
export class Form2Page{

  public segment = '0';

  public pessoa = {
    nome : '',
    sexo : 'M',
    data: new Date(),
    rg : '',
    cpf : ''
  };

  change(){
    console.log(this.segment)
  }

}
