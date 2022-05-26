import { Syncable } from './syncable';
export class OnSiteEquipment implements Syncable {
  constructor(
    public id: string = '',
    public name: string = '',
    public dfName: string = '',      
    public type: string = '',
    public currentHour: number = 0,  
    public fleetId?: string,
    public location?: string,
    public standby?: boolean,
    public tier?: string,
    public engines?: string,
    public engineHours?: number,
    public dualFuel?: boolean,
    public eku?: boolean,
    public aoi?: boolean,
    public size?: number,
    public plungerSize?: string,
    public wireless?: boolean,
    public engineRebuild?: boolean,
    public status?: string,
    public yardStatus?: string,
    public hardDownStatus?: string,
    public comments?: string
  ) {}

  created!: number;
  ts!: number;
}
