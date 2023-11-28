import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {landingRoutingModule} from "./landing-routing.module";
import {HomeComponent} from "./home/home.component";
import {LandingFooterComponent} from "./shared/landing-footer/landing-footer.component";
import { LandingComponent } from './landing.component';


@NgModule({
  declarations: [
    HomeComponent,
    LandingFooterComponent,
    LandingComponent,
  ],
  exports:[
  ],
  imports: [
    CommonModule,
    landingRoutingModule,
    NgOptimizedImage,
  ],
})
export class LandingModule { }
