import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterIntranetComponent } from './footer-intranet/footer-intranet.component';
import { NavbarIntranetComponent } from './navbar-intranet/navbar-intranet.component';



@NgModule({
  declarations: [
    FooterIntranetComponent,
    NavbarIntranetComponent
  ],
  exports:[
    FooterIntranetComponent,
    NavbarIntranetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
