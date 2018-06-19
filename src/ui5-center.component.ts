import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui5-center',
  template: `<span><ng-content></ng-content></span>`,
  styleUrls: ['./ui5-center.component.css']

})
export class Ui5CenterComponent {
  constructor() {
    
  }
}

