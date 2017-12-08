import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { TrailConditionsRoutingModule } from './trail-conditions-routing.module';
import { TrailConditionsContainerComponent } from './trail-conditions-container/trail-conditions-container.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    TrailConditionsRoutingModule
  ],
  declarations: [
    TrailConditionsContainerComponent
  ]
})
export class TrailConditionsModule { }
