export interface ConsumedContainer {
  id: string;
  type: string;
  proppant: string;
  bol: string;
  initialWtAmount: number;
  wtAmount: number;
  partial?: number;
  uom?: string;
  used?: boolean;
}
