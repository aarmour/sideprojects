import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminContainerComponent } from './admin-container/admin-container.component';
import { CreateTrailContainerComponent } from './create-trail-container/create-trail-container.component';

const routes: Routes = [
  {
    path: '',
    component: AdminContainerComponent,
    children: [
      {
        path: 'trails/create',
        component: CreateTrailContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
