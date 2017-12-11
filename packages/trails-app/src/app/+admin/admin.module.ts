import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';

import { AdminRoutingModule } from './admin-routing.module';
import { TrailsEffects } from './state';
import { AdminContainerComponent } from './admin-container/admin-container.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    EffectsModule.forFeature([TrailsEffects])
  ],
  declarations: [
    AdminContainerComponent
  ]
})
export class AdminModule { }
