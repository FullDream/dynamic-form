import { ValidatorFn } from '@angular/forms';
import { FormComponentsUnion } from './form-components.types';

export interface BaseControl {
  component: FormComponentsUnion;
  controlName: string;
  label?: string;
  validators?: ValidatorFn[];
}
