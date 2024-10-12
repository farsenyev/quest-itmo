import { db } from '@/lib/db';
import { createResponse } from '@/lib/createResponse';

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const { userId, qrData }: { userId: number; qrData: string } = body;

    if (!userId || !qrData) {
      return createResponse({ error: 'Not enough data', status: 500 });
    }

    return createResponse({
      data: { message: `User: ${userId} scanned QR: ${qrData}` },
      status: 200,
    });
  } catch (err) {
    if (err instanceof Error) {
      return createResponse({ error: err.message, status: 500 });
    }
    return createResponse({ error: 'Unknown error', status: 500 });
  }
};
