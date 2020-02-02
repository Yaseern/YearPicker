import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import { YearComponent } from './year.component';

@NgModule({
  declarations: [YearComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  bootstrap: [YearComponent]
})
export class YearModule {
}