import { Proppant } from './proppant';
import { ConsumedContainer } from './consumed-container';
import { ContainerType } from './proppant-delivery-entry';

export interface ProppantContainer {
  proppant: Proppant;
  actualRun: number;
  consumedContainer: ConsumedContainer;
  position: number;
  type: ContainerType;
}
