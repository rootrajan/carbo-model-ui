import { Proppant } from './proppant';
import { ContainerType } from './proppant-delivery-entry';

export class SetupContainer {
  constructor(
    public position: number,
    public type: ContainerType,
    public proppant?: Proppant,
    public name?: string,
    public maxCapacity?: number
  ) {}
}
