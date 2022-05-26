import { Contact } from './contact';
import { Syncable } from './syncable';

export class EmailGroup implements Syncable {
  constructor(public name = '', public contacts: Contact[] = []) {}

  id!: string;
  ts!: number;
  created: number = new Date().getTime();
  display = '';
  value = '';

  public getDisplayContacts(): string {
    const limit = 50;
    const allEmails: string = this.contacts
      .map((each) => each.email)
      .join(', ');
    return allEmails.length > limit
      ? allEmails.substr(0, limit) + '...'
      : allEmails;
  }

  public expandToEmails(): string {
    const allEmails: string = this.contacts
      .map((each) => each.email)
      .join('; ');
    return allEmails;
  }
}
