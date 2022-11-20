import { FormControl, FormGroup } from '@angular/forms';
import { BaseControl } from '../types/dynamic-form.interface';

export class BaseControlAbstract<T extends BaseControl = BaseControl> {
  public config!: T;
  public form!: FormGroup;

  public get control(): FormControl {
    return this.form.get(this.config.controlName) as FormControl;
  }
}
