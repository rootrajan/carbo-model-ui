export class Transport {
  constructor(
    public id = '',
    public name = '',
    public inchToGallon: Record<string, string> = {}
  ) {}

  public get gallonToInch(): Record<string, string> {
    const gallonToInch: Record<string, string> = {};

    Object.keys(this.inchToGallon).forEach((inch) => {
      const gal = this.inchToGallon[inch];
      gallonToInch[gal] = inch;
    });

    return gallonToInch;
  }
}
