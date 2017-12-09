import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialLoginButtonComponent } from './social-login-button/social-login-button.component';

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
  MatSnackBarModule
];

@NgModule({
  imports: [
    CommonModule,
    ...matModules
  ],
  declarations: [
    SocialLoginButtonComponent
  ],
  exports: [
    ...matModules,
    SocialLoginButtonComponent
  ]
})
export class ComponentsModule { }
