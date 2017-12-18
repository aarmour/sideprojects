import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SearchEffects, initialState, reducer } from './state';
import { AlgoliaIconComponent } from './algolia-icon/algolia-icon.component';
import { AlgoliaService } from './algolia.service';

@NgModule({
  imports: [
    StoreModule.forFeature('search', reducer, { initialState }),
    EffectsModule.forFeature([SearchEffects])
  ],
  providers: [
    AlgoliaService
  ]
})
export class RootAlgoliaModule { }

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AlgoliaIconComponent
  ],
  declarations: [
    AlgoliaIconComponent
  ],
  providers: [
    AlgoliaService
  ]
})
export class AlgoliaModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAlgoliaModule
    };
  }
}
