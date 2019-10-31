import { moduleMetadata } from '@storybook/angular';
import { AtlasToolbarComponent } from './atlas-toolbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'ApcAtlasToolbar',
    parameters: {
    backgrounds: [{ name: 'grey', value: '#3a4149', default: true }]
  },
  decorators: [
    moduleMetadata({
      declarations: [AtlasToolbarComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
    })
  ]
};

export const emptyToolbar = () => ({
  component: AtlasToolbarComponent,
});

export const passingElements = () => ({
  component: AtlasToolbarComponent,
  template:
    `
      <apc-atlas-toolbar>
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
    `
});
