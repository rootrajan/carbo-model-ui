import { Proppant } from '../proppant';
import { ProppantContainer } from '../proppant-container';
import { ContainerType } from '../proppant-delivery-entry';
import { ProppantStage } from '../proppant-stage';

describe('ProppantStage', () => {
  it('should create an instance', () => {
    expect(new ProppantStage('job1', 'well1')).toBeTruthy();
  });

  it('should return correct getAllSubmittedContainer', () => {
    const runOrder1: ProppantContainer = {
      type: ContainerType.bins,
      proppant: new Proppant('1', 'proppant 1'),
      actualRun: 1,
      consumedContainer: {
        id: '1',
        type: 'type',
        bol: 'bol',
        initialWtAmount: 0,
        proppant: 'propant',
        wtAmount: 0,
      },
      position: 0
    };

    const runOrder2: ProppantContainer = {
      type: ContainerType.silos,
      proppant: new Proppant('1', 'proppant 1'),
      actualRun: 1,
      consumedContainer: {
        id: '1',
        type: 'type',
        bol: 'bol',
        initialWtAmount: 0,
        proppant: 'propant',
        wtAmount: 0,
      },
      position: 0
    };

    const runOrder3: ProppantContainer = {
      type: ContainerType.silos,
      proppant: new Proppant('1', 'proppant 1'),
      actualRun: 1,
      consumedContainer: {
        id: '1',
        type: 'type',
        bol: 'bol',
        initialWtAmount: 0,
        proppant: 'propant',
        wtAmount: 0,
      },
      position: 0
    };

    const entry1 = new ProppantStage('1', '1');
    entry1.runOrders = [runOrder1];
    expect(entry1.getAllSubmittedContainer('boxes')).toContain(runOrder1);

    const entry2 = new ProppantStage('1', '1');
    entry2.silos['1'] = runOrder2;
    entry2.silos['2'] = runOrder3;
    expect(entry2.getAllSubmittedContainer('silos')).toContain(runOrder2);
    expect(entry2.getAllSubmittedContainer('silos')).toContain(runOrder3);
  });
});
