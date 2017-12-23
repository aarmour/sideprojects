import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../components';

import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    AppToolbarComponent,
  ],
  declarations: [
    AppToolbarComponent,
  ]
})
export class NavigationModule { }
