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
import { DxFormModule, DxButtonModule, DxCheckBoxModule } from 'devextreme-angular';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { AltasLegendComponent } from './components/altas-legend/altas-legend.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ApcFleetMapComponent,
    AtlasMapComponent,
    AtlasToolbarComponent,
    PointDetailComponent,
    SearchFormComponent,
    AltasLegendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    DxFormModule,
    DxButtonModule,
    DxCheckBoxModule
  ],
  providers: [KinnserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
