import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visit } from '../models/Visit';
import { Observable } from 'rxjs';
import { FleetPoint } from '../models/Fleet';

export interface KinnserQueryParams {
  From: Date;
  To: Date;
  Branch?: string;
}

export interface KinnserFleetPoximity {
  latitude: string | number;
  longitude: string | number;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class KinnserService {
  // private url = 'http://geovisits.apchh.com/api/kinnser';
  private url = 'http://localhost:5000/api/kinnser';
  constructor(private http: HttpClient) {}

  public getVisits(params: KinnserQueryParams): Observable<Visit[]> {
    return this.http.post<Visit[]>(`${this.url}/visits`, params);
  }

  public getFleets(params: KinnserQueryParams): Observable<FleetPoint[]> {
    return this.http.post<FleetPoint[]>(`${this.url}/trips`, params);
  }

  public fleetsNearVisit(
    params: KinnserFleetPoximity
  ): Observable<FleetPoint[]> {
    return this.http.post<FleetPoint[]>(`${this.url}fleetsnearby`, params);
  }
}
