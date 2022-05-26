import { Proppant } from './proppant';
import { SetupContainer } from './setup-container';
import { ContainerType } from './proppant-delivery-entry';

export class SetupSilo extends SetupContainer {
  constructor(
    public position: number,
    public type = ContainerType.silos,
    public proppant?: Proppant,
    public name?: string,
    public maxCapacity?: number
  ) {
    super(position, ContainerType.silos, proppant);
    if (!type) {
      this.type = ContainerType.silos;
    }
  }

  public get fullName(): string {
    if (this.name && this.name.length > 0) {
      return this.name;
    } else {
      return 'SILO ' + this.position.toString();
    }
  }
}
