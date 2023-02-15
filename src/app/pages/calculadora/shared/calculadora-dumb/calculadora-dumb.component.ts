import { Component, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'calculadora-dumb',
  templateUrl: './calculadora-dumb.component.html',
})
export class CalculadoraDumbComponent {
  @Input() calculadora: any;
  @Input() operacoes: any;
  @Input() temperatura: any;

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      tipoCalculadora: [null, Validators.required],
      operacao: [null, Validators.required],
      num1: [null, [Validators.required, Validators.max(100)]],
      num2: [null, [Validators.required, Validators.max(100)]],
      tipoConversao: [null, Validators.required],
      tipoConversaoPara: [null, Validators.required],
      valor: [null, Validators.required],
    });
   };

   clearAll() {
    this.form.updateValueAndValidity;
  };
}
