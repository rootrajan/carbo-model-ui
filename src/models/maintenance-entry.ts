import { Shift } from './shift-info';
import { Syncable } from './syncable';

export enum SevenInchValve {
  VALVE_1 = '7 inch valve 1',
  VALVE_2 = '7 inch valve 2',
}

export enum MaintenanceEquipmentType {
  ON_SITE_EQUIPMENT,
  STATION,
  SEVEN_INCH_VALVE,
}

export class MaintenanceEntry implements Syncable {
  constructor(
    public jobId: string,
    public date: Date,
    public shift: Shift,
    public crew: string,
    public equipment: string,
    public consumable: string,    
    public holes: number[] = [],
    public suctionHoles: number[] = [],
    public dischargeHoles: number[] = [],
    public hour: number = 0.0,
    public issueCategory?: string,
    public issue?: string 
  ) {}

  id!: string;
  ts!: number;
  created: number = new Date().getTime();
}
