import { Transport } from '..';

describe('Transport', () => {
  it('should return correct gallonToInch', () => {
    const entry1 = new Transport('1', 't1');
    entry1.inchToGallon['1'] = '2';
    expect(entry1.gallonToInch['2']).toBe('1');
  });
});
