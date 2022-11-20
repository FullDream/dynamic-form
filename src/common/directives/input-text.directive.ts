import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  DoCheck,
  ElementRef,
  HostListener,
  Optional,
} from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appInputText]',
  standalone: true,
  host: {
    class: 'default-control',
  },
})
export class InputTextDirective implements DoCheck, AfterViewInit {
  private filled!: boolean;
  constructor(
    public el: ElementRef,
    @Optional() public ngModel: NgModel,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.updateFilledState();
    this.cd.detectChanges();
  }

  ngDoCheck() {
    this.updateFilledState();
  }

  @HostListener('input', ['$event'])
  onInput(e: Event) {
    this.updateFilledState();
  }

  updateFilledState() {
    this.filled =
      (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
      (this.ngModel && this.ngModel.model);
  }
}
