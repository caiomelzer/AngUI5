import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui5-shell',
  template: '<div id="app"><ui5-brandingbar></ui5-brandingbar><ng-content></ng-content></div>',
  styleUrls: ['./ui5-shell.component.css']
})
export class Ui5ShellComponent {
  html: string;
  constructor() {
      
  }
}

