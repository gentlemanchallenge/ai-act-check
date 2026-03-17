import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendDoubleOptInEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, aiSystemId, source } = body as {
      email: string;
      aiSystemId?: string;
      source?: string;
    };

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Ungültige E-Mail-Adresse' }, { status: 400 });
    }

    // Check if already subscribed
    const existing = await prisma.subscriber.findUnique({ where: { email } });

    if (existing) {
      if (existing.confirmed && !existing.unsubscribed) {
        return NextResponse.json({ message: 'Bereits angemeldet' });
      }
      if (existing.unsubscribed) {
        // Re-subscribe
        const confirmToken = crypto.randomUUID();
        await prisma.subscriber.update({
          where: { email },
          data: {
            unsubscribed: false,
            confirmed: false,
            confirmToken,
            aiSystemId: aiSystemId || existing.aiSystemId,
            source: source || existing.source,
          },
        });
        await sendDoubleOptInEmail(email, confirmToken);
        return NextResponse.json({ message: 'Bestätigungsmail gesendet' });
      }
    }

    // Create new subscriber
    const confirmToken = crypto.randomUUID();

    await prisma.subscriber.upsert({
      where: { email },
      update: {
        confirmToken,
        aiSystemId: aiSystemId || undefined,
        source: source || 'result_page',
      },
      create: {
        email,
        aiSystemId: aiSystemId || null,
        source: source || 'result_page',
        confirmToken,
      },
    });

    // Send double opt-in email
    await sendDoubleOptInEmail(email, confirmToken);

    return NextResponse.json({ message: 'Bestätigungsmail gesendet' });
  } catch (error) {
    console.error('Subscribe API error:', error);
    return NextResponse.json({ error: 'Interner Fehler' }, { status: 500 });
  }
}
