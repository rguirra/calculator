import { Component, Input } from '@angular/core';

@Component({
  selector: 'calculadora-dumb',
  templateUrl: './calculadora-dumb.component.html',
  styleUrls: ['./calculadora-dumb.component.scss']
})
export class CalculadoraDumbComponent {
  @Input() resultado: number | undefined;

  constructor() { }
}
