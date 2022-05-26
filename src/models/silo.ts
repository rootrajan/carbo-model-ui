import { ProppantContainer } from './proppant-container';
import { Proppant } from './proppant';
import { ConsumedContainer } from './consumed-container';
import { ContainerType } from './proppant-delivery-entry';

export class Silo implements ProppantContainer {
  proppant!: Proppant;
  actualRun!: number;
  consumedContainer!: ConsumedContainer;
  position!: number;
  type: ContainerType = ContainerType.silos;

  constructor(
    public id?: string,
    position?: number,
    public startPercent?: number,
    public leavePercent: number = 0.0,
    public coeff: number = 0.0,
    public total?: number,
    public designVolume?: number,
    public leaveLbs?: number,
    public calcSilo?: number,
    public remainOnTickets?: number,
    public runOrder?: string,
    public actualEndingPercent?: number,
    public note?: string
  ) {
    if (position) {
      this.position = position;
    }
  }
}
