import { Syncable } from './syncable';

export enum ConsumableType {
  SEATS = 'Seats',
  VALVES = 'Valves',
  PACKING = 'Packing',
  PLUNGERS = 'Plungers',
  CHECK_VALVE_KITS = 'Check Valve Kits',
}

export class ConsumableDeliveryEntry implements Syncable {
  constructor(
    public jobId: string,
    public date: Date,
    public consumable: string,
    public quantity: number = 0
  ) {}

  id!: string;
  ts!: number;
  created: number = new Date().getTime();
}
