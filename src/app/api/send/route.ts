import { randomUUID } from 'node:crypto';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { to } = await request.json();

    const { data, error } = await resend.batch.send([
      {
        from: 'Resend Node.js SDK v4.1.2-canary.0 <4.1.2-canary.0@jopcmelo.dev>',
        to: [to],
        replyTo: 'delivered@resend.dev',
        subject: "Hello world",
        html: '<h1>Testing</h1>',
        headers: {
          'X-Entity-Ref-ID': randomUUID()
        }
      },
    ]);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}