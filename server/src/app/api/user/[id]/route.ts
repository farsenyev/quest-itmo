import { db } from '@/lib/db';
import { createResponse } from '@/lib/createResponse';

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const vkUserId = +params.id;

    const user = await db.user.findUnique({ where: { vkUserId } });

    if (!user) {
      return createResponse({ data: null, status: 200 });
    }

    return createResponse({ data: user, status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      return createResponse({ error: err.message, status: 500 });
    }
    return createResponse({ error: 'Unknown error', status: 500 });
  }
};
