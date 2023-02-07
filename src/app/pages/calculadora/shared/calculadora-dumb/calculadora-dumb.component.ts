import { Component, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'calculadora-dumb',
  templateUrl: './calculadora-dumb.component.html',
})
export class CalculadoraDumbComponent {
  @Input() calculadora = [];
  @Input() operacoes = [];
  @Input() temperatura = [];
  @Input() resultado!: number;

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      operacao: [null, Validators.required],
      num1: [null, [Validators.required, Validators.max(100)]],
      num2: [null, [Validators.required, Validators.max(100)]],
      selectFrom: [null, Validators.required],
      selectTo: [null, Validators.required],
    })
   }
}
