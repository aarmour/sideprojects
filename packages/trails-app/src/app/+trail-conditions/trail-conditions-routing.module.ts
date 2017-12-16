import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrailConditionsContainerComponent } from './trail-conditions-container/trail-conditions-container.component';
import { TrailConditionsEditContainerComponent } from './trail-conditions-edit-container/trail-conditions-edit-container.component';

const routes: Routes = [
  {
    path: '',
    component: TrailConditionsContainerComponent
  },
  {
    path: ':slug/edit',
    component: TrailConditionsEditContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrailConditionsRoutingModule { }
