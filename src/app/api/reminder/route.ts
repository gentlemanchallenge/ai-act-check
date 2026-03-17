import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendDeadlineReminderEmail } from '@/lib/email';

const DEADLINE = new Date('2026-08-02T00:00:00Z');
const REMINDER_DAYS = [90, 60, 30, 14, 7];
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ai-act-check.info';

export async function POST(req: NextRequest) {
  // Verify cron secret
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const now = new Date();
    const daysUntilDeadline = Math.ceil(
      (DEADLINE.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    );

    // Check if today is a reminder day
    const shouldSend = REMINDER_DAYS.includes(daysUntilDeadline);
    if (!shouldSend) {
      return NextResponse.json({ message: `No reminder today. ${daysUntilDeadline} days until deadline.` });
    }

    // Get confirmed, non-unsubscribed subscribers
    const subscribers = await prisma.subscriber.findMany({
      where: {
        confirmed: true,
        unsubscribed: false,
      },
    });

    let sent = 0;
    for (const sub of subscribers) {
      // Check if we already sent this reminder level
      if (sub.remindersSent >= REMINDER_DAYS.indexOf(daysUntilDeadline) + 1) {
        continue;
      }

      const unsubscribeUrl = `${SITE_URL}/api/unsubscribe?email=${encodeURIComponent(sub.email)}`;

      try {
        await sendDeadlineReminderEmail(sub.email, daysUntilDeadline, unsubscribeUrl);

        await prisma.subscriber.update({
          where: { id: sub.id },
          data: {
            remindersSent: { increment: 1 },
            lastReminderAt: now,
          },
        });

        sent++;
      } catch (err) {
        console.error(`Failed to send reminder to ${sub.email}:`, err);
      }
    }

    return NextResponse.json({
      message: `Sent ${sent} reminders. ${daysUntilDeadline} days until deadline.`,
    });
  } catch (error) {
    console.error('Reminder cron error:', error);
    return NextResponse.json({ error: 'Interner Fehler' }, { status: 500 });
  }
}
