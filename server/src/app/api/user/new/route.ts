import { db } from '@/lib/db';
import { createResponse } from '@/lib/createResponse';

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const {
      vkUserId,
      role,
    }: { vkUserId: number; role: 'STUDENT' | 'EMPLOYEE' } = body;

    if (!vkUserId || !role) {
      return createResponse({ error: 'Unknown error', status: 500 });
    }

    const newUser = await db.user.create({
      data: { vkUserId, role },
    });

    return createResponse({ data: newUser, status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      return createResponse({ error: err.message, status: 500 });
    }
    return createResponse({ error: 'Unknown error', status: 500 });
  }
};
