import { ChangeDetectionStrategy, Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'calculadora-render',
  templateUrl: './calculadora-render.component.html',
  styleUrls: ['./calculadora-render.component.scss'],
  providers: [FormBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush
})

@Injectable({
  providedIn: 'root',
})
export class CalculadoraRenderComponent {

  form: FormGroup;
  resultado = 0;
  selectFrom = 1;
  selectTo = 3;
  valor = 0;
  operacoes = [
    {
      id: 1,
      nome: 'Soma',
    },
    {
      id: 2,
      nome: 'Subtração',
    },
    {
      id: 3,
      nome: 'Multiplicação',
    },
    {
      id: 4,
      nome: 'Divisão',
    },
  ];

  temperatura = [
    {
      id: 1,
      nome: 'Celsius',
    },
    {
      id: 2,
      nome: 'Fahrenheit',
    },
    {
      id: 3,
      nome: 'Kelvin',
    },
  ];

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      operacao: [null, Validators.required],
      num1: [null, [Validators.required, Validators.max(100)]],
      num2: [null, [Validators.required, Validators.max(100)]],
      selectFrom: [null, Validators.required],
      selectTo: [null, Validators.required],
    });
  }

  calcular() {
    const num1 = this.form.get('num1')?.value;
    const num2 = this.form.get('num2')?.value;
    const operacao = this.form.get('operacao')?.value;

    switch (operacao) {
      case 1:
        this.resultado = num1 + num2;
        break;
      case 2:
        this.resultado = num1 - num2;
        break;
      case 3:
        this.resultado = num1 * num2;
        break;
      case 4:
        this.resultado = num1 / num2;
        break;
      default:
        break;
    }
  }

  converterTemperatura() {
    if (this.selectFrom === 1 && this.selectTo === 2) {
      this.resultado = (this.valor * 9/5) + 32;
    } else if (this.selectFrom === 1 && this.selectTo === 3) {
      this.resultado = this.valor + 273.15;
    } else if (this.selectFrom === 2 && this.selectTo === 1) {
      this.resultado = (this.valor - 32) * 5/9;
    } else if (this.selectFrom === 2 && this.selectTo === 3) {
      this.resultado = (this.valor - 32) * 5/9 + 273.15;
    } else if (this.selectFrom === 3 && this.selectTo === 1) {
      this.resultado = this.valor - 273.15;
    } else if (this.selectFrom === 3 && this.selectTo === 2) {
      this.resultado = (this.valor - 273.15) * 9/5 + 32;
    }
  }

  clearAll() {
    this.form.setValue(['']);
  }

}