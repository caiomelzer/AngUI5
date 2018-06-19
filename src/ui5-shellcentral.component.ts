import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui5-shellcentral',
  template: '<div id="shell-central"><ng-content></ng-content></div>',
  styleUrls: ['./ui5-shellcentral.component.css']
})
export class Ui5ShellCentralComponent {
  html: string;
  constructor() {
      
  }
}

