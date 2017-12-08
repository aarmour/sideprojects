import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'trail-conditions',
    loadChildren: './+trail-conditions/trail-conditions.module#TrailConditionsModule'
  },
  {
    path: '',
    redirectTo: '/trail-conditions',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
