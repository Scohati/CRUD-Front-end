import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { __values } from 'tslib';
import { ConfigService } from '../../config.service';



@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  usuarioForm = this.fb.group({
    nome: [''],
    email: [''],
    senha: [''],
  })
  usuario: any;

  updateUser() {
    this.usuarioForm.patchValue({
      nome: "",
      email: "",
      senha: ""
    })
  }

  onSubmit() {
    console.warn(this.usuarioForm.value);
  }

  puxa(){
    this.configService.requestTest().subscribe(response => {
      console.log(response);
    })
  }

  inserir() {
    this.configService.postTest().subscribe(result => {console.log(result)})
  }

  constructor(private configService:ConfigService, private fb: FormBuilder) {
    console.log('Olá')
    }


  ngOnInit(): void {
  }

}
