import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginContainerGuard } from './login-container/login-container.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginContainerComponent,
    canActivate: [LoginContainerGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
