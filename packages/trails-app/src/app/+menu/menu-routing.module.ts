import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuContainerComponent } from './menu-container/menu-container.component';

const routes: Routes = [
  {
    path: '',
    component: MenuContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
