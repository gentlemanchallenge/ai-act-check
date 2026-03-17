import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email');

  if (!email) {
    return NextResponse.redirect(new URL('/de', req.url));
  }

  try {
    await prisma.subscriber.updateMany({
      where: { email },
      data: { unsubscribed: true },
    });

    return new NextResponse(
      `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>Abgemeldet</title></head><body style="font-family:system-ui;max-width:500px;margin:80px auto;text-align:center;">
        <h1>Erfolgreich abgemeldet</h1>
        <p>Sie erhalten keine weiteren E-Mails von AI Act Check.</p>
        <p><a href="/de" style="color:#1e40af;">Zurück zur Startseite</a></p>
      </body></html>`,
      { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
  } catch {
    return NextResponse.redirect(new URL('/de', req.url));
  }
}
