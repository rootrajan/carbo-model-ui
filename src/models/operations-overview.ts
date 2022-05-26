import { Syncable } from './syncable';

export class OperationsOverview implements Syncable {
  constructor(
    public jobId: string,
    public stationCount: number,
    public activePumpsTop: IEquipmentOverviewPump[] = [],
    public activePumpsBottom: IEquipmentOverviewPump[] = [],
    public standbyPumps: IEquipmentOverviewPump[] = [],
    public checkValves: IEquipmentOverviewValve[] = [],
    public sevenInchValves: IEquipmentOverviewValve[] = []
  ) {}
  id!: string;
  ts!: number;
  created: number = new Date().getTime();
}

export interface IEquipmentOverView {
  name?: string;
  hour?: number;
  currentHour?: number;
}

export interface IEquipmentOverviewPump extends IEquipmentOverView {
  holes?: IEquipmentOverviewHole[];
  suctionHoles?: IEquipmentOverviewHole[];
  dischargeHoles?: IEquipmentOverviewHole[];
}

export interface IEquipmentOverviewValve extends IEquipmentOverView {
  alias: string;
  sevenInchValve?: boolean;
}

export interface IEquipmentOverviewHole extends IEquipmentOverView {
  indexNumber: number;
}

export class Hole implements IEquipmentOverviewHole {
  constructor(
    public indexNumber: number,
    public name?: string,
    public currentHour?: number,
    public hour?: number
  ) {
    this.name = `${indexNumber}`;
  }
}

export enum ListHolesType {
  HOLES = 'holes',
  SUCTION_HOLES = 'suctionHoles',
  DISCHARGE_HOLES = 'dischargeHoles',
}
