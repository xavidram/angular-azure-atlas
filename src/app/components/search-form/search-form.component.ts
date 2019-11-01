import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchEntry } from 'src/app/app.component';

@Component({
  selector: 'apc-search-form',
  template: `
    <dx-form
      id="searchForm"
      [formData]="search"
      [colCount]="4"
      [showColonAfterLabel]="true"
    >
      <dxi-item
        dataField="from"
        editorType="dxDateBox"
        [editorOptions]="{
          invalidateMessage:
            'Thedate must have the following format: MM/dd/yyyy'
        }"
      >
      </dxi-item>
      <dxi-item
        dataField="to"
        editorType="dxDateBox"
        [editorOptions]="{
          invalidateMessage:
            'Thedate must have the following format: MM/dd/yyyy'
        }"
      >
      </dxi-item>
      <dxi-item
        dataField="branch"
        editorType="dxSelectBox"
        [editorOptions]="{
          items: branches,
          displayExpr: 'name',
          valueExpr: 'acronym'
        }"
      >
      </dxi-item>
      <dxi-item
        itemType="button"
        horizontalAlignment="left"
        [buttonOptions]="buttonOptions"
      >
      </dxi-item>
    </dx-form>
  `,
  styles: []
})
export class SearchFormComponent implements OnInit {
  @Output() searchParams: EventEmitter<SearchEntry> = new EventEmitter<
    SearchEntry
  >();

  public branches = [
    {
      acronym: '',
      name: 'All Locations',
      lat: 31.169621,
      lon: -99.683617,
      zoom: 6,
      interactive: true
    },
    {
      acronym: 'HGN',
      name: 'Harlingen',
      lat: 26.1906,
      lon: -97.6961,
      zoom: 9,
      interactive: true
    },
    {
      acronym: 'COR',
      name: 'Corpus',
      lat: 27.8006,
      lon: -97.3964,
      zoom: 9,
      interactive: true
    }
  ];

  public search: SearchEntry;

  public buttonOptions: any = {
    text: 'Search',
    type: 'success',
    useSubmitBehavior: false,
    onClick: () => {
      this.searchParams.emit(this.search);
    }
  };

  constructor() {
    this.search = new SearchEntry();
  }

  ngOnInit() {}

}
