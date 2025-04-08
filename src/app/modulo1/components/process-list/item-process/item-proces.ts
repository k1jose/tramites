interface ProcessItem {
    id: number;
    title: string;
    createdAt: Date;
    status: 'pending' | 'in_progress' | 'completed' | 'rejected';
  }
  