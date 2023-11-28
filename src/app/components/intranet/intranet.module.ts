import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {IndexComponent} from "./index/index.component";
import {RouterModule} from "@angular/router";
import {LayoutModule} from "../layout/layout.module";
import {intranetRoutingModule} from "./intranet-routing.module";
import {PruebaComponent} from "./prueba/prueba.component";
import {IntranetComponent} from "./intranet.component";
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    IndexComponent,
    PruebaComponent,
    IntranetComponent,
  ],
  imports: [
    CommonModule,
    intranetRoutingModule,
    RouterModule,
    LayoutModule,
    NgOptimizedImage,
    CommonModule,
    MatTableModule,
  ]
})
export class IntranetModule { }
