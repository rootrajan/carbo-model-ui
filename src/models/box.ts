import { ContainerType } from './proppant-delivery-entry';
import { ConsumedBox } from './consumed-box';
import { ProppantContainer } from './proppant-container';
import { Proppant } from './proppant';

export class Box implements ProppantContainer {
  proppant: Proppant;
  actualRun: number;
  consumedContainer: ConsumedBox;
  position: number;
  type: ContainerType = ContainerType.boxes;

  constructor(
    public id: string,
    position: number,
    consumedContainer: ConsumedBox,
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
    this.position = position;
  }
}
