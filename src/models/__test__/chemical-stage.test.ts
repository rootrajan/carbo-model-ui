import { ChemicalStage, Strap } from '..';

describe('ChemicalStage', () => {
  it('should contains all submitted straps', () => {
    const entry1 = new ChemicalStage('1', '1');

    const strap1 = new Strap('1');
    const strap2 = new Strap('2');
    const strap3 = new Strap('3');
    const strap4 = new Strap('4');

    entry1.chemicalAdditionUnit1 = [strap1];
    entry1.chemicalAdditionUnit2 = [strap2];
    entry1.isosTransport = [strap3];
    entry1.dryAdd = [strap4];

    const submittedStraps = entry1.getAllSubmittedStraps();
    
    expect(submittedStraps).toContain(strap1);
    expect(submittedStraps).toContain(strap2);
    expect(submittedStraps).toContain(strap3);
    expect(submittedStraps).toContain(strap4);
  });
});
