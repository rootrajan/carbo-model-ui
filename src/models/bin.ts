import { ProppantContainer } from './proppant-container';
import { Proppant } from './proppant';
import { ConsumedBin } from './consumed-bin';
import { ContainerType } from './proppant-delivery-entry';

export class Bin implements ProppantContainer {
  proppant: Proppant;
  actualRun: number;
  consumedContainer: ConsumedBin;
  type: ContainerType = ContainerType.bins;

  constructor(
    public id: string,
    public position: number,
    consumedContainer: ConsumedBin,
    proppant: Proppant,
    actualRun: number,
    public startLbs?: number,
    public leaveLbs?: number,
    public remainOnTickets?: number,
    public total?: number,
    public designVolume?: number,
    public note?: string
  ) {
    this.proppant = proppant;
    this.actualRun = actualRun;
    this.consumedContainer = consumedContainer;
  }
}
