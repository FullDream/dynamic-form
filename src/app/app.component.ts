import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseControl } from './dynamic-form/types/dynamic-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'dynamic-form';
  value!: any;

  controls: BaseControl[] = [
    {
      controlName: 'name',
      label: 'Имя*',
      component: 'input',
      validators: [Validators.required],
    },
  ];
}
