export enum ProcessStatus {
  Pending = 'pending',
  InProgress = 'in_progress',
  Completed = 'completed',
  Rejected = 'rejected',
  Finished = 'finished',
}


export interface ProcessItem {
  id: number;
  title: string;
  createdAt: Date;
  status: ProcessStatus;
}
