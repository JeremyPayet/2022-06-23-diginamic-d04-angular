import { CreateColleagueModule } from './../pages/create-colleague/create-colleague.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from "src/shared/shared.module";
import { WelcomeModule } from "src/pages/welcome/welcome.module";

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateColleagueReactiveModule } from 'src/pages/create-colleague-reactive/create-colleague-reactive.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WelcomeModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CreateColleagueModule,
    CreateColleagueReactiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
