import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { createTodo, getTodo } from '../db/mongodb';
import { Todo, TodoStatus } from './type';

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const query = (searchParams.get('q') || '').toLowerCase();
  const status = (searchParams.get('s') || '').toUpperCase();
  const resTodo = getTodo().filter((todo) => {
    return (todo.title.toLowerCase().includes(query) || todo.description.toLowerCase().includes(query)) && todo.status.includes(status);
  });
  return NextResponse.json(resTodo);
};

export const POST = async (request: NextRequest) => {
  const newTodo: Todo = await request.json();
  if (!newTodo.title || !newTodo.description) {
    return NextResponse.json(
      {
        message: 'Required: title, description field',
      },
      { status: StatusCodes.BAD_REQUEST }
    );
  }

  if (newTodo.dueDate) {
    newTodo.dueDate = new Date(newTodo.dueDate);
  }

  newTodo.isFavorite = newTodo.isFavorite || false;
  newTodo.status = newTodo.status || TodoStatus.PENDING;

  return NextResponse.json(
    createTodo(newTodo),
    {
      status: StatusCodes.CREATED,
    }
  );
};
