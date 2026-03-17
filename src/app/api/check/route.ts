import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { classify } from '@/lib/classification';
import type { Answer } from '@/lib/classification/types';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { systemName, description, answers } = body as {
      systemName: string;
      description?: string;
      answers: Answer[];
    };

    if (!systemName || !answers || !Array.isArray(answers)) {
      return NextResponse.json({ error: 'Ungültige Eingabe' }, { status: 400 });
    }

    // Run classification
    const result = classify(answers);

    // Get or create session ID
    const cookieStore = cookies();
    let sessionId = cookieStore.get('session_id')?.value;
    if (!sessionId) {
      sessionId = crypto.randomUUID();
    }

    // Save to DB
    const aiSystem = await prisma.aISystem.create({
      data: {
        sessionId,
        name: systemName,
        description: description || null,
        riskLevel: result.riskLevel,
        userRole: result.userRole,
        classificationPath: result.classificationPath as any,
        obligations: JSON.parse(JSON.stringify({
          summaryDe: result.summaryDe,
          obligations: result.obligations,
        })),
        checkCompletedAt: new Date(),
      },
    });

    // Update check count
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await prisma.checkCount.upsert({
      where: {
        date_riskLevel_userRole: {
          date: today,
          riskLevel: result.riskLevel,
          userRole: result.userRole,
        },
      },
      update: {
        count: { increment: 1 },
      },
      create: {
        date: today,
        riskLevel: result.riskLevel,
        userRole: result.userRole,
        count: 1,
      },
    });

    const response = NextResponse.json({
      id: aiSystem.id,
      riskLevel: result.riskLevel,
      userRole: result.userRole,
      summaryDe: result.summaryDe,
      obligations: result.obligations,
      redirectUrl: `/de/ergebnis/${aiSystem.id}`,
    });

    // Set session cookie
    response.cookies.set('session_id', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });

    return response;
  } catch (error) {
    console.error('Check API error:', error);
    return NextResponse.json({ error: 'Interner Fehler' }, { status: 500 });
  }
}
