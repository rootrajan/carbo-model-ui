import { SetupSilo } from '..';
import { ContainerType } from '../proppant-delivery-entry';

describe('SetupSilo', () => {
  it('should return correct fullname and type', () => {
    const entry1 = new SetupSilo(1);
    expect(entry1.fullName).toBe('SILO 1');
    expect(entry1.type).toBe(ContainerType.silos);

    const entry2 = new SetupSilo(1, ContainerType.movers);
    entry2.name = 'a';
    expect(entry2.fullName).toBe('a');
    expect(entry2.type).toBe(ContainerType.movers);
  });
});
