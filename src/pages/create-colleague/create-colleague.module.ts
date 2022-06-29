import { SharedModule } from 'src/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateColleaguePage } from './create-colleague.page';



@NgModule({
  declarations: [
    CreateColleaguePage
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    CreateColleaguePage
  ]
})
export class CreateColleagueModule { }
