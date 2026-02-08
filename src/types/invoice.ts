export type InvoiceType = {
  invoiceId: number;
  invoiceNumber: string;
  invoiceTitle: string;
  projectName: string;
  dateCreated: string;
  dueDate: string;
  currency: string;
  supplier: {
    id: number;
    name: string;
    address: string;
    vatNumber: null;
    companyRegNo: number;
  };
  buyer: {
    id: number;
    name: string;
    address: string;
    vatNumber: null;
    companyRegNo: number;
  };
  invoiceItems: Array<{
    id: number;
    description: string;
    qty: number;
    unitPrice: number;
    vatAmount: number;
    total: number;
  }>[];
  vatRate: string;
  subTotal: number;
  vatTotal: number;
  total: number;
  invoiceType: string;
  status: string;
  itemsInInvoice: number;
  projectReference: string;
  rejectionDetails: null;
  attachments: [];
};