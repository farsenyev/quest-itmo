import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { createResponse } from '@/lib/createResponse';

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const userId = +params.id;

    const user = await db.user.findUnique({ where: { id: userId } });

    if (!user) {
      return createResponse({ status: 200 });
    }

    return createResponse({ status: 200 });
  } catch (err: any) {
    return new NextResponse(
      JSON.stringify({ error: 'Error fetching user: ' + err.message }),
      {
        status: 500,
      }
    );
  }
};
