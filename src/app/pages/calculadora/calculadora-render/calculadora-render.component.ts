import {
  ChangeDetectionStrategy,
  Component,
  Output,
} from '@angular/core';

@Component({
  selector: 'calculadora-render',
  templateUrl: './calculadora-render.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculadoraRenderComponent {
  @Output() calculadora = [
    {
      id: 1,
      nome: 'Simples',
    },
    {
      id: 2,
      nome: 'Temperatura',
    },
  ];

  @Output() operacoes = [
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

  @Output() temperatura = [
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

  selectCalc = this.calculadora[0];
  operacao: any;
  selectFrom: any;
  selectTo: any;
  num1 = 0;
  num2 = 0;

  constructor() {}

  calcular() {
    let result;
    if (this.selectCalc.id === 1) {
      switch (this.operacao.id) {
        case 1:
          result = this.num1 + this.num2;
          break;
        case 2:
          result = this.num1 - this.num2;
          break;
        case 3:
          result = this.num1 * this.num2;
          break;
        case 4:
          result = this.num1 / this.num2;
          break;
        default:
          break;
      }
    } else {
      switch (this.selectFrom.id) {
        case 1:
          switch (this.selectTo.id) {
            case 2:
              result = (this.num1 * 9) / 5 + 32;
              break;
            case 3:
              result = this.num1 + 273.15;
              break;
          }
          break;
        case 2:
          switch (this.selectTo.id) {
            case 1:
              result = ((this.num1 - 32) * 5) / 9;
              break;
            case 3:
              result = ((this.num1 - 32) * 5) / 9 + 273.15;
              break;
          }
          break;
      }
    }
  }

  clearAll() {
    this.operacao = 0;
    this.num1 = 0;
    this.num2 = 0;
    this.selectFrom = 0;
    this.selectTo = 0;
  }
}
