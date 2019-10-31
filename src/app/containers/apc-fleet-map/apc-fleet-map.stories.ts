import { moduleMetadata } from '@storybook/angular';
import { AtlasMapComponent } from 'src/app/components/atlas-map';
import { CommonModule } from '@angular/common';
import { ApcFleetMapComponent } from './apc-fleet-map.component';
import { HttpClientModule } from '@angular/common/http';
import { KinnserService } from 'src/app/services/kinnser.service';
import { AtlasToolbarComponent } from 'src/app/components/atlas-toolbar/atlas-toolbar.component';

export default {
  title: 'ApcFleetMap',
  decorators: [
    moduleMetadata({
      declarations: [
        AtlasMapComponent,
        AtlasToolbarComponent,
        ApcFleetMapComponent
      ],
      imports: [CommonModule, HttpClientModule],
      providers: [KinnserService]
    })
  ]
};

const defaultProps = {
  sprites: ['houses', 'home', 'car'],
  subscriptionKey: 'FKUOi6psROsjeEaIna1uJ8xC4NkAG1LnPZLvk0cAoYI'
};

export const emptyMap = () => ({
  component: ApcFleetMapComponent,
  props: defaultProps
});

export const withToolbar = () => ({
  component: ApcFleetMapComponent,
  props: defaultProps,
  template: `
      <apc-fleet-map [subscriptionKey]="subscriptionKey" [sprites]="sprites">
        <apc-atlas-toolbar class="atlas-toolbar"></apc-atlas-toolbar>
      </apc-fleet-map>
    `
});

export const withToolbarandItems = () => ({
  component: ApcFleetMapComponent,
  props: defaultProps,
  template: `
      <apc-fleet-map [subscriptionKey]="subscriptionKey" [sprites]="sprites">
        <apc-atlas-toolbar class="atlas-toolbar">
          <div class="nav-right">
            <div class="form-group">
              <label for="from">From:</label>
              <input type="date" name="from" id="from">
            </div>
            <div class="form-group">
              <label for="to">To:</label>
              <input type="date" name="to" id="to">
            </div>
            <button class="btn" type="button">Search</button>
          </div>
        </apc-atlas-toolbar>
      </apc-fleet-map>
    `
});
