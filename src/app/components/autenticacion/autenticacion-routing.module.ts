import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrarseComponent} from "./registrarse/registrarse.component";
import {IniciarSesionComponent} from "./iniciar-sesion/iniciar-sesion.component";
import {AutenticacionComponent} from "./autenticacion.component";

const routes: Routes = [
  { path: '',
    component: AutenticacionComponent,
    children: [
      {path: 'iniciar-sesion', component: IniciarSesionComponent},
      {path: 'registrarse', component: RegistrarseComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class autenticacionRoutingModule { }
