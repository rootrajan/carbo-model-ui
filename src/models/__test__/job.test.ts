import { ActivityLogEntry, DailyJobRecord, Job, OnSiteEquipment } from '..';
import { Well } from '../well';

describe('Job', () => {
  it('should return correct getAllOnSiteEquipments', () => {
    const eq1 = new OnSiteEquipment('1');
    const eq2 = new OnSiteEquipment('2');
    const eq3 = new OnSiteEquipment('3');
    const eq4 = new OnSiteEquipment('4');
    const eq5 = new OnSiteEquipment('5');
    const eq6 = new OnSiteEquipment('6');
    const eq7 = new OnSiteEquipment('7');

    const job = new Job();
    job.blenders = [eq1];
    job.hydrationUnits = [eq2];
    job.chemAds = [eq3];
    job.ironManifolds = [eq4];
    job.pumps = [eq5];
    job.dataVans = [eq6];
    job.silos = [eq7];

    expect(job.getAllOnSiteEquipments()).toContain(eq1);
    expect(job.getAllOnSiteEquipments()).toContain(eq2);
    expect(job.getAllOnSiteEquipments()).toContain(eq3);
    expect(job.getAllOnSiteEquipments()).toContain(eq4);
    expect(job.getAllOnSiteEquipments()).toContain(eq5);
    expect(job.getAllOnSiteEquipments()).toContain(eq6);
    expect(job.getAllOnSiteEquipments()).toContain(eq7);
  });

  it('should return correct estimatedFinishedDate', () => {
    const well1 = new Well('1');
    well1.totalStages = 4;
    const well2 = new Well('2');
    well2.totalStages = 6;

    const tsStart = 1629417600000; // 2021-08-20
    const tsFinish = 1629849600000; // 2021-08-25

    const job1 = new Job();
    expect(job1.estimatedFinishedDate()).toEqual(undefined);

    const job2 = new Job();
    job2.startDate = tsStart;
    job2.wells = [well1, well2];
    expect(job2.estimatedFinishedDate()).toEqual(undefined);

    const job3 = new Job();
    job3.startDate = tsStart;
    job3.targetStagesPerDay = 2;
    job3.wells = [well1, well2];
    expect(job3.estimatedFinishedDate()).toEqual(new Date(tsFinish));
  });

  it('should return correct getPercentDone', () => {
    const well1 = new Well('1');
    well1.totalStages = 4;
    const well2 = new Well('2');
    well2.totalStages = 6;

    const jobRecord = new DailyJobRecord(
      '1',
      new Date(),
      '1',
      'Fleet 1',
      'Operator',
      2,
      2,
      0,
      8
    );

    const job1 = new Job('1');
    job1.id = '1';
    expect(job1.getPercentDone([jobRecord])).toEqual(0);

    const job2 = new Job('1');
    job2.id = '1';
    job2.wells = [well1, well2];
    expect(job2.getPercentDone([jobRecord])).toEqual(20);

    const job3 = new Job('1');
    job3.id = '1';
    job3.wells = [well1, well2];
    expect(
      job3.getPercentDone([
        jobRecord,
        jobRecord,
        jobRecord,
        jobRecord,
        jobRecord,
      ])
    ).toEqual(100);

    const job4 = new Job('1');
    job4.id = '1';
    job4.wells = [well1, well2];
    expect(
      job4.getPercentDone([
        jobRecord,
        jobRecord,
        jobRecord,
        jobRecord,
        jobRecord,
        jobRecord,
      ])
    ).toEqual(100);
  });

  it('should return correct getTargetPercent', () => {
    const well1 = new Well('1');
    well1.totalStages = 4;
    const well2 = new Well('2');
    well2.totalStages = 6;

    const tsStart = 1629417600000; // 2021-08-20

    const job1 = new Job();
    expect(job1.getTargetPercent()).toEqual(0);

    jest.useFakeTimers('modern');
    jest.setSystemTime(1629676800000);  // 2021-08-23

    const job2 = new Job();
    job2.targetStagesPerDay = 2;
    job2.startDate = tsStart;
    job2.wells = [well1, well2];

    expect(job2.getTargetPercent()).toEqual(60);

    jest.useRealTimers();
  });

  it('should return correct getLastDate', () => {
    const tsStart = 1629417600000; // 2021-08-20

    const activityEntry = new ActivityLogEntry('1');
    activityEntry.day = 2;

    const job1 = new Job();
    expect(job1.getLastDate(undefined)).toEqual(undefined);

    const tsTarget = 1629504000000;  // 2021-08-21
    const dateTarget = new Date(tsTarget);
    const job2 = new Job();
    job2.startDate = tsStart;
    expect(job2.getLastDate(activityEntry)).toEqual(dateTarget);
  });
});
