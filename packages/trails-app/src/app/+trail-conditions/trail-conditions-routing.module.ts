import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrailConditionsContainerComponent } from './trail-conditions-container/trail-conditions-container.component';

const routes: Routes = [
  {
    path: '',
    component: TrailConditionsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrailConditionsRoutingModule { }
