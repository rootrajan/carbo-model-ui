import { Role } from './role';
import { OrganizationType } from './organization';

export class User {
  constructor(
    public userName: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public title: string,
    public authorities: Role[],
    public organizationId: string,
    public organization: string,
    public organizationType: OrganizationType,
    public fullName?: string,
    public access_token?: string,
    public refresh_token?: string,
    public districtId?: string,
    public signature?: string
  ) {}
  id!: string;
}
