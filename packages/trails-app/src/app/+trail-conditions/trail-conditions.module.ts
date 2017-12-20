import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlgoliaModule } from '../algolia';
import { ComponentsModule } from '../components';
import { TrailsModule } from '../trails';

import { TrailConditionsRoutingModule } from './trail-conditions-routing.module';
import { TrailConditionsContainerComponent } from './trail-conditions-container/trail-conditions-container.component';
import { TrailConditionTextComponent } from './trail-condition-text/trail-condition-text.component';
import { TrailConditionsEditContainerComponent } from './trail-conditions-edit-container/trail-conditions-edit-container.component';
import { TrailConditionsDetailContainerComponent } from './trail-conditions-detail-container/trail-conditions-detail-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    AlgoliaModule,
    TrailsModule,
    TrailConditionsRoutingModule
  ],
  declarations: [
    TrailConditionsContainerComponent,
    TrailConditionTextComponent,
    TrailConditionsEditContainerComponent,
    TrailConditionsDetailContainerComponent
  ]
})
export class TrailConditionsModule { }
