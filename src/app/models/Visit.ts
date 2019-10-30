export interface Visit {
  id?: number;
  tripId?: string;
  branch: string;
  patientName: string;
  providerName: string;
  status?: string;
  taskName: string;
  taskType: string;
  visitDate: any; // could change to string
  visitTimeIn?: any; // possible null
  visitTimeOut?: any; // possible null
  address: string;
  lat: string;
  lon: string;
  providerTripFound?: boolean;
  fleetCount?: number;
}

export interface VisitTask {
  status?: string;
  taskName?: string;
  taskType?: string;
  timeIn?: any;
  timeOut?: any;
  providerTripFound?: boolean;
}

export interface IGroupedVisit {
  branch?: string;
  patientName?: string;
  providerName?: string;
  tasks?: VisitTask[];
  address?: string;
  visitDate?: any;
  lat?: string;
  lon?: string;
  providerTripFound?: boolean;
  fleetCount?: number;
}

export class GroupedVisit {
  branch?: string;
  patientName?: string;
  providerName?: string;
  tasks?: VisitTask[];
  address?: string;
  date?: any;
  lat?: string;
  lon?: string;
  providerTripFound?: boolean;
  fleetCount?: number;

  constructor(visits: Visit[])
  constructor(visits: any) {
    this.branch = visits[0].branch;
    this.patientName = visits[0].patientName;
    this.providerName = visits[0].providerName;
    this.address = visits[0].address;
    this.lat = visits[0].lat;
    this.lon = visits[0].lon;
    this.date = visits[0].visitDate;
    this.providerTripFound = visits[0].providerTripFound;
    this.tasks = []; // set them to empty
    visits.forEach(visit => {
      this.tasks.push({
        status: visit.status,
        taskType: visit.taskType,
        taskName: visit.taskName,
        timeIn: visit.visitTimeIn,
        timeOut: visit.visitTimeOut,
        providerTripFound: visit.providerTripFound
      });
    });
  }
}