import { Resend } from 'resend';

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn('RESEND_API_KEY not set — emails will not be sent');
    return null;
  }
  return new Resend(key);
}

const FROM = process.env.EMAIL_FROM || 'noreply@ai-act-check.info';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ai-act-check.info';

export async function sendDoubleOptInEmail(email: string, confirmToken: string) {
  const confirmUrl = `${SITE_URL}/api/confirm?token=${confirmToken}`;

  const resend = getResend();
  if (!resend) return;
  await resend.emails.send({
    from: FROM,
    to: email,
    subject: 'Bitte bestätigen Sie Ihre E-Mail — AI Act Check',
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">E-Mail-Adresse bestätigen</h2>
        <p>Vielen Dank für Ihr Interesse am AI Act Check!</p>
        <p>Bitte bestätigen Sie Ihre E-Mail-Adresse, um Ihr Ergebnis und Deadline-Erinnerungen zu erhalten:</p>
        <p style="text-align: center; margin: 30px 0;">
          <a href="${confirmUrl}" style="background: #1e40af; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: bold;">
            E-Mail bestätigen
          </a>
        </p>
        <p style="color: #6b7280; font-size: 14px;">
          Falls Sie diese E-Mail nicht angefordert haben, können Sie sie ignorieren.
        </p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
        <p style="color: #9ca3af; font-size: 12px;">
          AI Act Check — Orientierungstool auf Basis der Verordnung (EU) 2024/1689.
          Keine Rechtsberatung.
        </p>
      </div>
    `,
  });
}

export async function sendWelcomeWithResultEmail(
  email: string,
  result: {
    systemName: string;
    riskLevel: string;
    userRole: string;
    resultId: string;
  }
) {
  const riskLabels: Record<string, string> = {
    PROHIBITED: 'Verbotene KI-Praktik',
    HIGH_RISK: 'Hochrisiko',
    LIMITED_RISK: 'Begrenztes Risiko',
    MINIMAL_RISK: 'Minimales Risiko',
    GPAI: 'General-Purpose AI',
    NOT_AI: 'Kein KI-System',
  };

  const roleLabels: Record<string, string> = {
    PROVIDER: 'Anbieter (Provider)',
    DEPLOYER: 'Betreiber (Deployer)',
    BOTH: 'Anbieter & Betreiber',
    IMPORTER: 'Importeur',
    DISTRIBUTOR: 'Händler',
  };

  const resultUrl = `${SITE_URL}/de/ergebnis/${result.resultId}`;

  const resend = getResend();
  if (!resend) return;
  await resend.emails.send({
    from: FROM,
    to: email,
    subject: `Ihr AI Act Check Ergebnis: ${riskLabels[result.riskLevel] || result.riskLevel}`,
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">Ihr AI Act Check Ergebnis</h2>

        <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <p style="margin: 0 0 8px;"><strong>KI-System:</strong> ${result.systemName}</p>
          <p style="margin: 0 0 8px;"><strong>Risikoklasse:</strong> ${riskLabels[result.riskLevel] || result.riskLevel}</p>
          <p style="margin: 0;"><strong>Ihre Rolle:</strong> ${roleLabels[result.userRole] || result.userRole}</p>
        </div>

        <p style="text-align: center; margin: 30px 0;">
          <a href="${resultUrl}" style="background: #1e40af; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: bold;">
            Vollständiges Ergebnis ansehen
          </a>
        </p>

        <h3 style="color: #1e40af;">Was kommt als Nächstes?</h3>
        <ul>
          <li>Wir erinnern Sie rechtzeitig an die wichtigsten Deadlines</li>
          <li>90, 60, 30, 14 und 7 Tage vor dem 2. August 2026</li>
          <li>Prüfen Sie auch Ihre weiteren KI-Systeme</li>
        </ul>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
        <p style="color: #9ca3af; font-size: 12px;">
          AI Act Check — Orientierungstool auf Basis der Verordnung (EU) 2024/1689.
          Keine Rechtsberatung.
          <a href="${SITE_URL}/api/unsubscribe?email=${encodeURIComponent(email)}" style="color: #9ca3af;">Abmelden</a>
        </p>
      </div>
    `,
  });
}

export async function sendDeadlineReminderEmail(
  email: string,
  daysLeft: number,
  unsubscribeUrl: string
) {
  const resend = getResend();
  if (!resend) return;
  await resend.emails.send({
    from: FROM,
    to: email,
    subject: `AI Act Deadline: Noch ${daysLeft} Tage bis zum 2. August 2026`,
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">Noch ${daysLeft} Tage bis zur AI Act Deadline</h2>

        <p>Am <strong>2. August 2026</strong> werden die Hochrisiko-Anforderungen des EU AI Act durchsetzbar.</p>

        <div style="background: #fef3c7; border-left: 4px solid #ca8a04; padding: 15px; margin: 20px 0;">
          <p style="margin: 0; font-weight: bold;">Haben Sie schon begonnen?</p>
          <p style="margin: 8px 0 0;">Die Vorbereitung auf den AI Act erfordert Zeit. Erstellen Sie jetzt ein KI-Inventar und prüfen Sie Ihre Pflichten.</p>
        </div>

        <p style="text-align: center; margin: 30px 0;">
          <a href="${SITE_URL}/de/check" style="background: #1e40af; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: bold;">
            Jetzt erneut prüfen
          </a>
        </p>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
        <p style="color: #9ca3af; font-size: 12px;">
          AI Act Check — Orientierungstool. Keine Rechtsberatung.
          <a href="${unsubscribeUrl}" style="color: #9ca3af;">Abmelden</a>
        </p>
      </div>
    `,
  });
}

export async function sendAdminReminderEmail(subject: string, content: string) {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) return;

  const resend = getResend();
  if (!resend) return;
  await resend.emails.send({
    from: FROM,
    to: adminEmail,
    subject: `[AI Act Check Admin] ${subject}`,
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">${subject}</h2>
        <div style="white-space: pre-wrap; line-height: 1.6;">${content}</div>
      </div>
    `,
  });
}
