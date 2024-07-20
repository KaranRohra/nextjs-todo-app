import { TodoStatus } from '../todo/type';
import { User } from '../user/type';

export const users: User[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    todo: [
      {
        title: 'Finish Algo Trading App Update',
        description: 'Complete the integration of additional trading signals and test for accuracy.',
        status: TodoStatus.PENDING,
        dueDate: new Date('2024-07-25'),
        isFavorite: true,
      },
      {
        title: 'Prepare Monthly Performance Report',
        description: 'Generate and analyze the monthly performance report of the trading app for July 2024.',
        status: TodoStatus.PENDING,
        dueDate: new Date('2024-07-31'),
        isFavorite: false,
      },
    ],
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    password: 'securepass456',
    todo: [
      {
        title: 'Review Spring Boot Migration',
        description: 'Check the performance improvements and user feedback after migrating to Spring Boot and NextJS.',
        status: TodoStatus.COMPLETED,
        isFavorite: true,
      },
      {
        title: 'Update Documentation',
        description: 'Revise and update the project documentation to reflect recent changes.',
        status: TodoStatus.PENDING,
        dueDate: new Date('2024-08-01'),
        isFavorite: false,
      },
    ],
  },
  {
    id: '3',
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    password: 'mysecretpass789',
    todo: [
      {
        title: 'Organize Team Meeting',
        description: 'Schedule and organize the team meeting to discuss project milestones.',
        status: TodoStatus.PENDING,
        dueDate: new Date('2024-07-28'),
        isFavorite: true,
      },
      {
        title: 'Code Review',
        description: 'Perform code review for the new features added by the development team.',
        status: TodoStatus.PENDING,
        dueDate: new Date('2024-07-29'),
        isFavorite: false,
      },
    ],
  },
];
