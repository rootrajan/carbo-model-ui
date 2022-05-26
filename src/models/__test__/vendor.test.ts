import { Vendor, Contact } from '..';

describe('Vendor', () => {
  it('should return correct getDisplayContacts', () => {
    const contact1 = new Contact(1, 'abc@test.com');
    const contact2 = new Contact(1, 'def@test.com');
    const contact3 = new Contact(1, 'hez@test.com');

    const entry1 = new Vendor('1');
    entry1.contacts = [contact1, contact2, contact3];

    expect(entry1.getDisplayContacts()).toBe('abc@test.com; def@test.com; hez@test.com');

    const entry2 = new Vendor('1');
    entry2.contacts = [contact1];

    expect(entry2.getDisplayContacts()).toBe('abc@test.com');
  });
});
