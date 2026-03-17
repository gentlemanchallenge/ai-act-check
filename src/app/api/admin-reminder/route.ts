import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendAdminReminderEmail } from '@/lib/email';

interface ReminderTask {
  taskId: string;
  dayAfterLaunch: number;
  subject: string;
  content: string;
  recurring?: boolean;
  intervalDays?: number;
}

const REMINDER_TASKS: ReminderTask[] = [
  {
    taskId: 'blog_p2',
    dayAfterLaunch: 7,
    subject: 'SEO: Zeit für Blog-Artikel 5–7',
    content: `Gib Claude Code folgenden Auftrag: Lies SPEC.md. Schreibe 3 neue Blog-Artikel als MDX-Dateien in content/blog/de/:

(1) ki-tools-unternehmen-welche-betroffen.mdx — "Welche KI-Tools fallen unter den AI Act? 15 Praxisbeispiele" (2.000 Wörter, Keyword: "Welche KI Tools AI Act")
(2) ai-act-betreiber-deployer-pflichten.mdx — "Deployer-Pflichten: Was Betreiber von KI tun müssen" (1.500 Wörter, Keyword: "AI Act Betreiber Pflichten")
(3) ki-inventar-erstellen-unternehmen.mdx — "KI-Inventar erstellen: Der erste Schritt zur Compliance" (1.200 Wörter, Keyword: "KI Inventar erstellen")

Jeder Artikel: SEO-optimiert, interne Links zur Pillar Page + /de/check CTA am Ende.`,
  },
  {
    taskId: 'search_console_1',
    dayAfterLaunch: 14,
    subject: 'SEO: Search Console prüfen',
    content: `Prüfe die Google Search Console auf Indexierungsfehler. Falls du keinen Zugang hast, richte ihn jetzt ein: https://search.google.com/search-console — Property hinzufügen → URL-Prefix → ai-act-check.info. Sitemap einreichen: ai-act-check.info/sitemap.xml`,
  },
  {
    taskId: 'blog_p3',
    dayAfterLaunch: 28,
    subject: 'SEO: Zeit für Blog-Artikel 8–10',
    content: `Gib Claude Code folgenden Auftrag: Schreibe 3 neue Blog-Artikel als MDX:

(1) ai-act-recruiting-bewerbung-ki.mdx — "KI im Recruiting: Hochrisiko unter dem AI Act" (2.000 Wörter)
(2) ai-act-strafen-bussgeld-kmu.mdx — "AI Act Strafen: Was KMU bei Verstößen erwartet" (1.000 Wörter)
(3) ai-act-compliance-checkliste-betreiber.mdx — "AI Act Compliance-Checkliste für Betreiber" (1.800 Wörter)

Gleiche Struktur wie bisherige Artikel.`,
  },
  {
    taskId: 'search_console_keywords',
    dayAfterLaunch: 45,
    subject: 'SEO: Search Console Keyword-Check',
    content: `Prüfe in der Search Console unter "Leistung", welche Keywords Traffic bringen. Gib Claude Code folgenden Auftrag: Analysiere die Top-20 Keywords aus der Search Console und schlage 3 neue Blog-Artikel vor, die auf Keywords mit hohen Impressionen aber niedriger CTR zielen.`,
  },
  {
    taskId: 'phase2_check',
    dayAfterLaunch: 60,
    subject: 'Status-Check: Lohnt sich Phase 2?',
    content: `Prüfe in der Datenbank: Wie viele Checks wurden durchgeführt? Wie viele E-Mail-Adressen gesammelt? Ziel: ≥500 Checks + ≥200 E-Mails. Falls erreicht → Phase 2 starten (UG gründen, Versicherung, Payment).`,
  },
  {
    taskId: 'content_refresh',
    dayAfterLaunch: 90,
    subject: 'SEO: Content-Refresh',
    content: `Gib Claude Code folgenden Auftrag: Prüfe alle Blog-Artikel und Wissens-Seiten auf veraltete Informationen (insbesondere Fristen, Digital Omnibus Status, neue EU-Kommissions-Leitlinien). Aktualisiere wo nötig.`,
  },
];

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const launchDate = process.env.LAUNCH_DATE;
    if (!launchDate) {
      return NextResponse.json({ error: 'LAUNCH_DATE not set' }, { status: 500 });
    }

    const launch = new Date(launchDate);
    const now = new Date();
    const daysSinceLaunch = Math.floor(
      (now.getTime() - launch.getTime()) / (1000 * 60 * 60 * 24)
    );

    const sent: string[] = [];

    // Check fixed tasks
    for (const task of REMINDER_TASKS) {
      if (daysSinceLaunch >= task.dayAfterLaunch) {
        const existing = await prisma.adminReminder.findUnique({
          where: { taskId: task.taskId },
        });

        if (!existing) {
          await sendAdminReminderEmail(task.subject, task.content);
          await prisma.adminReminder.create({
            data: { taskId: task.taskId },
          });
          sent.push(task.taskId);
        }
      }
    }

    // Monthly recurring reminder (every 30 days from day 30)
    if (daysSinceLaunch >= 30) {
      const monthNumber = Math.floor(daysSinceLaunch / 30);
      const monthlyTaskId = `monthly_${monthNumber * 30}`;

      const existing = await prisma.adminReminder.findUnique({
        where: { taskId: monthlyTaskId },
      });

      if (!existing) {
        await sendAdminReminderEmail(
          'Monatlicher SEO-Check',
          `Prüfe: (1) Plausible Analytics — Besucherzahlen-Trend, (2) Google Search Console — neue Keywords, Fehler, (3) Gibt es News zum AI Act / Digital Omnibus, die ein Content-Update erfordern? Falls ja, gib Claude Code den Auftrag, die betroffenen Seiten zu aktualisieren.`
        );
        await prisma.adminReminder.create({
          data: { taskId: monthlyTaskId },
        });
        sent.push(monthlyTaskId);
      }
    }

    return NextResponse.json({
      daysSinceLaunch,
      sent,
      message: sent.length > 0 ? `Sent ${sent.length} admin reminders` : 'No reminders due today',
    });
  } catch (error) {
    console.error('Admin reminder error:', error);
    return NextResponse.json({ error: 'Interner Fehler' }, { status: 500 });
  }
}
