import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';

import { RouterEffects } from './state';

@NgModule({
  imports: [
    EffectsModule.forFeature([RouterEffects])
  ]
})
export class RootRouterModule { }

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class RouterModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootRouterModule
    };
  }
}
