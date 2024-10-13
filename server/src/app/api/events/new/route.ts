import { db } from '@/lib/db';
import { createResponse } from '@/lib/createResponse';

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const {
      id,
      authorId,
      description,
      endDate,
      startDate,
      title,
      imgSrc,
      url,
    }: {
      id: number;
      authorId: number;
      title: string;
      description: string;
      startDate: Date;
      endDate: Date;
      imgSrc?: string;
      url?: string;
    } = body;

    const user = await db.user.findUnique({ where: { vkUserId: authorId } });

    if (user) {
      const newEvent = await db.event.create({
        data: {
          authorVkId: user.vkUserId,
          description,
          endDate,
          startDate,
          title,
          userId: user.id,
          url,
          imgSrc,
        },
      });

      return createResponse({ data: newEvent, status: 200 });
    } else {
      return createResponse({ error: 'Unknown user', status: 500 });
    }
  } catch (err) {
    if (err instanceof Error) {
      return createResponse({ error: err.message, status: 500 });
    }
    return createResponse({ error: 'Unknown error', status: 500 });
  }
};
