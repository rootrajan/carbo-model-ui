import { ProppantDeliveryEntry } from '../proppant-delivery-entry';
import { ProppantUsed } from '../proppant-used';

describe('ProppantDeliveryEntry', () => {
  it('should create an instance', () => {
    expect(new ProppantDeliveryEntry('job1')).toBeTruthy();
  });

  it('should return correct usedAmount', () => {
    const usedIn1 = new ProppantUsed('1');
    usedIn1.adjustedAmount = 4;
    const usedIn2 = new ProppantUsed('2');
    usedIn2.adjustedAmount = 6;
    const usedIn3 = new ProppantUsed('3');
    usedIn3.submittedAmount = 4;

    const entry1 = new ProppantDeliveryEntry('1');

    entry1.usedIn = [usedIn1, usedIn2, usedIn3];

    expect(entry1.usedAmount()).toBe(10);
  });

  it('should return correct remainAmount', () => {
    const usedIn1 = new ProppantUsed('1');
    usedIn1.adjustedAmount = 4;
    const usedIn2 = new ProppantUsed('2');
    usedIn2.adjustedAmount = 6;
    const usedIn3 = new ProppantUsed('3');
    usedIn3.submittedAmount = 4;

    const entry1 = new ProppantDeliveryEntry('1');
    expect(entry1.remainAmount()).toBe(0);

    const entry2 = new ProppantDeliveryEntry('1');
    entry2.wtAmount = 30;
    entry2.usedIn = [usedIn1, usedIn2, usedIn3];
    expect(entry2.remainAmount()).toBe(20);
  });

  it('should return correct allUsed', () => {
    const usedIn1 = new ProppantUsed('1');
    usedIn1.adjustedAmount = 4;
    const usedIn2 = new ProppantUsed('2');
    usedIn2.adjustedAmount = 6;
    const usedIn3 = new ProppantUsed('3');
    usedIn3.submittedAmount = 4;

    const entry1 = new ProppantDeliveryEntry('1');
    entry1.wtAmount = 30;
    entry1.usedIn = [usedIn1, usedIn2, usedIn3];
    expect(entry1.allUsed()).toBe(false);

    const entry2 = new ProppantDeliveryEntry('1');
    entry2.wtAmount = 10;
    entry2.usedIn = [usedIn1, usedIn2, usedIn3];
    expect(entry2.allUsed()).toBe(true);
  });
});
