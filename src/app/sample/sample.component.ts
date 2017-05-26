import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MagicValidator } from '../validator/MagicValidator';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  sampleForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.sampleForm = fb.group({
      name: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.required,
        MagicValidator.NomeValidator
      ])],
      cpf: ['', Validators.compose([
        Validators.required,
        MagicValidator.validators.cpf.ValidaCPF
      ])],
      cnpj: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.required,
        MagicValidator.validators.cnpj.ValidaCNPJ
      ])],
      email: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.required,
        MagicValidator.validators.email.EmailValidator
      ])],
      telefone: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.required,
        MagicValidator.validators.telefone.TelefoneValidator
      ])],
       maiorIdade: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.required,
        MagicValidator.validators.date.MaiorDeIdade
      ])],
    });

  }

  ngOnInit() {
  }

}
