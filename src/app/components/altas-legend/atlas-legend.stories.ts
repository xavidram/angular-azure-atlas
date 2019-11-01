import { moduleMetadata } from '@storybook/angular';
import { AltasLegendComponent } from './altas-legend.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'AtlasLegend',
  parameters: {
    backgrounds: [{ name: 'grey', value: '#3a4149', default: true }]
  },
  decorators: [
    moduleMetadata({
      declarations: [AltasLegendComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule]
    })
  ]
};

export const basic = () => ({
  component: AltasLegendComponent,
  props: {
    dataSources: ['Visits', 'Fleets']
  }
});
