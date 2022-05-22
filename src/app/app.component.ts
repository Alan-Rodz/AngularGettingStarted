import { Component } from '@angular/core';

import { Item } from './type';

// ********************************************************************************
// == Decorator ===================================================================
/* selector: name of the css selector that you use in a template to instantiate the component */
/* templateUrl: HTML file associated with this component */
/* styleUrls: Provides the location and name of the file for the styles that apply specifically to this component */
@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css'] })

// == Class =======================================================================
export class AppComponent { 
  // -- Constant ------------------------------------------------------------------
  title = 'todoList'; 
  filter: 'all' | 'active' | 'done' = 'all';
  allItems: Item[] = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  // -- Getters -------------------------------------------------------------------
  get items() {
    if(this.filter === 'all') 
      return this.allItems;
    /* else -- another filter */

    /*return done items or outstanding items depending on how view is filtered*/
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  // -- Functions -----------------------------------------------------------------
  addItem(description: string) { this.allItems.unshift({ description, done: false/*by definition*/ }); }
  remove(item: Item) { this.allItems.splice(this.allItems.indexOf(item), 1); }
  
}
