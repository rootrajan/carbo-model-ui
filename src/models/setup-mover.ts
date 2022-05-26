import { SetupContainer } from './setup-container';
import { SetupBin } from './setup-bin';
import { ContainerType } from './proppant-delivery-entry';

export class SetupMover extends SetupContainer {
  constructor(
    public position: number,
    // public binNumber: number,
    public bins: SetupBin[] = [],
    public moverNumber?: number
  ) // public proppant?: Proppant
  {
    super(position, ContainerType.movers);
  }
}
