import {
  Component,
  OnInit,
  ViewChild,
  Input,
  AfterViewInit,
  HostListener,
  ContentChild
} from '@angular/core';
import * as atlas from 'azure-maps-control';
import { HttpClient } from '@angular/common/http';
import { AltasLegendComponent } from '../altas-legend/altas-legend.component';

interface DataSourceToggle {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'apc-atlas-map',
  template: `
    <div id="AtlasMap" class="atlas-map">
      <apc-altas-legend *ngIf="mapSourceIds.length > 0"
        class="atlas-legend" [dataSources]="mapSourceIds">
      </apc-altas-legend>
    </div>
  `,
  styles: [
    `
      .atlas-map {
        height: inherit;
        width: inherit;
      }
      ::ng-deep .atlas-legend {
        position: absolute;
        z-index: 2;
      }
    `
  ]
})
export class AtlasMapComponent implements OnInit, AfterViewInit {
  @ContentChild(AltasLegendComponent, { static: false })
  legend: AltasLegendComponent;

  @ViewChild('AtlasMap', { static: true, read: HTMLElement })
  map: HTMLElement;

  @Input() subscriptionKey: string;
  @Input() center: any = [-97.67411, 26.17516];
  @Input() zoom = 9;
  // Controls
  @Input() styleControl = false;
  @Input() zoomControl = false;
  @Input() pitchControl = false;
  @Input() compassControl = false;
  @Input() mapSprites: string[];
  @Input() showLegend: boolean;

  public mapSourceIds: string[] = [];
  private mapLayerIds: string[] = [];

  public mapCanvas: atlas.Map;

  protected language = 'en-US';
  protected mapStyles = [
    'road',
    'grayscale_dark',
    'night',
    'road_shaded_relief',
    'satellite',
    'satellite_road_labels'
  ];

  //#region  HotListeners
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mapCanvas.resize(window.innerHeight, window.innerWidth);
  }
  //#endregion

  //#region Map Public rendering functions

  /**
   * @param id Unique ID for this datasource
   * @param options Datasource options
   */
  public createDataSource(
    id: string,
    options: atlas.DataSourceOptions
  ): atlas.source.DataSource {
    let dataSource: atlas.source.DataSource = null;
    this.mapCanvas.events.add('ready', () => {
      dataSource = new atlas.source.DataSource(id, options);
      this.mapCanvas.sources.add(dataSource);
    });
    return dataSource;
  }

  public addDataSource(dataSource: atlas.source.DataSource) {
    this.mapCanvas.events.add('ready', () => {
      this.mapSourceIds.push(dataSource.getId());
      this.mapCanvas.sources.add(dataSource);
    });
  }

  public addDataLayer(layer: atlas.layer.SymbolLayer) {
    this.mapCanvas.events.add('ready', () => {
      this.mapLayerIds.push(layer.getId());
      this.mapCanvas.layers.add(layer);
    });
  }

  public addPointsToDataSource(
    points: atlas.data.Point[],
    dataSourceId: string
  ): void {
    this.mapCanvas.events.add('ready', () => {
      const dataSource = this.mapCanvas.sources.getById(
        dataSourceId
      ) as atlas.source.DataSource;
      points.forEach((point: atlas.data.Point) => {
        dataSource.add(point);
      });
    });
  }

  public toggleSource(source: DataSourceToggle) {
    console.log(source);
  }
  //#endregion

  //#region Map Initialization Functions
  constructor(private http: HttpClient) {
    this.initializeMap = this.initializeMap.bind(this);
  }

  ngOnInit() {
    this.mapCanvas = this.initializeMap();
    this.mapCanvas.resize(window.innerHeight, window.innerWidth);
  }

  ngAfterViewInit(): void {
    if (this.mapSprites) this.initializeMapResources();
    this.initializeControls();
    this.initializeLegendListener();
  }

  private initializeLegendListener() {
    this.legend.dataSourceToggle.subscribe(event => {});
  }

  private initializeMap() {
    return new atlas.Map('AtlasMap', {
      center: this.center,
      zoom: this.zoom,
      language: this.language,
      authOptions: {
        authType: atlas.AuthenticationType.subscriptionKey,
        subscriptionKey: this.subscriptionKey
      }
    });
  }

  private initializeMapResources() {
    this.mapCanvas.events.add('ready', () => {
      this.mapSprites.forEach((sprite: string) => {
        this.mapCanvas.imageSprite.add(sprite, `assets/svg/${sprite}.svg`);
        /*
        this.getSpriteFromAsssets(sprite).toPromise().then((data: string) => {
          this.mapCanvas.imageSprite.add(sprite, `${data}`);
        });
        */
      });
    });
  }

  private initializeControls() {
    if (this.styleControl) this.styleControlInit();
    if (this.zoomControl) this.zoomControlInit();
    if (this.pitchControl) this.pitchControlInit();
    if (this.compassControl) this.compassControlInit();
  }

  private styleControlInit() {
    this.mapCanvas.events.add('ready', () => {
      const styleControl = new atlas.control.StyleControl({
        mapStyles: this.mapStyles
      });
      this.mapCanvas.controls.add(styleControl, {
        position: atlas.ControlPosition.BottomRight
      });
    });
  }

  private zoomControlInit() {
    this.mapCanvas.events.add('ready', () => {
      this.mapCanvas.controls.add(new atlas.control.ZoomControl(), {
        position: atlas.ControlPosition.BottomRight
      });
    });
  }

  private pitchControlInit() {
    this.mapCanvas.events.add('ready', () => {
      this.mapCanvas.controls.add(new atlas.control.PitchControl(), {
        position: atlas.ControlPosition.BottomRight
      });
    });
  }

  private compassControlInit() {
    this.mapCanvas.events.add('ready', () => {
      this.mapCanvas.controls.add(new atlas.control.CompassControl(), {
        position: atlas.ControlPosition.BottomRight
      });
    });
  }

  private getSpriteFromAsssets(name) {
    return this.http.get(`/assets/svg/${name}.svg`, { responseType: 'text' });
  }
  //#endregion
}
