export enum TodoStatus {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
}

export interface Todo {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
  dueDate?: Date;
  isFavorite?: boolean;
}
