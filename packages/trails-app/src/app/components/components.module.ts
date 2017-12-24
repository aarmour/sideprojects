import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarComponent, AvatarDirective } from './avatar/avatar';
import { BadgeComponent } from './badge/badge.component';
import { MtbProjectIconComponent } from './mtb-project-icon/mtb-project-icon.component';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

const matModules = [
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatTooltipModule
];

@NgModule({
  imports: [
    CommonModule,
    ...matModules
  ],
  declarations: [
    AvatarComponent,
    AvatarDirective,
    BadgeComponent,
    MtbProjectIconComponent
  ],
  exports: [
    ...matModules,
    AvatarComponent,
    AvatarDirective,
    BadgeComponent,
    MtbProjectIconComponent
  ]
})
export class ComponentsModule { }
