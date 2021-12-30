import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

import {} from "../cadastrar/cadastrar.component"

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent{

  nome = new FormControl('');
  email = new FormControl('');
  senha = new FormControl('');

}
