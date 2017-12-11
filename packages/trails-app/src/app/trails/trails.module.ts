import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import {
  TrailsEffects,
  initialState,
  reducer
} from './state';
import { TrailListService } from './trail-list.service';

@NgModule({
  imports: [
    StoreModule.forFeature('trails', reducer, { initialState }),
    EffectsModule.forFeature([TrailsEffects])
  ],
  declarations: [],
  providers: [
    TrailListService
  ]
})
export class RootTrailsModule { }

@NgModule({
  imports: [
    CommonModule
  ]
})
export class TrailsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootTrailsModule
    };
  }
}
