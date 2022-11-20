import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
  animations: [
    trigger('enterLeave', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class DropdownComponent implements OnInit, ControlValueAccessor {
  @Input() options: any[] = [];
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() selectFirst: boolean = false;
  @Input() placeholder?: string = '';

  onChange: Function = () => {};
  onTouch: Function = () => {};

  private _value: any;
  public isOpen: boolean = false;

  constructor() {}

  ngOnInit() {
    if (this.selectFirst) {
      this.value = this.options?.[0];
    }
  }

  public get value() {
    return this._value;
  }

  public set value(val: any) {
    if (val === undefined) {
      return;
    }

    this._value = val;
    this.onChange(val);
    this.onTouch(val);
  }

  onSelect(item: any) {
    this.value = item;
    this.isOpen = false;
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
  }
}
