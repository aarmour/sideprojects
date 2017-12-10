import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from '../auth';
import { ComponentsModule } from '../components/components.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginContainerGuard } from './login-container/login-container.guard';

@NgModule({
  imports: [
    AuthModule,
    CommonModule,
    ComponentsModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginContainerComponent
  ],
  providers: [
    LoginContainerGuard
  ]
})
export class LoginModule { }
