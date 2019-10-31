import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Input,
  ElementRef
} from '@angular/core';
import { AtlasMapComponent } from 'src/app/components/atlas-map';
import { KinnserService } from 'src/app/services/kinnser.service';
import * as atlas from 'azure-maps-control';
import { Visit } from 'src/app/models/Visit';
import { AtlasToolbarComponent } from 'src/app/components/atlas-toolbar/atlas-toolbar.component';

@Component({
  selector: 'apc-fleet-map',
  template: `
    <ng-content select=".atlas-toolbar"></ng-content>
    <apc-point-detail [opened]="opened"></apc-point-detail>
    <div class="canvas-wrapper">
      <apc-atlas-map
        [subscriptionKey]="subscriptionKey"
        [styleControl]="true"
        [zoomControl]="true"
        [mapSprites]="sprites"
      >
      </apc-atlas-map>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: inherit;
      width: inherit;
    }
    .canvas-wrapper {
      flex: 1;
    }
  `]
})
export class ApcFleetMapComponent implements OnInit, AfterViewInit {
  @ViewChild(AtlasMapComponent, { static: false }) map: AtlasMapComponent;

  @Input() subscriptionKey: string;
  @Input() sprites: any[];

  public opened: boolean;

  constructor(private kinnser: KinnserService) {
    this.opened = false;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    const dataSource = new atlas.source.DataSource('visits', {
      cluster: true,
      clusterMaxZoom: 12,
      clusterRadius: 45
    });
    const layer = new atlas.layer.SymbolLayer(dataSource, 'visitLayer', {
      iconOptions: {
        allowOverlap: true,
        image: 'home',
        size: 0.1
      }
    });
    const points = [
      new atlas.data.Point([-97.78679, 27.58815]),
      new atlas.data.Point([-97.78571, 27.58481]),
      new atlas.data.Point([-97.54843, 28.02056])
    ];

    this.map.addDataSource(dataSource);
    this.map.addDataLayer(layer);
    this.map.addPointsToDataSource(points, 'visits');
  }
}
