import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// ********************************************************************************
// == Module ======================================================================
@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [AppComponent]
})

// == Class =======================================================================
export class AppModule { }
