import { db } from '@/lib/db';
import { createResponse } from '@/lib/createResponse';

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const {
      vk_user_id,
      role,
    }: { vk_user_id: number; role: 'STUDENT' | 'EMPLOYEE' } = body;

    if (!vk_user_id || !role) {
      return createResponse({ error: 'Unknown error', status: 500 });
    }

    return createResponse({ data: body, status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      return createResponse({ error: err.message, status: 500 });
    }
    return createResponse({ error: 'Unknown error', status: 500 });
  }
};
