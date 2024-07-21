import { todo } from '../mock/todo';
import { Todo } from '../todo/type';

export const getTodo = (): Todo[] => {
  return todo;
};

export const createTodo = (newTodo: Todo): Todo => {
  newTodo.id = (todo.length + 1).toString();
  todo.push(newTodo);
  return newTodo;
};
