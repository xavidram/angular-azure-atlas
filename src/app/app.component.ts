import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AtlasMapComponent } from './components/atlas-map';

@Component({
  selector: 'apc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(AtlasMapComponent, { static: false }) map: AtlasMapComponent;

  public sprites = ['houses', 'home', 'car'];
  public subscriptionKey = 'FKUOi6psROsjeEaIna1uJ8xC4NkAG1LnPZLvk0cAoYI';

  ngOnInit() {
  }

  ngAfterViewInit() {}
}
