import { db } from '@/lib/db';
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

    return createResponse({ data: user, status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      return createResponse({ error: err.message, status: 500 });
    }
    return createResponse({ error: 'Unknown error', status: 500 });
  }
};
