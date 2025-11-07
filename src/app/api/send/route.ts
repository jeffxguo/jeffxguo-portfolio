import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, message } = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'contact@jeffxguo.me',
      to: ['jeffxguo@gmail.com'],
      subject: 'New message from your portfolio',
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error({ error });
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
