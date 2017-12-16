import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';

import { TrailConditionsRoutingModule } from './trail-conditions-routing.module';
import { TrailConditionsContainerComponent } from './trail-conditions-container/trail-conditions-container.component';
import { TrailConditionTextComponent } from './trail-condition-text/trail-condition-text.component';
import { TrailConditionsEditContainerComponent } from './trail-conditions-edit-container/trail-conditions-edit-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    TrailConditionsRoutingModule
  ],
  declarations: [
    TrailConditionsContainerComponent,
    TrailConditionTextComponent,
    TrailConditionsEditContainerComponent
  ]
})
export class TrailConditionsModule { }
