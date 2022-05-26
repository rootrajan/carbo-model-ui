export class ChemicalUsed {
  constructor (
    public id = 0,
    public date?: Date,
    public partial?: number,
    public submittedAmount?: number,
    public adjustedAmount?: number,
    public well?: string,
    public stage?: number
  ) {}
}
