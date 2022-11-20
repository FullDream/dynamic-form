import { Directive, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Directive()
export abstract class BaseValueAccessorAbstract<Value = any>
  implements ControlValueAccessor
{
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;

  protected _value!: Value;

  onChange: Function = () => {};
  onTouch: Function = () => {};

  public get value() {
    return this._value;
  }

  public set value(val: Value) {
    if (val === undefined) {
      return;
    }

    this._value = val;
    this.onChange(val);
    this.onTouch(val);
  }

  writeValue(value: Value) {
    this.value = value;
  }

  registerOnChange(fn: Function) {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
