import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DropdownComponent } from './common/components/dropdown';
import { InputNumberComponent } from './common/components/input-number';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { CheckboxComponent } from './common/components/checkbox/checkbox.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forChild([]),
    DynamicFormModule,
    BrowserAnimationsModule,
    FormsModule,
    DropdownComponent,
    CheckboxComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
