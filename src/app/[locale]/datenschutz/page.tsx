import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — AI Act Check",
  robots: "noindex",
};

export default function DatenschutzPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

      <div className="prose prose-lg max-w-none">
        <h2>1. Verantwortlicher</h2>
        <p>
          [Name / Firma]<br />
          [Adresse]<br />
          E-Mail: [E-Mail]
        </p>

        <h2>2. Erhobene Daten</h2>
        <p>Wir erheben und verarbeiten folgende personenbezogene Daten:</p>

        <h3>2.1 AI Act Pflichten-Check</h3>
        <p>
          Wenn Sie den Pflichten-Check durchführen, werden die von Ihnen eingegebenen Informationen
          (Name des KI-Systems, Einsatzbeschreibung, Antworten auf die Klassifizierungsfragen) in unserer
          Datenbank gespeichert. Es wird eine zufällige Session-ID generiert, die in einem technisch
          notwendigen Cookie gespeichert wird.
        </p>
        <ul>
          <li><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung / vorvertragliche Maßnahmen)</li>
          <li><strong>Speicherdauer:</strong> Solange das Ergebnis abrufbar sein soll</li>
        </ul>

        <h3>2.2 E-Mail-Adresse (Newsletter / Reminder)</h3>
        <p>
          Wenn Sie Ihre E-Mail-Adresse eintragen, um Ihr Ergebnis und Deadline-Erinnerungen zu erhalten,
          verwenden wir ein Double-Opt-In-Verfahren. Ihre E-Mail wird erst nach Bestätigung für den
          Versand von E-Mails verwendet.
        </p>
        <ul>
          <li><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
          <li><strong>Speicherdauer:</strong> Bis zum Widerruf (Abmeldung über Link in jeder E-Mail)</li>
        </ul>

        <h3>2.3 E-Mail-Versand (Resend)</h3>
        <p>
          Für den Versand von E-Mails nutzen wir den Dienst Resend (Resend, Inc., USA).
          Ihre E-Mail-Adresse wird an Resend übermittelt. Es gelten die Datenschutzbestimmungen von Resend.
        </p>

        <h2>3. Cookies</h2>
        <p>
          Wir verwenden ausschließlich technisch notwendige Cookies (Session-ID für den Pflichten-Check).
          Es werden keine Tracking-Cookies oder Marketing-Cookies eingesetzt. Ein Cookie-Banner ist daher
          nicht erforderlich.
        </p>

        <h2>4. Analytics</h2>
        <p>
          Wir verwenden Plausible Analytics, einen datenschutzfreundlichen Analysedienst.
          Plausible verwendet keine Cookies und erhebt keine personenbezogenen Daten.
          Es werden keine Daten an Dritte weitergegeben.
        </p>

        <h2>5. Ihre Rechte</h2>
        <p>Sie haben folgende Rechte:</p>
        <ul>
          <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch (Art. 21 DSGVO)</li>
          <li>Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
        <p>Kontaktieren Sie uns per E-Mail, um Ihre Rechte auszuüben.</p>

        <h2>6. Beschwerderecht</h2>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren
          (Art. 77 DSGVO).
        </p>

        <p className="text-sm text-gray-500 mt-8">Stand: März 2026</p>
      </div>
    </div>
  );
}
