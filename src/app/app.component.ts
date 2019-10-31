import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AtlasMapComponent } from './components/atlas-map';

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

  public sprites = ['houses', 'home', 'car'];
  public subscriptionKey = 'FKUOi6psROsjeEaIna1uJ8xC4NkAG1LnPZLvk0cAoYI';
  public search: SearchEntry;

  public buttonOptions: any = {
    text: 'Search',
    type: 'success',
    useSubmitBehavior: false,
    onClick: this.submitSearch
  };

  constructor() {
    this.search = new SearchEntry();
    this.submitSearch = this.submitSearch.bind(this);
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  public submitSearch(e: any) {
    console.log(this.search);
  }
}
