import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {IndexComponent} from "./index/index.component";
import {RouterModule} from "@angular/router";
import {LayoutModule} from "../layout/layout.module";
import {intranetRoutingModule} from "./intranet-routing.module";
import {PruebaComponent} from "./prueba/prueba.component";
import {IntranetComponent} from "./intranet.component";
import {MatTableModule} from "@angular/material/table";
import { Prueba2Component } from './prueba2/prueba2.component';
import {FormsModule} from "@angular/forms";
import { TitulosComponent } from './titulos/titulos.component';


@NgModule({
  declarations: [
    IndexComponent,
    PruebaComponent,
    IntranetComponent,
    Prueba2Component,
    TitulosComponent,
  ],
    imports: [
        CommonModule,
        intranetRoutingModule,
        RouterModule,
        LayoutModule,
        NgOptimizedImage,
        CommonModule,
        MatTableModule,
        FormsModule,
    ]
})
export class IntranetModule { }
