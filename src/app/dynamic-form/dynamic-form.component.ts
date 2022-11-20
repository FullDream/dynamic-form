import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseControl } from './types/dynamic-form.interface';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent implements OnInit {
  @Input() controls!: BaseControl[];

  public form!: FormGroup;

  constructor(public readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this.fb.group({});
    this.controls.forEach((control) =>
      group.addControl(control.controlName, this.createControl(control))
    );
    return group;
  }

  createControl(config: BaseControl) {
    return this.fb.control(null);
  }
}
