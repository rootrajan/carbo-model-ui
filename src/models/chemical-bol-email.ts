import { Email, EmailType } from './email';

export class ChemicalBOLEmail extends Email {
  constructor(
    public jobId: string,
    public to = '',
    public cc = '',
    public subject = '',
    public body = '',
    public chemical = '[Chemical]',
    public bol = '[BOL]',
    public poNumber = '[PO Number]',
    public netReceived = 0.0,
    public bolQuantity = 0.0,
    public type: EmailType = EmailType.CHEMICAL_BOL
  ) {
    super(jobId, to, cc, subject, body);
  }
}
