import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {IntranetComponent} from "./intranet.component";
import {PruebaComponent} from "./prueba/prueba.component";


const routes: Routes = [
  { path: '',
    component: IntranetComponent,
    children: [
      {path: 'index', component: IndexComponent },
      {path: 'prueba', component: PruebaComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class intranetRoutingModule { }
