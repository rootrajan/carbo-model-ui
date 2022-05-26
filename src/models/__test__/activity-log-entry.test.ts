import { ActivityLogEntry } from '..';

const ONE_SECOND_TO_MS = 1000;

describe('ActivityLogEntry', () => {
  it('should return correct duration', () => {
    const entry1 = new ActivityLogEntry('1', new Date(), 4, '15:00', '16:00');
    expect(entry1.duration).toBe(3600 * ONE_SECOND_TO_MS);

    const entry2 = new ActivityLogEntry(
      '1',
      new Date(),
      4,
      '20210811 15:00',
      '20210811 15:30'
    );
    expect(entry2.duration).toBe(1800 * ONE_SECOND_TO_MS);

    const entry3 = new ActivityLogEntry('1', new Date(), 4, '', '');
    expect(entry3.duration).toBe(0);

    const entry4 = new ActivityLogEntry('1', new Date(), 4, '20:00', '00:00');
    expect(entry4.duration).toBe(3600 * 4 * ONE_SECOND_TO_MS);
  });

  it('should return correct isNPT', () => {
    const entry1 = new ActivityLogEntry('1');
    entry1.opsActivity = 'Scheduled Time';
    expect(entry1.isNPT()).toBe(false);

    const entry2 = new ActivityLogEntry('1');
    entry2.opsActivity = 'Maintenance';
    expect(entry2.isNPT()).toBe(true);
  });

  it('should return correct getLatestActivityCode', () => {
    const entry1 = new ActivityLogEntry('1');
    entry1.subNptCode = 'a';
    entry1.eventOrNptCode = 'b';
    expect(entry1.getLatestActivityCode()).toBe('a');

    const entry2 = new ActivityLogEntry('1');
    entry2.eventOrNptCode = 'b';
    expect(entry2.getLatestActivityCode()).toBe('b');
  });
});
