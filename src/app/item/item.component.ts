import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../type';

// ********************************************************************************
// == Decorator ===================================================================
@Component({ selector: 'app-item', templateUrl: './item.component.html', styleUrls: ['./item.component.css'] })

// == Class =======================================================================
export class ItemComponent {
  constructor() {
    this.item = { description: '', done: false };
    this.newItem = '';
  }

  /*when you use a variable in the template you must also declare it in the class*/
  editable = false;

  /*doorways for data to come into the component*/
  /*used to specify that the value of a property can come from outside the component*/
  @Input() item: Item;
  @Input() newItem: string;

  /*doorway for data to come out of the component*/
  /*used in conjunction with event emitter to specify that the value of a property can leave the component so that another can receive it*/
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string) {
    if (!description) return;
    /* else -- has a description */

    this.editable = false;
    this.item.description = description;
  }

}