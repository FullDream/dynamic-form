import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss'],
})
export class ValidationMessageComponent implements DoCheck {
  @Input() control!: FormControl;

  public message: string | null = null;

  private readonly messages: Record<string, string> = {
    required: 'Даное поле обязательно для заполнения',
  };

  ngDoCheck(): void {
    if (this.control?.errors) {
      const key: string = Object.keys(this.control?.errors)[0];
      this.message = this.messages?.[key];
      return;
    }

    this.message = null;
  }
}
