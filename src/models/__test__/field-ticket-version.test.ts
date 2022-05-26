import { FieldTicketVersion, FieldTicketLineItem } from '..';

describe('FieldTicketVersion', () => {
  it('should return correct charges', () => {
    const line1 = new FieldTicketLineItem('1', 1, 'Desc 1', 100, 'uom 1');
    const line2 = new FieldTicketLineItem('2', 1, 'Desc 2', 200, 'uom 2');
    const line3 = new FieldTicketLineItem('3', 1, 'Desc 3', 300, 'uom 3');
    const line4 = new FieldTicketLineItem('4', 1, 'Desc 4', 400, 'uom 4');
    const line5 = new FieldTicketLineItem('5', 1, 'Desc 5', 500, 'uom 5');
    const line6 = new FieldTicketLineItem('6', 1, 'Desc 6', 600, 'uom 6');

    const version = new FieldTicketVersion();
    version.chemicalCharges = [line1];
    version.equipmentCharges = [line2];
    version.mileageCharges = [line3];
    version.fuelCharges = [line4];
    version.miscCharges = [line5];
    version.proppantCharges = [line6];

    expect(version.getChargesFromChargeGroup('chemicalCharges')).toContain(line1);
    expect(version.getChargesFromChargeGroup('equipmentCharges')).toContain(line2);
    expect(version.getChargesFromChargeGroup('mileageCharges')).toContain(line3);
    expect(version.getChargesFromChargeGroup('fuelCharges')).toContain(line4);
    expect(version.getChargesFromChargeGroup('miscCharges')).toContain(line5);
    expect(version.getChargesFromChargeGroup('proppantCharges')).toContain(line6);
    expect(version.getChargesFromChargeGroup('unknown')).toEqual([]);
  });
});
