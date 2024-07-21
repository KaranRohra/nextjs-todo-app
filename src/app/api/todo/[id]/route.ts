import { NextRequest, NextResponse } from 'next/server';
import { deleteTodoById, getTodoById } from '../../db/mongodb';
import { StatusCodes } from 'http-status-codes';

interface IParams {
  params: { id: string };
}
export const GET = (request: NextRequest, { params }: IParams) => {
  const todo = getTodoById(params.id);
  if (todo) return NextResponse.json(todo);

  return NextResponse.json(
    {
      message: 'Todo not found with id: ' + params.id,
    },
    {
      status: StatusCodes.NOT_FOUND,
    }
  );
};

export const DELETE = (request: NextRequest, { params }: IParams) => {
  const isTodoDeleted = deleteTodoById(params.id);
  if (isTodoDeleted) {
    return NextResponse.json({
      message: 'Todo deleted successfully',
    });
  }

  return NextResponse.json(
    {
      message: 'Todo not found with id: ' + params.id,
    },
    {
      status: StatusCodes.NOT_FOUND,
    }
  );
};
