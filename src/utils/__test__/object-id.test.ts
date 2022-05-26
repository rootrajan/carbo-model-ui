import { generateObjectId } from '../object-id';

describe('generateObjectId', () => {
  test('Should return value', () => {
    const objectId = generateObjectId();
    expect(objectId).not.toBeNull();
  }),
  test('Returned values should not duplicate', () => {
    const objectId1 = generateObjectId();
    const objectId2 = generateObjectId();
    expect(objectId1).not.toStrictEqual(objectId2);
  });
});
