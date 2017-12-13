import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtbProjectIconComponent } from './mtb-project-icon/mtb-project-icon.component';

import {
  MatAutocompleteModule,
  MatButtonModule,
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
  MatTooltipModule
} from '@angular/material';

const matModules = [
  MatAutocompleteModule,
  MatButtonModule,
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
  MatTooltipModule
];

@NgModule({
  imports: [
    CommonModule,
    ...matModules
  ],
  declarations: [
    MtbProjectIconComponent
  ],
  exports: [
    ...matModules,
    MtbProjectIconComponent
  ]
})
export class ComponentsModule { }
