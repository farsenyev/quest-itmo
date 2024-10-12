import { NextResponse } from 'next/server';

type ApiResponse<T> = {
  data?: T;
  error?: { message: string };
} | null;

export const createResponse = <T>({
  data,
  error,
  status,
}: {
  data?: T;
  error?: string;
  status: number;
}) => {
  const responseBody: ApiResponse<T> = data
    ? { data }
    : error
    ? { error: { message: error } }
    : null;

  return new NextResponse(JSON.stringify(responseBody), { status });
};
