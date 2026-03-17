import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendWelcomeWithResultEmail } from '@/lib/email';

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token');

  if (!token) {
    return NextResponse.redirect(new URL('/de?error=invalid_token', req.url));
  }

  try {
    const subscriber = await prisma.subscriber.findUnique({
      where: { confirmToken: token },
    });

    if (!subscriber) {
      return NextResponse.redirect(new URL('/de?error=invalid_token', req.url));
    }

    // Confirm subscriber
    await prisma.subscriber.update({
      where: { id: subscriber.id },
      data: {
        confirmed: true,
        confirmToken: null,
      },
    });

    // Send welcome email with result if available
    if (subscriber.aiSystemId) {
      const aiSystem = await prisma.aISystem.findUnique({
        where: { id: subscriber.aiSystemId },
      });

      if (aiSystem && aiSystem.riskLevel) {
        await sendWelcomeWithResultEmail(subscriber.email, {
          systemName: aiSystem.name,
          riskLevel: aiSystem.riskLevel,
          userRole: aiSystem.userRole || 'DEPLOYER',
          resultId: aiSystem.id,
        });
      }
    }

    // Redirect to result or home
    const redirectUrl = subscriber.aiSystemId
      ? `/de/ergebnis/${subscriber.aiSystemId}?confirmed=true`
      : '/de?confirmed=true';

    return NextResponse.redirect(new URL(redirectUrl, req.url));
  } catch (error) {
    console.error('Confirm error:', error);
    return NextResponse.redirect(new URL('/de?error=server_error', req.url));
  }
}
