import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RenderElementsDirective } from './render-elements.directive';

@NgModule({
  declarations: [DynamicFormComponent, RenderElementsDirective],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule {}
