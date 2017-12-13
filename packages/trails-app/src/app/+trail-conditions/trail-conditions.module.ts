import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { TrailConditionsRoutingModule } from './trail-conditions-routing.module';
import { TrailConditionsContainerComponent } from './trail-conditions-container/trail-conditions-container.component';
import { TrailConditionTextComponent } from './trail-condition-text/trail-condition-text.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    TrailConditionsRoutingModule
  ],
  declarations: [
    TrailConditionsContainerComponent,
    TrailConditionTextComponent
  ]
})
export class TrailConditionsModule { }
