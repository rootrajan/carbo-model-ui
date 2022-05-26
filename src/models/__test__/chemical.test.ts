import { Chemical } from '..';

describe('Chemical', () => {
  it('should return correct fullname', () => {
    const entry1 = new Chemical();
    entry1.name = 'a';
    entry1.description = 'b';
    expect(entry1.fullName).toBe('a - b');

    const entry2 = new Chemical();
    entry2.name = 'a';
    expect(entry2.fullName).toBe('a');
  });
});
