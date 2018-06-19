import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui5-page-header',
  template: `<div><ng-content></ng-content></div>`,
  styleUrls: ['./ui5-pageheader.component.css']

})
export class Ui5PageHeaderComponent {
  constructor() {
    
  }
}

