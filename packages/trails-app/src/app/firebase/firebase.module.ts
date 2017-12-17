import { ModuleWithProviders, NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FirebaseListRegistry } from './firebase-list-registry.service';
import { FirebaseEffects } from './state';

@NgModule({
  imports: [
    EffectsModule.forFeature([FirebaseEffects])
  ],
  providers: [
    FirebaseListRegistry
  ]
})
export class RootFirebaseModule { }

@NgModule({ })
export class FirebaseModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootFirebaseModule
    };
  }
}
