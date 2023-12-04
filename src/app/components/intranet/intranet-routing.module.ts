import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {IntranetComponent} from "./intranet.component";
import {PruebaComponent} from "./prueba/prueba.component";
import {Prueba2Component} from "./prueba2/prueba2.component";
import {TitulosComponent} from "./titulos/titulos.component";

const routes: Routes = [
  { path: '',
    component: IntranetComponent,
    children: [
      {path: 'index', component: IndexComponent },
      {path: 'prueba', component: PruebaComponent},
      {path: 'prueba2', component: Prueba2Component},
      {path: 'titulos', component: TitulosComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class intranetRoutingModule { }
