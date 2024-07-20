export enum TodoStatus {
  COMPLETED,
  PENDING,
}

export interface Todo {
  title: string;
  description: string;
  status: TodoStatus;
  dueDate?: Date;
  isFavorite?: boolean;
}
