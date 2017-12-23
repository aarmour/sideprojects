import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../components';

import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { AppToolbarContainerComponent } from './app-toolbar/app-toolbar-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    AppToolbarComponent,
    AppToolbarContainerComponent
  ],
  declarations: [
    AppToolbarComponent,
    AppToolbarContainerComponent
  ]
})
export class NavigationModule { }
