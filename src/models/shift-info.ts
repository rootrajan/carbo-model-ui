export enum Shift {
  DAY = 'DAY',
  NIGHT = 'NIGHT',
}

export class ShiftInfo {
  constructor(
    public name: Shift | null,
    public start: number | null,
    public end: number | null
  ) {}
}
