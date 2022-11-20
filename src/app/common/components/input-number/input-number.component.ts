import {
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumberComponent),
      multi: true,
    },
  ],
})
export class InputNumberComponent implements OnInit, ControlValueAccessor {
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;

  onChange: Function = () => {};

  onTouch: Function = () => {};

  private _value!: number;

  constructor(private cdr: ChangeDetectorRef) {}

  public get value() {
    return this._value;
  }

  public set value(val: any) {
    this._value = val;
    this.onChange(val);
    this.onTouch(val);
  }

  public onValueUp() {
    if (!this.value) {
      this._value = 0;
    }
    this.value = Number(this.value) + 1;
  }

  public onValueDown() {
    if (!this.value) {
      this._value = 0;
    }
    this.value = Number(this.value) - 1;
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  ngOnInit(): void {}
}
