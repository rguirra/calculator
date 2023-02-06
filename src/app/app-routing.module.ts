import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalculadoraRenderComponent } from './pages/calculadora/calculadora-render/calculadora-render.component';

const routes: Routes = [
  {
    path: '',
    component: CalculadoraRenderComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
