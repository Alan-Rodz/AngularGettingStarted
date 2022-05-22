import { Component, OnInit } from '@angular/core';

// ********************************************************************************
// == Decorator ===================================================================
@Component({ selector: 'app-item', templateUrl: './item.component.html', styleUrls: ['./item.component.css'] })

// == Class =======================================================================
export class ItemComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}
