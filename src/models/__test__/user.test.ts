import { OrganizationType } from '../organization';
import { User } from '../user';

describe('User', () => {
  it('should create an instance', () => {
    expect(
      new User(
        'userName',
        'password',
        'firstName',
        'lastName',
        'title',
        [],
        'organizationId',
        'organization',
        OrganizationType.OPERATOR
      )
    ).toBeTruthy();
  });
});
