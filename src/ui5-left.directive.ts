import { Directive, ElementRef  } from '@angular/core';

@Directive({
  selector: '[left]'
})
export class Ui5LeftDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.alignContent = 'left';
    el.nativeElement.style.width = 'auto';
    el.nativeElement.style.textAlign = 'center';
 }
}