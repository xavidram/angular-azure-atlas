import { moduleMetadata } from '@storybook/angular';
import { AtlasMapComponent } from 'src/app/components/atlas-map';
import { CommonModule } from '@angular/common';
import { ApcFleetMapComponent } from './apc-fleet-map.component';
import { HttpClientModule } from '@angular/common/http';
import { KinnserService } from 'src/app/services/kinnser.service';

export default {
  title: 'ApcFleetMap',
  decorators: [
    moduleMetadata({
      declarations: [AtlasMapComponent, ApcFleetMapComponent],
      imports: [CommonModule, HttpClientModule],
      providers: [KinnserService]
    })
  ]
};

export const emptyMap = () => ({
  component: ApcFleetMapComponent
});
