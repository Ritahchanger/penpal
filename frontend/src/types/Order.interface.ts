// types/Order.interface.ts

export interface FileAttachment {
    fileName: string;
    downloadURL: string;
  }
  
  export interface Writer {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNo: string;
    qualifications: string;
  }
  
  export interface Order {
    _id: string;
    orderId: string;
    clientName: string;
    paperDetails?: string;
    subject?: string;
    time?: string;
    deadline: string;
    createdAt: string;
    updatedAt: string;
    status: "Pending" | "In Progress" | "In Review" | "Completed" | "Cancelled" | "Revision";
    charges: number;
    bids: number;
    biddedWriters: Writer[]; 
    files?: FileAttachment[];
    description?: string;
    writer: Writer | null; 
    assignedAt: string | null;
    penalty: number;
    inRevisionCount: number;
    __v: number;
  }
  