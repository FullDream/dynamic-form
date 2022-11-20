import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forChild([]), DynamicFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
