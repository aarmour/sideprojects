import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationModule } from '../navigation';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuContainerComponent } from './menu-container/menu-container.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    MenuRoutingModule
  ],
  declarations: [MenuContainerComponent]
})
export class MenuModule { }
