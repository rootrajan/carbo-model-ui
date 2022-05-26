import { PumpSide } from './pump-side';
import { Chemical } from './chemical';

export class Strap {
  constructor(
    public wellId: string,
    public start: number = 0,
    public end: number = 0,
    public used = 0,
    public rawUsed: number = 0,
    public hasDigitalGauge = false,
    public chemical?: Chemical,
    public transportType?: string,
    public desiredStrength?: string,
    public laDaNumber?: string,
    public side?: PumpSide,
    public strengthBaume?: string,
    public stage?: number,
    public desireStrengthFromChemicalId?: string
  ) {}

  getRawUsed(): number {
    return this.rawUsed;
  }
}
