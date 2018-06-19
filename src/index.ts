import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { Ui5ButtonComponent } from './ui5-button.component';
import { Ui5ShellComponent } from './ui5-shell.component';
import { Ui5BrandingBarComponent } from './ui5-brandingbar.component';
import { Ui5ShellCentralComponent } from './ui5-shellcentral.component';
import { Ui5PageHeaderComponent } from './ui5-pageheader.component';
import { Ui5CenterComponent } from './ui5-center.component';

import { Ui5LeftDirective } from './ui5-left.directive';
import { Ui5RightDirective } from './ui5-right.directive';
import { Ui5CenterDirective } from './ui5-center.directive';


import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';

export * from './sample.component';
export * from './ui5-button.component';
export * from './ui5-shell.component';
export * from './ui5-brandingbar.component';
export * from './ui5-shellcentral.component';
export * from './ui5-pageheader.component';
export * from './ui5-center.component';

export * from './ui5-center.directive';
export * from './ui5-left.directive';
export * from './ui5-right.directive';


export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
    Ui5ButtonComponent,
    Ui5ShellComponent,
    Ui5BrandingBarComponent,
    Ui5ShellCentralComponent,
    Ui5PageHeaderComponent,
    Ui5CenterComponent,
    Ui5CenterDirective,
    Ui5LeftDirective,
    Ui5RightDirective,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    SampleComponent,
    Ui5ButtonComponent,
    Ui5ShellComponent,
    Ui5BrandingBarComponent,
    Ui5ShellCentralComponent,
    Ui5PageHeaderComponent,
    Ui5CenterComponent,
    Ui5CenterDirective,
    SampleDirective,
    SamplePipe
  ]
})
export class Ui5Module {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ui5Module,
      providers: [SampleService]
    };
  }
}
