import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CalculadoraRenderComponent } from './calculadora-render/calculadora-render.component';
import { CalculadoraDumbComponent } from './shared/calculadora-dumb/calculadora-dumb.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  declarations: [
    CalculadoraRenderComponent,
    CalculadoraDumbComponent
  ]
})
export class CalculadoraModule { }
