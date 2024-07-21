import { todo } from '../mock/todo';
import { Todo } from '../todo/type';

let todoId = 0;

export const getTodo = (): Todo[] => {
  return todo;
};

export const createTodo = (newTodo: Todo): Todo => {
  todoId += 1;
  newTodo.id = todoId.toString();
  todo.push(newTodo);
  return newTodo;
};

export const getTodoById = (todoId: string): Todo | null => {
  return getTodo().find((t) => t.id == todoId) || null;
};

export const deleteTodoById = (todoId: string): boolean => {
  console.log(todo);
  const todoIndex = todo.findIndex((t) => t.id === todoId);
  if (todoIndex === -1) {
    return false;
  }

  todo.splice(todoIndex, 1);
  return true;
};
