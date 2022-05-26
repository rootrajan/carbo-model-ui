import { SetupContainer } from './setup-container';
import { Proppant } from './proppant';
import { ContainerType } from './proppant-delivery-entry';

export class SetupBin extends SetupContainer {
  constructor(
    // position = bin number
    public position: number,
    public moverNumber?: number,
    public proppant?: Proppant
  ) {
    super(position, ContainerType.bins, proppant);
  }
}
