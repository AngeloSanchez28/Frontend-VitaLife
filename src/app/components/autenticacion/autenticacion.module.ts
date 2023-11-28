import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {autenticacionRoutingModule} from "./autenticacion-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AutenticacionComponent} from "./autenticacion.component";
import {IniciarSesionComponent} from "./iniciar-sesion/iniciar-sesion.component";
import {RegistrarseComponent} from "./registrarse/registrarse.component";



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
