import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CalculadoraRenderComponent } from './calculadora-render/calculadora-render.component';
import { CalculadoraDumbComponent } from './shared/calculadora-dumb/calculadora-dumb.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [
    CalculadoraRenderComponent,
    CalculadoraDumbComponent
  ]
})
export class CalculadoraModule { }
