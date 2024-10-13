import { db } from '@/lib/db';
import { createResponse } from '@/lib/createResponse';

export const GET = async (req: Request) => {
  try {
    const events = await db.event.findMany();

    return createResponse({ data: events, status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      return createResponse({ error: err.message, status: 500 });
    }
    return createResponse({ error: 'Unknown error', status: 500 });
  }
};
