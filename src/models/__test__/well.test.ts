import { Well, Chemical } from '..';

describe('Well', () => {
  it('should return correct getAllConfiguredChemicals', () => {
    const chem1 = new Chemical('1', ' 1');
    const chem2 = new Chemical('2', ' 2');
    const chem3 = new Chemical('3', ' 3');
    const chem4 = new Chemical('4', ' 4');
    const chem5 = new Chemical('5', ' 5');

    const entry1 = new Well('1');
    entry1.diverters = [chem1];
    entry1.acidAdditives = [chem2];
    entry1.slickwaters = [chem3];
    entry1.linearGelCrosslinks = [chem4];
    entry1.additionalChemicalTypes['5'] = [chem5];

    const chems = entry1.getAllConfiguredChemicals();

    expect(chems).toContainEqual(chem1);
    expect(chems).toContainEqual(chem2);
    expect(chems).toContainEqual(chem3);
    expect(chems).toContainEqual(chem4);
    expect(chems).toContainEqual(chem5);
  });
});
