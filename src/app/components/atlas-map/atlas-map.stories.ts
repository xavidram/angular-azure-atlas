import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { AtlasMapComponent } from './atlas-map.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PointDetailComponent } from '../point-detail/point-detail.component';
import { AltasLegendComponent } from '../altas-legend/altas-legend.component';

export default {
  title: 'AtlasMap',
  decorators: [
    moduleMetadata({
      declarations: [
        AltasLegendComponent,
        PointDetailComponent,
        AtlasMapComponent
      ],
      imports: [CommonModule, HttpClientModule],
      providers: [HttpClient]
    })
  ]
};

export const emptyMap = () => ({
  component: AtlasMapComponent,
  props: {
    subscriptionKey: 'FKUOi6psROsjeEaIna1uJ8xC4NkAG1LnPZLvk0cAoYI'
  }
});

export const mapWithStyleControl = () => ({
  component: AtlasMapComponent,
  props: {
    subscriptionKey: 'FKUOi6psROsjeEaIna1uJ8xC4NkAG1LnPZLvk0cAoYI',
    styleControl: true
  }
});

export const mapWithZoomControl = () => ({
  component: AtlasMapComponent,
  props: {
    subscriptionKey: 'FKUOi6psROsjeEaIna1uJ8xC4NkAG1LnPZLvk0cAoYI',
    zoomControl: true
  }
});

export const mapWithPitchControl = () => ({
  component: AtlasMapComponent,
  props: {
    subscriptionKey: 'FKUOi6psROsjeEaIna1uJ8xC4NkAG1LnPZLvk0cAoYI',
    pitchControl: true
  }
});

export const mapWithCompassControl = () => ({
  component: AtlasMapComponent,
  props: {
    subscriptionKey: 'FKUOi6psROsjeEaIna1uJ8xC4NkAG1LnPZLvk0cAoYI',
    compassControl: true
  }
});

export const mapWithAllControls = () => ({
  component: AtlasMapComponent,
  props: {
    subscriptionKey: 'FKUOi6psROsjeEaIna1uJ8xC4NkAG1LnPZLvk0cAoYI',
    compassControl: true,
    styleControl: true,
    pitchControl: true,
    zoomControl: true
  }
});

export const passingResources = () => ({
  component: AtlasMapComponent,
  props: {
    subscriptionKey: 'FKUOi6psROsjeEaIna1uJ8xC4NkAG1LnPZLvk0cAoYI',
    mapSprites: ['houses', 'home', 'car']
  }
});

export const withStaticLabel = () => ({
  component: AtlasMapComponent,
  props: {
    subscriptionKey: 'FKUOi6psROsjeEaIna1uJ8xC4NkAG1LnPZLvk0cAoYI',
    mapSprites: ['houses', 'home', 'car']
  },
  template: `
      <apc-atlas-map [subscriptionKey]="subscriptionKey" [mapSprites]="mapSprites">
      </apc-atlas-map>
    `
});
