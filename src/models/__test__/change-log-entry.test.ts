import {
  ChangeLogAction,
  ChangeLogEntry,
  ChangeLogObjectType,
} from '../change-log-entry';

describe('ChangeLogEntry', () => {
  it('should create an instance', () => {
    expect(
      new ChangeLogEntry(
        new Date(),
        ChangeLogObjectType.FIELD_TICKET,
        ChangeLogAction.CREATE,
        'me',
        'org1',
        'before',
        'after'
      )
    ).toBeTruthy();
  });
});
