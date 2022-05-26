import { ConsumedContainer } from './consumed-container';

export class ConsumedBox implements ConsumedContainer {
  type = 'boxes';
  constructor(
    public id: string,
    public proppant: string,
    public bol: string,
    public initialWtAmount: number,
    public wtAmount: number,
    public boxNumber?: string,
    public partial?: number,
    public uom?: string,
    public used?: boolean,
    public subBox?: number
  ) {}
}
