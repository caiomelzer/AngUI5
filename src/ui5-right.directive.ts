import { Directive, ElementRef  } from '@angular/core';

@Directive({
  selector: '[right]'
})
export class Ui5RightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.alignContent = 'right';
    el.nativeElement.style.width = 'auto';
    el.nativeElement.style.textAlign = 'center';
 }
}