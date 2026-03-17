import { Question } from './types';

export const questions: Question[] = [
  {
    id: 'Q0',
    textDe: 'Nutzen Sie ein externes KI-Tool/Software, oder haben Sie selbst ein KI-System entwickelt?',
    helpTextDe:
      'Wenn Sie ein fertiges Produkt wie ChatGPT, ein KI-Recruiting-Tool oder eine KI-Buchhaltungssoftware einsetzen, sind Sie ein "Betreiber" (Deployer). Wenn Sie selbst ein KI-Modell trainiert oder eine KI-Anwendung programmiert haben, sind Sie ein "Anbieter" (Provider).',
    options: [
      {
        id: 'Q0_EXTERNAL',
        labelDe: 'Externes Tool / Software',
        descriptionDe: 'Wir setzen ein fertiges KI-Produkt eines anderen Anbieters ein.',
      },
      {
        id: 'Q0_SELF',
        labelDe: 'Selbst entwickelt',
        descriptionDe: 'Wir haben das KI-System selbst entwickelt oder wesentlich verändert.',
      },
      {
        id: 'Q0_BOTH',
        labelDe: 'Beides / Unsicher',
        descriptionDe: 'Wir nutzen externe Tools UND entwickeln eigene, oder wir sind uns unsicher.',
      },
    ],
  },
  {
    id: 'Q1',
    textDe: 'Handelt es sich um ein KI-System im Sinne des EU AI Act?',
    helpTextDe:
      'Ein KI-System ist ein maschinengestütztes System, das mit unterschiedlichem Grad an Autonomie arbeitet, aus Eingaben ableitet und Ausgaben wie Vorhersagen, Empfehlungen, Entscheidungen oder Inhalte erzeugt (Art. 3 Nr. 1). Einfache regelbasierte Software (z.B. Excel-Formeln, einfache If/Then-Logik) ist KEIN KI-System.',
    options: [
      {
        id: 'Q1_YES',
        labelDe: 'Ja',
        descriptionDe: 'Das System nutzt maschinelles Lernen, neuronale Netze, NLP oder ähnliche KI-Technologien.',
      },
      {
        id: 'Q1_NO',
        labelDe: 'Nein',
        descriptionDe: 'Es handelt sich um konventionelle Software ohne KI-Komponenten.',
      },
      {
        id: 'Q1_UNSURE',
        labelDe: 'Unsicher',
        descriptionDe: 'Ich bin mir nicht sicher, ob das System als KI gilt.',
      },
    ],
  },
  {
    id: 'Q3_PROHIBITED',
    textDe: 'Wird das KI-System für eine der folgenden verbotenen Praktiken eingesetzt?',
    helpTextDe:
      'Der AI Act verbietet bestimmte KI-Praktiken vollständig (Art. 5). Prüfen Sie, ob Ihr System eine dieser Praktiken ausführt. Im Zweifelsfall wählen Sie "Nein" und lassen Sie das System weiter klassifizieren.',
    options: [
      {
        id: 'Q3_P1',
        labelDe: 'Unterschwellige Beeinflussung / Täuschung',
        descriptionDe: 'Das System manipuliert Personen durch unterschwellige Techniken oder absichtliche Täuschung (Art. 5(1)(a)).',
      },
      {
        id: 'Q3_P2',
        labelDe: 'Ausnutzung von Schutzbedürftigkeit',
        descriptionDe: 'Das System nutzt Schwächen aufgrund von Alter, Behinderung oder sozialer/wirtschaftlicher Lage aus (Art. 5(1)(b)).',
      },
      {
        id: 'Q3_P3',
        labelDe: 'Social Scoring',
        descriptionDe: 'Bewertung oder Klassifizierung von Personen anhand ihres Sozialverhaltens, die zu ungerechtfertigter Benachteiligung führt (Art. 5(1)(c)).',
      },
      {
        id: 'Q3_P4',
        labelDe: 'Individuelle Kriminalitätsprognose',
        descriptionDe: 'Vorhersage, ob eine Person eine Straftat begehen wird, basierend auf Profiling oder Persönlichkeitsmerkmalen (Art. 5(1)(d)).',
      },
      {
        id: 'Q3_P5',
        labelDe: 'Ungezieltes Scraping für Gesichtserkennung',
        descriptionDe: 'Aufbau von Gesichtserkennungsdatenbanken durch ungezieltes Sammeln von Bildern aus dem Internet oder Überwachungskameras (Art. 5(1)(e)).',
      },
      {
        id: 'Q3_P6',
        labelDe: 'Emotionserkennung am Arbeitsplatz/Bildung',
        descriptionDe: 'Ableitung von Emotionen von Beschäftigten oder Lernenden am Arbeitsplatz oder in Bildungseinrichtungen (Art. 5(1)(f)).',
      },
      {
        id: 'Q3_P7',
        labelDe: 'Biometrische Kategorisierung geschützter Merkmale',
        descriptionDe: 'Kategorisierung von Personen anhand biometrischer Daten nach Rasse, politischer Meinung, Religion, sexueller Orientierung (Art. 5(1)(g)).',
      },
      {
        id: 'Q3_P8',
        labelDe: 'Biometrische Echtzeit-Fernidentifizierung',
        descriptionDe: 'Echtzeit-Gesichtserkennung im öffentlichen Raum zu Strafverfolgungszwecken (Art. 5(1)(h)).',
      },
      {
        id: 'Q3_NONE',
        labelDe: 'Keine der genannten Praktiken',
        descriptionDe: 'Unser KI-System führt keine dieser verbotenen Praktiken aus.',
      },
    ],
  },
  {
    id: 'Q4',
    textDe: 'Handelt es sich um ein General-Purpose AI Model (GPAI)?',
    helpTextDe:
      'Ein GPAI-Modell (z.B. GPT-4, Claude, Gemini, Llama) ist ein KI-Modell, das für eine Vielzahl von Aufgaben eingesetzt werden kann und nicht speziell für einen bestimmten Zweck trainiert wurde. Wenn Sie ein solches Modell NUTZEN (nicht entwickeln), sind Sie kein GPAI-Anbieter — Sie sind Betreiber des konkreten Einsatzszenarios.',
    options: [
      {
        id: 'Q4_YES',
        labelDe: 'Ja, wir entwickeln/bieten ein GPAI-Modell an',
        descriptionDe: 'Wir sind Anbieter eines General-Purpose AI Models.',
      },
      {
        id: 'Q4_NO',
        labelDe: 'Nein',
        descriptionDe: 'Wir nutzen eventuell ein GPAI (z.B. ChatGPT), aber wir entwickeln keines.',
      },
    ],
  },
  {
    id: 'Q5',
    textDe: 'Ist das KI-System eine Sicherheitskomponente eines Produkts gemäß Annex I?',
    helpTextDe:
      'Annex I listet EU-Produktsicherheitsvorschriften auf (z.B. Maschinenverordnung, Medizinprodukte, Spielzeug, Aufzüge, Druckgeräte). Wenn Ihr KI-System ein Sicherheitsbauteil in einem solchen Produkt ist, gelten besondere Anforderungen.',
    options: [
      {
        id: 'Q5_YES',
        labelDe: 'Ja, mit Konformitätsbewertung durch Dritte',
        descriptionDe: 'Das KI-System ist eine Sicherheitskomponente und das Produkt erfordert eine Drittprüfung.',
      },
      {
        id: 'Q5_NO',
        labelDe: 'Nein',
        descriptionDe: 'Das KI-System ist keine Sicherheitskomponente eines Annex-I-Produkts.',
      },
    ],
  },
  {
    id: 'Q6',
    textDe: 'Fällt das KI-System in eine der folgenden Hochrisiko-Kategorien (Annex III)?',
    helpTextDe:
      'Der AI Act definiert 8 Kategorien von KI-Systemen als Hochrisiko. Prüfen Sie, ob Ihr Einsatzzweck in eine dieser Kategorien fällt.',
    options: [
      {
        id: 'Q6_A3_1',
        labelDe: 'Biometrie',
        descriptionDe: 'Biometrische Fernidentifizierung, Kategorisierung, Emotionserkennung.',
      },
      {
        id: 'Q6_A3_2',
        labelDe: 'Kritische Infrastruktur',
        descriptionDe: 'KI-Steuerung von Strom, Gas, Wasser, Verkehr, digitaler Infrastruktur.',
      },
      {
        id: 'Q6_A3_3',
        labelDe: 'Bildung & Berufsausbildung',
        descriptionDe: 'KI zur Prüfungsbewertung, Studienplatzvergabe, Leistungsüberwachung.',
      },
      {
        id: 'Q6_A3_4',
        labelDe: 'Beschäftigung & Personalmanagement',
        descriptionDe: 'KI im Recruiting, CV-Screening, Beförderungsentscheidungen, Performance-Bewertung, Kündigung.',
      },
      {
        id: 'Q6_A3_5',
        labelDe: 'Wesentliche private & öffentliche Dienste',
        descriptionDe: 'Kredit-Scoring, Versicherungsrisikobewertung, Zugang zu Sozialleistungen, Notdienst-Priorisierung.',
      },
      {
        id: 'Q6_A3_6',
        labelDe: 'Strafverfolgung',
        descriptionDe: 'Lügendetektion, Risikobewertung, Predictive Policing, Beweisanalyse.',
      },
      {
        id: 'Q6_A3_7',
        labelDe: 'Migration, Asyl & Grenzkontrolle',
        descriptionDe: 'Asyl-/Visabewertung, Risikoanalyse bei Einreise, Dokumentenprüfung.',
      },
      {
        id: 'Q6_A3_8',
        labelDe: 'Justiz & demokratische Prozesse',
        descriptionDe: 'Richterliche Entscheidungshilfe, Beeinflussung von Wahlen.',
      },
      {
        id: 'Q6_NONE',
        labelDe: 'Keine dieser Kategorien',
        descriptionDe: 'Unser KI-System fällt in keine der Hochrisiko-Kategorien.',
      },
    ],
  },
  {
    id: 'Q7',
    textDe: 'Trifft die Art. 6(3)-Ausnahme auf Ihr KI-System zu?',
    helpTextDe:
      'Ein Annex-III-KI-System gilt NICHT als Hochrisiko, wenn es ALLE folgenden Bedingungen erfüllt: (a) Es führt eine eng umgrenzte Verfahrensaufgabe aus, (b) es verbessert das Ergebnis einer zuvor abgeschlossenen menschlichen Tätigkeit, (c) es erkennt Entscheidungsmuster, ohne menschliche Bewertung zu ersetzen, und (d) es dient nur der Vorbereitung, nicht der Entscheidung. ACHTUNG: Diese Ausnahme gilt NICHT für Profiling von natürlichen Personen.',
    options: [
      {
        id: 'Q7_EXEMPT',
        labelDe: 'Ja, alle Bedingungen der Ausnahme sind erfüllt',
        descriptionDe: 'Das System führt nur eng begrenzte Verfahrensaufgaben aus und ersetzt keine menschliche Bewertung.',
      },
      {
        id: 'Q7_NOT_EXEMPT',
        labelDe: 'Nein, nicht alle Bedingungen sind erfüllt',
        descriptionDe: 'Das System trifft eigenständige Entscheidungen oder erstellt Profile natürlicher Personen.',
      },
      {
        id: 'Q7_PROFILING',
        labelDe: 'Das System erstellt Profile natürlicher Personen',
        descriptionDe: 'Profiling ist von der Ausnahme ausdrücklich ausgenommen.',
      },
    ],
  },
  {
    id: 'Q8',
    textDe: 'Unterliegt Ihr KI-System Transparenzpflichten (Art. 50)?',
    helpTextDe:
      'Bestimmte KI-Systeme haben Transparenzpflichten, auch wenn sie nicht als Hochrisiko gelten: Chatbots (müssen als KI erkennbar sein), Deepfake-Systeme (generierte Inhalte müssen gekennzeichnet werden), Systeme, die Texte generieren und als menschengemacht ausgegeben werden könnten.',
    options: [
      {
        id: 'Q8_YES',
        labelDe: 'Ja',
        descriptionDe: 'Unser System interagiert mit Menschen (Chatbot), generiert synthetische Inhalte (Text/Bild/Video/Audio) oder erkennt Emotionen/Kategorien.',
      },
      {
        id: 'Q8_NO',
        labelDe: 'Nein',
        descriptionDe: 'Unser System hat keine der genannten Eigenschaften.',
      },
    ],
  },
];

export function getQuestionById(id: string): Question | undefined {
  return questions.find((q) => q.id === id);
}
