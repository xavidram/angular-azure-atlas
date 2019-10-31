import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'apc-point-detail',
  template: `
    <div class="off-canvas-detail" [ngClass]="{'opened' : opened}">
      <ng-content select="[point-detail-body]"></ng-content>
    </div>
  `,
  styles: [
    `
      .off-canvas-detail {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        background-color: #111;
        overflow-x: hidden;
        transition: 0.5s;
        background: white;
      }
      .opened {
        width: 250px;
      }
    `
  ]
})
export class PointDetailComponent implements OnInit {

  @Input() opened: boolean;

  constructor() {}

  ngOnInit() {}
}
