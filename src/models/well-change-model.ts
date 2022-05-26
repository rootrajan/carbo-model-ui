export class WellChangeModel {
  constructor(
    public action = '',
    public organizationId = '',
    public wellName = '',
    public wellAPI = '',
    public wellId = '',
    public totalStages = 0,
    public fracproId: number = 0
  ) {}
}
