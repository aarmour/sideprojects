import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule
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
  MatToolbarModule,
  MatTooltipModule
];

@NgModule({
  imports: [
    CommonModule,
    ...matModules
  ],
  declarations: [
    BadgeComponent,
    MtbProjectIconComponent
  ],
  exports: [
    ...matModules,
    BadgeComponent,
    MtbProjectIconComponent
  ]
})
export class ComponentsModule { }
