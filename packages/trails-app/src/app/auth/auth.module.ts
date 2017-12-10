import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ComponentsModule } from '../components';

import { AuthEffects } from './auth.effects';
import { reducer } from './auth.reducers';
import { initialState } from './auth.init';
import { AuthGuard } from './auth.guard';
import { SocialLoginButtonComponent } from './social-login-button/social-login-button.component';

@NgModule({
  imports: [
    StoreModule.forFeature('auth', reducer, { initialState }),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: []
})
export class RootAuthModule { }

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    SocialLoginButtonComponent
  ],
  providers: [
    AuthGuard
  ],
  exports: [
    SocialLoginButtonComponent
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule
    };
  }
}
