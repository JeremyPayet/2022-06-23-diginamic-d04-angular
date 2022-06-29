import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateColleagueReactivePage } from './create-colleague-reactive.page';
import { SharedModule } from 'src/shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateColleagueReactivePage
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateColleagueReactivePage
  ]
})
export class CreateColleagueReactiveModule { }
