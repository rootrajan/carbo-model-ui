import { ChemicalDeliveryEntry } from '../chemical-delivery-entry';

describe('ChemicalDeliveryEntry', () => {
  it('should create an instance', () => {
    expect(new ChemicalDeliveryEntry('job1')).toBeTruthy();
  });

  it('should return correct usedAmount', () => {
    const entry1 = new ChemicalDeliveryEntry('1');

    entry1.usedIn = [
      {
        id: 1,
        submittedAmount: 10,
      },
      {
        id: 1,
        submittedAmount: 20,
      },
    ];

    expect(entry1.usedAmount()).toBe(30);
  });

  it('should return correct bolRawAmount', () => {
    const entry1 = new ChemicalDeliveryEntry('1');
    entry1.received = 40;
    entry1.rawGallons = 50;

    expect(entry1.bolRawAmount()).toBe(50);

    const entry2 = new ChemicalDeliveryEntry('1');
    entry2.received = 40;
    entry2.rawGallons = null;

    expect(entry2.bolRawAmount()).toBe(40);
  });

  it('should return correct getReturned', () => {
    const entry1 = new ChemicalDeliveryEntry('1');
    entry1.returned = 10;
    entry1.transferredToJob = 5;
    entry1.transferredToYard = 15;
    entry1.writeOffBalance = 25;

    expect(entry1.getReturned()).toBe(55);

    const entry2 = new ChemicalDeliveryEntry('1');
    entry2.received = 95;
    entry2.returned = 10;
    entry2.transferredToJob = 5;
    entry2.transferredToYard = 15;
    entry2.writeOffBalance = 25;

    entry2.uom = 'lb';
    entry2.strengthBaume = 'strength baume';
    entry2.rawGallons = 100;

    expect(entry2.getReturned()).toBe(57.89473684210527);

    const entry3 = new ChemicalDeliveryEntry('1');
    expect(entry3.getReturned()).toBe(0);
  });

  it('should return correct remainAmount', () => {
    const entry1 = new ChemicalDeliveryEntry('1');
    entry1.received = 95;
    entry1.returned = 10;
    entry1.transferredToJob = 5;
    entry1.transferredToYard = 15;
    entry1.writeOffBalance = 25;
    entry1.usedIn = [
      {
        id: 1,
        submittedAmount: 10,
      },
    ];

    expect(entry1.remainAmount()).toBe(30);

    const entry2 = new ChemicalDeliveryEntry('1');
    entry2.received = 95;
    entry2.returned = 10;
    entry2.transferredToJob = 5;
    entry2.transferredToYard = 15;
    entry2.writeOffBalance = 25;
    entry2.usedIn = [
      {
        id: 1,
        submittedAmount: 10,
      },
    ];

    entry2.uom = 'lb';
    entry2.strengthBaume = 'strength baume';
    entry2.rawGallons = 100;

    expect(entry2.remainAmount()).toBe(32.1);
  });

  it('should return correct bolAmount', () => {
    const entry1 = new ChemicalDeliveryEntry('1');
    entry1.received = 95;

    expect(entry1.bolAmount()).toBe(95);
  });
});
