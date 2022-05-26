import { ProppantContainer } from './proppant-container';
import { Syncable } from './syncable';
import { ProppantDeliveryEntry } from './proppant-delivery-entry';

export class ProppantStage implements Syncable {
  constructor(
    public jobId: string,
    public wellId: string,
    public date?: Date,
    public well = null,
    public stage: number = 1,
    public silos: Record<string, ProppantContainer> = {},
    public runOrders: ProppantContainer[] = [],
    public blender?: string,
    public diverter?: string,
    public diverterAmount?: number,
    public currentInSilos: Map<string, number> = new Map<string, number>(),
    public affectedDeliveryRecords?: ProppantDeliveryEntry[]
  ) {}

  id!: string;
  ts!: number;
  created: number = new Date().getTime();

  getAllSubmittedContainer(proppantSchematicType: string): ProppantContainer[] {
    let result: ProppantContainer[] = [];
    if (proppantSchematicType === 'silos') {
      if (this.silos) {
        const values = Object.keys(this.silos).map((key) => this.silos[key]);
        result = result.concat(...values);
      }
    } else {
      if (this.runOrders) {
        result = this.runOrders;
      }
    }

    return result;
  }
}
