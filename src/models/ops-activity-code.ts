/**
 * Node for code item
 */
export class OpsActivityCode {
  id = '';
  name = '';
  children: OpsActivityCode[] = [];
  isEditing = false;

  constructor() {}
}
