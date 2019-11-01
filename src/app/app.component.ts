import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AtlasMapComponent } from './components/atlas-map';
import { KinnserService } from './services/kinnser.service';
import { Visit } from './models/Visit';
import * as atlas from 'azure-maps-control';

export class SearchEntry {
  from: Date;
  to: Date;
  branch?: string;

  constructor() {
    (this.branch = ''), (this.to = new Date());
    this.from = new Date();
  }
}

@Component({
  selector: 'apc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(AtlasMapComponent, { static: false }) map: AtlasMapComponent;

  public opened: boolean;
  public sprites = ['houses', 'home', 'car'];
  public subscriptionKey = 'FKUOi6psROsjeEaIna1uJ8xC4NkAG1LnPZLvk0cAoYI';

  constructor(private kinnser: KinnserService) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  public async onSearchClick(e: SearchEntry) {
    const visits = await this.getData(e);
  }

  public async getData(params: SearchEntry) {
    return this.kinnser
      .getVisits({
        From: params.from,
        To: params.to,
        Branch: params.branch
      })
      .toPromise();
  }

  private plotVisits(sourceName: string, data: Visit[]) {
    const dataSource = new atlas.source.DataSource(sourceName, {
      cluster: true,
      clusterMaxZoom: 12,
      clusterRadius: 45
    });

    this.map.addDataSource(dataSource);

    const layer = new atlas.layer.SymbolLayer(
      dataSource,
      `${sourceName}Layer`,
      {
        iconOptions: {
          image: 'home',
          size: 0.1,
          allowOverlap: true
        }
      }
    );

    this.map.addDataLayer(layer);

    const points: atlas.data.Point[] = [];
    data.forEach((visit: Visit) => {
      points.push(
        new atlas.data.Point([parseFloat(visit.lon), parseFloat(visit.lat)])
      );
    });

    this.map.addPointsToDataSource(points, sourceName);
  }
}
