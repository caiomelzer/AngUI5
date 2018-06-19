import { Directive, ElementRef  } from '@angular/core';

@Directive({
  selector: '[center]',
  exportAs: 'atcenter',
})
export class Ui5CenterDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.alignContent = 'center';
    el.nativeElement.style.width = 'auto';
    el.nativeElement.style.margin = '0px auto';
    el.nativeElement.style.textAlign = 'center';
  }
}