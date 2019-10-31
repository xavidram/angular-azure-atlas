import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApcFleetMapComponent } from './containers/apc-fleet-map/apc-fleet-map.component';
import { HttpClientModule } from '@angular/common/http';
import { AtlasMapComponent } from './components/atlas-map';
import { KinnserService } from './services/kinnser.service';
import { AtlasToolbarComponent } from './components/atlas-toolbar/atlas-toolbar.component';
import { PointDetailComponent } from './components/point-detail/point-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ApcFleetMapComponent,
    AtlasMapComponent,
    AtlasToolbarComponent,
    PointDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [KinnserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
