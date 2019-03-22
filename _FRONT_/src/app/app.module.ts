import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuskeComponent } from './suske/suske.component';
import { WiskeComponent } from './wiske/wiske.component';
import { MotorComponent } from './motor/motor.component';

@NgModule({
  declarations: [
    AppComponent,
    SuskeComponent,
    WiskeComponent,
    MotorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
