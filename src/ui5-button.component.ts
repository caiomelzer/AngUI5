import { Component, Input, Directive } from '@angular/core';

@Component({
  selector: 'ui5-button',
  template: `<button><span>{{label}}</span></button>`,
  inputs:['label'],
  styleUrls: ['./ui5-button.component.css']

})
export class Ui5ButtonComponent {
  @Input() label: string;
  @Input() border: boolean;
  constructor(){
  }
}

