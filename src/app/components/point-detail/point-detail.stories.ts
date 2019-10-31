import { moduleMetadata } from '@storybook/angular';
import { PointDetailComponent } from './point-detail.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'PointDetail',
  parameters: {
    backgrounds: [{ name: 'grey', value: '#3a4149', default: true }]
  },
  decorators: [
    moduleMetadata({
      declarations: [PointDetailComponent],
      imports: [CommonModule]
    })
  ]
};

export const emptyDetail = () => ({
  component: PointDetailComponent
});


export const withContentNotOpen = () => ({
  component: PointDetailComponent,
  template:
    `
      <apc-point-detail>
        <div point-detail-body>
          <ul>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </div>
      </apc-point-detail>
    `
});

export const withContentOpened = () => ({
  component: PointDetailComponent,
  props: {
    opened: true
  },
  template:
    `
      <apc-point-detail [opened]="opened">
        <div point-detail-body>
          <ul>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </div>
      </apc-point-detail>
    `
});
