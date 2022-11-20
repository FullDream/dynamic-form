import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseControlAbstract } from '../../abstractions';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
})
export class FormInputComponent extends BaseControlAbstract {}
