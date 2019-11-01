import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apc-atlas-toolbar',
  template: `
    <div class="navbar-container">
      <nav class="atlas-nav">
        <ng-content select=".nav-left"></ng-content>
        <ng-content select=".nav-center"></ng-content>
        <ng-content select=".nav-right"></ng-content>
      </nav>
    </div>
  `,
  styles: [
    `
      :host {
        position: fixed;
        z-index: 100;
        width: 100%;
      }
      div.navbar-container {
        width: inherit;
        padding: 0.5rem 1rem;
        box-shadow: 0px 0px 8px 1px #e1e1e1;
        background: white;
      }
      nav.atlas-nav {
        min-height: 38px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
      ::ng-deep nav.atlas-nav > .nav-left {
      }
      ::ng-deep nav.atlas-nav > .nav-center {
      }
      ::ng-deep nav.atlas-nav > .nav-right {
        justify-self: flex-end;
      }
    `
  ]
})
export class AtlasToolbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
