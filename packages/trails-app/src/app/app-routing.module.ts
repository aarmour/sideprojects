import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './+admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './+login/login.module#LoginModule'
  },
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
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }
