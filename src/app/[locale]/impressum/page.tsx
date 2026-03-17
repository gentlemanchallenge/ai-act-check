import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — AI Act Check",
  robots: "noindex",
};

export default function ImpressumPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>

      <div className="prose prose-lg max-w-none">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          [Name / Firma]<br />
          [Straße Nr.]<br />
          [PLZ Ort]<br />
          Deutschland
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: [E-Mail-Adresse]<br />
          Telefon: [Telefonnummer]
        </p>

        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          [Name]<br />
          [Adresse]
        </p>

        <h2>Haftungsausschluss</h2>
        <p>
          Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt.
          Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit
          und Aktualität der bereitgestellten Inhalte.
        </p>
        <p>
          Insbesondere stellt die auf dieser Website angebotene KI-Risikoklassifizierung
          keine Rechtsberatung dar. Für eine verbindliche Einschätzung wenden Sie sich
          bitte an einen qualifizierten Rechtsanwalt.
        </p>
      </div>
    </div>
  );
}
