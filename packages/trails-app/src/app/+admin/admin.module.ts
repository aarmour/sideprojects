import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';

import { ComponentsModule } from '../components';
import { AdminRoutingModule } from './admin-routing.module';
import { TrailsEffects } from './state';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { CreateTrailContainerComponent } from './create-trail-container/create-trail-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    AdminRoutingModule,
    EffectsModule.forFeature([TrailsEffects])
  ],
  declarations: [
    AdminContainerComponent,
    CreateTrailContainerComponent
  ]
})
export class AdminModule { }
