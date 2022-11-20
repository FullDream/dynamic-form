import { Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseControlAbstract } from './abstractions';
import { FormInputComponent } from './components/form-input/form-input.component';
import { BaseControl } from './types/dynamic-form.interface';

const formComponents: any = {
  input: FormInputComponent,
};

@Directive({
  selector: '[appRenderElements]',
})
export class RenderElementsDirective implements OnInit {
  @Input() config!: BaseControl;

  @Input() form!: FormGroup;

  constructor(private readonly vcr: ViewContainerRef) {}

  ngOnInit() {
    const element = this.vcr.createComponent<BaseControlAbstract>(
      formComponents[this.config.component]
    );
    element.instance.config = this.config;
    element.instance.form = this.form;
  }
}
