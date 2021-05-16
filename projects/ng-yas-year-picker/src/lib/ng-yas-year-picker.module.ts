import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgYasYearPickerComponent } from './ng-yas-year-picker.component';

@NgModule({
  declarations: [NgYasYearPickerComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  exports: [NgYasYearPickerComponent]
})
export class NgYasYearPickerModule { }
