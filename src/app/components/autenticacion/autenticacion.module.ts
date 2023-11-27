import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacionComponent } from './autenticacion.component';
import {RouterOutlet} from "@angular/router";
import {autenticacionRoutingModule} from "./autenticacion-routing.module";
import {IniciarSesionComponent} from "./iniciar-sesion/iniciar-sesion.component";
import {RegistrarseComponent} from "./registrarse/registrarse.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
      AutenticacionComponent,
      IniciarSesionComponent,
      RegistrarseComponent
  ],
    imports: [
        CommonModule,
        RouterOutlet,
        autenticacionRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class AutenticacionModule { }
