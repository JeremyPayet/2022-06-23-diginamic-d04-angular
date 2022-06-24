import { SharedModule } from 'src/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePage } from './welcome.page';


@NgModule({
  declarations: [
    WelcomePage
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    WelcomePage
  ]
})
export class WelcomeModule { }
