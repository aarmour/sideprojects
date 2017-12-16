import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconRegistry, MatNativeDateModule } from '@angular/material';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    MatNativeDateModule,
    ComponentsModule
  ],
  declarations: [],
  providers: [
    MatIconRegistry
  ]
})
export class CoreModule {

  constructor (
    @Optional() @SkipSelf() parentModule: CoreModule,
    public matIconRegistry: MatIconRegistry
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }

    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }

}
