export interface PendingOrder {
  _id: string;
  orderId: string;
  paperDetails: string;
  charges: number;
  status: string;
  deadline: string;
  rating?: number;
  files?: string[] | undefined;
}
