import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LandingComponent} from "./landing.component";

const routes: Routes = [
  { path: '',
    component: LandingComponent,
    children: [
      {path: '', component: HomeComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class landingRoutingModule { }
