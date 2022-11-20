import { Component } from '@angular/core';
import { BaseControl } from './dynamic-form/types/dynamic-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'dynamic-form';
  controls: BaseControl[] = [
    { controlName: 'name', label: 'Имя*', component: 'input' },
  ];
}
