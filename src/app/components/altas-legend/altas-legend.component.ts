import { Component, OnInit, Input, EventEmitter, Output, ContentChild } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

interface DataSourceToggle {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'apc-altas-legend',
  template: `
    <div class="checkbox-container">
      <form>
        <div class="form-group" *ngFor="let source of dataSources">
          <label [for]="source" class="check-box">
            <input
              type="checkbox"
              [name]="source"
              [id]="source"
              [value]="source"
              checked
              (change)="checkboxChange($event)"
            />
            <span class="checkmark"></span>
            {{ source }}
          </label>
        </div>
      </form>
    </div>
  `,
  styles: [
    `
      .checkbox-container {
        margin: 1rem;
        padding: 0.25rem;
        background: white;
        opacity: 0.95;
        border-radius: 4px;
        width: auto;
        display: table;
      }
      .check-box {
        display: block;
        position: relative;
        padding-left: 35px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .form-group {
        padding: 4px;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .check-box > input[type='checkbox'] {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
      .form-group > label {
        margin-left: 0.5rem;
      }
      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        background-color: #eee;
      }
      /* On mouse-over, add a grey background color */
      .check-box:hover input ~ .checkmark {
        background-color: #ccc;
      }

      /* When the checkbox is checked, add a blue background */
      .check-box input:checked ~ .checkmark {
        background-color: #2196f3;
      }

      /* Create the checkmark/indicator (hidden when not checked) */
      .checkmark:after {
        content: '';
        position: absolute;
        display: none;
      }

      /* Show the checkmark when checked */
      .check-box input:checked ~ .checkmark:after {
        display: block;
      }

      /* Style the checkmark/indicator */
      .check-box .checkmark:after {
        left: 6px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    `
  ]
})
export class AltasLegendComponent implements OnInit {

  @Input() dataSources: string[];

  @Output() dataSourceToggle = new EventEmitter<DataSourceToggle>();

  legend: FormGroup;

  constructor() {}

  ngOnInit() {
    /*
    if (!this.dataSources) return;

    const items: FormControl[] = this.dataSources.map((source: string) => {
      return new FormControl(source, []);
    });
    this.legend = new FormGroup({
      checkBoxes: new FormArray(items)
    });
    */
  }

  public checkboxChange(e: any) {
    this.dataSourceToggle.emit({
      name: e.target.name,
      checked: e.target.checked
    });
  }
}
