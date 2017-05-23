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
      ])],
      cnpj: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.required,
        MagicValidator.EmailValidator
      ])],
      telefone: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.required
      ])],
       maiorIdade: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.required,
        MagicValidator.MaiorDeIdade
      ])],
    });

  }

  ngOnInit() {
  }

}
