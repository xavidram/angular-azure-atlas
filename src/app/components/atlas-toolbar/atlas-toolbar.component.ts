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
      div.navbar-container {
        width: inherit;
        padding: 0.5rem 1rem;
        box-shadow: 0px 0px 8px 1px #e1e1e1;
        background: white;
      }
      nav.atlas-nav {
        min-height: 38px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
      }
      ::ng-deep nav.atlas-nav > .nav-left {
        display: -webkit-inline-box;
        grid-column: 1;
      }
      ::ng-deep nav.atlas-nav > .nav-center {
        display: -webkit-inline-box;
        grid-column: 2;
      }
      ::ng-deep nav.atlas-nav > .nav-right {
        display: -webkit-inline-box;
        grid-column: 3;
      }
    `
  ]
})
export class AtlasToolbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
