export class ChangePassword {
  constructor(
    public userId: string,
    public curPassword: string,
    public newPassword: string
  ) {}
}
