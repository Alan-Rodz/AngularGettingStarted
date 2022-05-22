import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';

// ********************************************************************************
// == Module ======================================================================
@NgModule({
  declarations: [ AppComponent, ItemComponent ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [AppComponent]
})

// == Class =======================================================================
export class AppModule { }
