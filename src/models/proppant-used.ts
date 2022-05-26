import { generateObjectId } from '../utils/object-id';

export class ProppantUsed {
  constructor(
    public id: string = generateObjectId(),
    public date?: Date,
    public partial?: number,
    public submittedAmount?: number,
    public adjustedAmount?: number,
    public well?: string,
    public stage?: number
  ) {}
}
