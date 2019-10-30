export interface FleetPoint {
  id?: string;
  deviceId?: string;
  lat?: string;
  lon?: string;
  name?: string;
  startTime?: Date | string;
  stopDurationSeconds?: number;
  vin?: string;
}
