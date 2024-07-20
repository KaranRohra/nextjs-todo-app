import { NextRequest, NextResponse } from 'next/server';
import { getUser } from '../db/mongodb';
import { StatusCodes } from 'http-status-codes';
import { headers } from 'next/headers';

export const GET = async (request: NextRequest) => {
  let res, status;
  const requestHeaders = headers();
  const userId = requestHeaders.get('userId');
  if (!userId) {
    return NextResponse.json({ message: 'userId is missing in Headers' }, { status: StatusCodes.BAD_REQUEST });
  }
  const user = getUser().find((u) => u.id === userId);
  if (user) {
    status = StatusCodes.OK;
    res = {
      data: user.todo,
      message: 'User found successfully',
    };
  } else {
    status = StatusCodes.BAD_REQUEST;
    res = {
      message: 'User not found with userId: ' + userId,
    };
  }

  return NextResponse.json(res, { status: status });
};
