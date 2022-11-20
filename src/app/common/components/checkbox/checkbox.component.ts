import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseValueAccessorAbstract } from '@common/abstractions';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent
  extends BaseValueAccessorAbstract<boolean>
  implements OnInit
{
  @Input() label?: string;
  @Input() inputId?: string;

  ngOnInit(): void {}
}
