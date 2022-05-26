import { ConsumedContainer } from './consumed-container';

export class ConsumedBin implements ConsumedContainer {
  type = 'bins';
  constructor(
    public id: string,
    public proppant: string,
    public initialWtAmount: number,
    public wtAmount: number,
    public moverNumber: number,
    public binNumber: number,
    public bol: string,
    public partial?: number,
    public uom?: string,
    public used?: boolean
  ) {}
}
