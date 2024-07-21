import { Todo, TodoStatus } from '../todo/type';

export const todo: Todo[] = [
  {
    id: "1",
    title: 'Finish Algo Trading App Update',
    description: 'Complete the integration of additional trading signals and test for accuracy.',
    status: TodoStatus.PENDING,
    dueDate: new Date('2024-07-25'),
    isFavorite: true,
  },
  {
    id: "2",
    title: 'Prepare Monthly Performance Report',
    description: 'Generate and analyze the monthly performance report of the trading app for July 2024.',
    status: TodoStatus.COMPLETED,
    dueDate: new Date('2024-07-31'),
    isFavorite: false,
  },
];
