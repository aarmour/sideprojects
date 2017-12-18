import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ComponentsModule } from '../components';

import {
  TrailsEffects,
  initialState,
  reducer
} from './state';
import { TrailListService } from './trail-list.service';
import { TrailsSearchInputComponent } from './trails-search-input/trails-search-input.component';
import { TrailsSearchInputContainerComponent } from './trails-search-input/trails-search-input-container.component';

@NgModule({
  imports: [
    StoreModule.forFeature('trails', reducer, { initialState }),
    EffectsModule.forFeature([TrailsEffects])
  ],
  providers: [
    TrailListService
  ]
})
export class RootTrailsModule { }

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  exports: [
    TrailsSearchInputContainerComponent
  ],
  declarations: [
    TrailsSearchInputComponent,
    TrailsSearchInputContainerComponent
  ]
})
export class TrailsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootTrailsModule
    };
  }
}
