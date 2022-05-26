import { Email, EmailType } from './email';

export class ChemicalOrder extends Email {
  constructor(
    public jobId: string,
    public to = '',
    public cc = '',
    public subject = '',
    public body = '',
    public vendor = '[Vendor]',
    public chemical = '[Chemical]',
    public poNumber = '[PO Number]',
    public deliveredAt = '[Delivered at]',
    public type: EmailType = EmailType.CHEMICAL_ORDER
  ) {
    super(jobId, to, cc, subject, body);
  }
}
