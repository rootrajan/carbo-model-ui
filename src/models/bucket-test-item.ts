export class BucketTestItem {
  constructor(
    public id = 0,
    public chemAddPump = '',
    public chemical = '',
    public testedCleanRate = 0,
    public concentration = 0,
    public targetGallons = 0,
    public targetRate = 0,
    public designTimeSecs = 0,
    public actualTimeSecs = 0,
    public startPumpFactorPpu = 0,
    public calculatedAdjustmentPercent = 0,
    public adjustedPumpFactorPpu = 0,
    public comments = ''
  ) {}
}
