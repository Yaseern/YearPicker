import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgYasYearPickerModule } from 'projects/ng-yas-year-picker/src/lib/ng-yas-year-picker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgYasYearPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
