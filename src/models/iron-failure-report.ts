import { Photo } from './photo';
import { ServiceSupervisor } from './service-supervisor';
import { Syncable } from './syncable';

export class IronFailureReport implements Syncable {
  constructor(
    public date: Date,
    public jobId: string,
    public fleet: string,
    public pad: string,
    public well: string,
    public stage: string,
    public location: string,
    public customer?: string,
    public totalNpt?: number,
    public totalNptHours?: number,
    public totalNptMinutes?: number,
    public pressure?: number,
    public rate?: number,
    public proppantConcentration?: number,
    public serviceSupervisors: ServiceSupervisor[] = [],
    public failedComponent?: string,
    public failurePoint?: string,
    public manufacturer?: string,
    public bandColor?: string,
    public serialNumber?: string,
    public stationNumber?: string,
    public whereAssetWasRiggedIn?: string,
    public failedIronRiggedInPictureOne?: Photo,
    public failedIronRiggedInPictureTwo?: Photo,
    public failurePointPictureOne?: Photo,
    public failurePointPictureTwo?: Photo,
    public extraPictures?: Photo[],
    public equipmentId?: string,
    public startTime?: number,
    public endTime?: number
  ) {}

  id!: string;
  ts!: number;
  created: number = new Date().getTime();

  getTotalNptDisplay(): string {
    let result = 'N/A';

    if (this.totalNptHours && this.totalNptMinutes) {
      result = `${this.totalNptHours} H ${this.totalNptMinutes} M`;
    } else if (this.totalNptHours) {
      result = `${this.totalNptHours} H`;
    } else if (this.totalNptMinutes) {
      result = `${this.totalNptMinutes} M`;
    }

    return result;
  }

  calculateTotalNpt(): void {
    const hours = this.totalNptHours ?? 0;
    const minutes = this.totalNptMinutes ?? 0;

    this.totalNpt = (((hours * 60) + minutes) * 60) * 1000;
  }
}

export const BandColors = [
  { name: 'Dark Blue', color: 'darkblue' },
  { name: 'Purple', color: 'purple' },
  { name: 'Brown', color: 'brown' },
  { name: 'Red', color: 'red' },
  { name: 'Grey', color: 'grey' },
  { name: 'Orange', color: 'orange' },
  { name: 'Tan', color: 'tan' },
  { name: 'Black', color: 'black' },
  { name: 'Green', color: 'green' },
  { name: 'Light Blue', color: 'lightblue' },
  { name: 'White', color: '#F1F0F5' },
  { name: 'Yellow', color: 'yellow' },
];
