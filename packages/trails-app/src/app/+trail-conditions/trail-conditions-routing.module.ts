import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrailConditionsContainerComponent } from './trail-conditions-container/trail-conditions-container.component';
import { TrailConditionsListContainerComponent } from './trail-conditions-list-container/trail-conditions-list-container.component';
import { TrailConditionsDetailContainerComponent } from './trail-conditions-detail-container/trail-conditions-detail-container.component';
import { TrailConditionsEditContainerComponent } from './trail-conditions-edit-container/trail-conditions-edit-container.component';

const routes: Routes = [
  {
    path: '',
    component: TrailConditionsContainerComponent,
    children: [
      {
        path: '',
        component: TrailConditionsListContainerComponent
      },
      {
        path: ':slug',
        component: TrailConditionsDetailContainerComponent
      }
    ]
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
