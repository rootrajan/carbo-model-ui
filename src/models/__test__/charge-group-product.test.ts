import { ChargeGroupProduct } from '..';

describe('ChangeGroupProduct', () => {
  it('should return correct fullname', () => {
    const test1 = new ChargeGroupProduct('a', 'b');
    expect(test1.fullName).toBe('a - b');

    const entry2 = new ChargeGroupProduct('a', '');
    expect(entry2.fullName).toBe('a');
  });
});
