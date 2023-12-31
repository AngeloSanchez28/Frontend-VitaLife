import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./components/landing/landing.module'). then((it) => it.LandingModule)},
  {path: 'autenticacion', loadChildren: () => import('./components/autenticacion/autenticacion.module'). then ((it) => it.AutenticacionModule)},
  {path: 'intranet', loadChildren: () => import('./components/intranet/intranet.module'). then ((it) => it.IntranetModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
