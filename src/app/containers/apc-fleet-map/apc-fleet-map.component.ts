import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AtlasMapComponent } from 'src/app/components/atlas-map';
import { KinnserService } from 'src/app/services/kinnser.service';
import * as atlas from 'azure-maps-control';
import { Visit } from 'src/app/models/Visit';

@Component({
  selector: 'apc-fleet-map',
  template: `
    <apc-atlas-map
      [subscriptionKey]="key"
      [styleControl]="true"
      [zoomControl]="true"
      [mapSprites]="sprites"
    >
    </apc-atlas-map>
  `,
  styles: [``]
})
export class ApcFleetMapComponent implements OnInit, AfterViewInit {
  @ViewChild(AtlasMapComponent, { static: false }) map: AtlasMapComponent;

  public key = 'FKUOi6psROsjeEaIna1uJ8xC4NkAG1LnPZLvk0cAoYI';
  public sprites = ['houses', 'home', 'car'];

  constructor(private kinnser: KinnserService) {}

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
