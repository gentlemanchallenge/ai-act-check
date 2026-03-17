import { Question } from './types';

export const questions: Question[] = [
  {
    id: 'Q0',
    textDe: 'Haben Sie das KI-Tool gekauft/abonniert, oder selbst programmiert?',
    helpTextDe:
      'Der AI Act unterscheidet zwischen zwei Rollen:\n\n' +
      '**Betreiber (Deployer):** Sie nutzen ein fertiges KI-Produkt, das jemand anders entwickelt hat. Das trifft auf die meisten Unternehmen zu.\n' +
      'Beispiele: Sie nutzen ChatGPT, Copilot, ein KI-Recruiting-Tool wie Personio, eine KI-Buchhaltung, DeepL, oder einen KI-Chatbot auf Ihrer Website.\n\n' +
      '**Anbieter (Provider):** Sie haben selbst ein KI-System entwickelt — also ein eigenes KI-Modell trainiert oder eine eigene KI-Anwendung programmiert und bieten diese anderen an.\n\n' +
      '💡 **Die allermeisten KMU sind Betreiber.** Auch wenn Sie ChatGPT über die API in Ihre eigene Software einbauen, sind Sie in der Regel Betreiber — solange Sie das KI-Modell selbst nicht verändert haben.',
    options: [
      {
        id: 'Q0_EXTERNAL',
        labelDe: 'Wir nutzen ein fertiges KI-Produkt',
        descriptionDe: 'Wir haben das Tool gekauft, abonniert oder nutzen es kostenlos (z.B. ChatGPT, Copilot, DeepL, ein KI-Recruiting-Tool).',
      },
      {
        id: 'Q0_SELF',
        labelDe: 'Wir haben das KI-System selbst entwickelt',
        descriptionDe: 'Wir haben ein eigenes KI-Modell trainiert oder eine eigene KI-Anwendung programmiert und bieten sie anderen an.',
      },
      {
        id: 'Q0_BOTH',
        labelDe: 'Beides / Ich bin unsicher',
        descriptionDe: 'Wir nutzen externe KI-Tools UND entwickeln eigene KI, oder ich bin mir nicht sicher.',
      },
    ],
  },
  {
    id: 'Q1',
    textDe: 'Ist das, was Sie nutzen, wirklich ein KI-System?',
    helpTextDe:
      'Nicht jede Software ist KI. Der entscheidende Unterschied: **Kann das System selbstständig lernen und Schlussfolgerungen ziehen?**\n\n' +
      '**Das IST KI** (fällt unter den AI Act):\n' +
      '• ChatGPT, Claude, Gemini, Copilot (erzeugen eigenständig Texte)\n' +
      '• KI-Recruiting-Tools, die Bewerber automatisch bewerten\n' +
      '• KI-Chatbots auf Ihrer Website\n' +
      '• KI-Bildgeneratoren (DALL-E, Midjourney)\n' +
      '• KI-basierte Buchhaltung, die Buchungen selbst erkennt\n' +
      '• Sprachassistenten (Alexa, Siri)\n' +
      '• DeepL, Google Translate (KI-Übersetzung)\n\n' +
      '**Das ist KEINE KI** (fällt NICHT unter den AI Act):\n' +
      '• Excel-Formeln und Tabellenkalkulation\n' +
      '• Einfache Wenn-Dann-Regeln (z.B. "Wenn Rechnung > 30 Tage, sende Mahnung")\n' +
      '• Normale Suchfunktionen in Datenbanken\n' +
      '• Taschenrechner und Buchhaltungssoftware ohne KI\n' +
      '• Einfache Spam-Filter mit festen Regeln\n' +
      '• Zapier/IFTTT-Automatisierungen ohne KI\n\n' +
      '💡 **Faustregel:** Wenn der Hersteller das Produkt als "KI-gestützt" oder "AI-powered" bewirbt, ist es wahrscheinlich ein KI-System.',
    options: [
      {
        id: 'Q1_YES',
        labelDe: 'Ja, es ist ein KI-System',
        descriptionDe: 'Das Tool nutzt künstliche Intelligenz, maschinelles Lernen oder erzeugt eigenständig Inhalte/Empfehlungen.',
      },
      {
        id: 'Q1_NO',
        labelDe: 'Nein, es ist normale Software',
        descriptionDe: 'Es ist ein herkömmliches Programm ohne KI (z.B. Excel, einfache Automatisierung, Datenbank).',
      },
      {
        id: 'Q1_UNSURE',
        labelDe: 'Ich bin mir nicht sicher',
        descriptionDe: 'Ich weiß nicht, ob das Tool KI nutzt. Im Zweifel: "Ja" wählen und weiter prüfen.',
      },
    ],
  },
  {
    id: 'Q3_PROHIBITED',
    textDe: 'Wird Ihr KI-System für eine dieser verbotenen Anwendungen eingesetzt?',
    helpTextDe:
      'Diese KI-Anwendungen sind in der EU **komplett verboten** — seit dem 2. Februar 2025. Die meisten dieser Verbote betreffen Unternehmen in der Praxis nicht. Lesen Sie die Beschreibungen durch und wählen Sie "Keine der genannten", wenn nichts auf Sie zutrifft.\n\n' +
      '⚠️ **Wichtig:** Die Strafen für verbotene Praktiken sind die höchsten im AI Act (bis zu 35 Mio. € oder 7% des Umsatzes, bei KMU: der niedrigere Betrag).',
    options: [
      {
        id: 'Q3_P1',
        labelDe: 'Unterschwellige Manipulation',
        descriptionDe: 'Das KI-System manipuliert Menschen durch Techniken, die sie nicht bewusst erkennen können — z.B. versteckte Kaufanreize oder Dark Patterns, die Kunden zu ungewollten Entscheidungen drängen. NICHT gemeint: Normale Werbung, A/B-Tests, personalisierte Produktempfehlungen.',
      },
      {
        id: 'Q3_P2',
        labelDe: 'Ausnutzung von Schutzbedürftigen',
        descriptionDe: 'Das KI-System nutzt gezielt die Schwäche von Menschen aus — z.B. wegen Alter, Behinderung oder finanzieller Not. Beispiel: KI-Marketing, das überschuldete Personen mit aggressiven Kreditangeboten anspricht. NICHT gemeint: Barrierefreie Angebote, altersgerechte Anpassungen.',
      },
      {
        id: 'Q3_P3',
        labelDe: 'Social Scoring (Sozialbewertung)',
        descriptionDe: 'Das KI-System bewertet Menschen anhand ihres allgemeinen Sozialverhaltens und benachteiligt sie deswegen in anderen Bereichen. Beispiel: Mieter ablehnen, weil eine KI deren Social-Media-Verhalten analysiert hat. NICHT gemeint: Normale Kundenbonusprogramme, Kredit-Scoring auf Basis von Finanzdaten.',
      },
      {
        id: 'Q3_P4',
        labelDe: 'Kriminalitäts-Vorhersage für Einzelpersonen',
        descriptionDe: 'Das KI-System sagt voraus, ob eine bestimmte Person eine Straftat begehen wird — nur basierend auf Merkmalen wie Aussehen, Herkunft oder Persönlichkeit. NICHT gemeint: KI-Analyse von konkretem verdächtigem Verhalten (z.B. Ladendiebstahl-Erkennung).',
      },
      {
        id: 'Q3_P5',
        labelDe: 'Gesichtsbilder aus dem Internet sammeln',
        descriptionDe: 'Das KI-System sammelt massenhaft Fotos von Gesichtern aus dem Internet oder von Überwachungskameras, um eine Gesichtserkennungs-Datenbank aufzubauen (wie "Clearview AI"). NICHT gemeint: Gesichtserkennung mit Einwilligung (z.B. Zutrittskontrolle mit Mitarbeiter-Fotos).',
      },
      {
        id: 'Q3_P6',
        labelDe: 'Emotionserkennung bei Mitarbeitern oder Schülern',
        descriptionDe: 'Das KI-System analysiert die Gefühle/Stimmung von Mitarbeitern am Arbeitsplatz oder von Schülern/Studenten. Beispiele: Software, die per Webcam die Stimmung im Meeting misst, Call-Center-Software, die den Tonfall von Mitarbeitern bewertet. NICHT gemeint: Stimmungsanalyse von Kundenfeedback (Bewertungen, E-Mails).',
      },
      {
        id: 'Q3_P7',
        labelDe: 'Biometrische Einteilung nach sensiblen Merkmalen',
        descriptionDe: 'Das KI-System teilt Menschen anhand von Körpermerkmalen (Gesicht, Stimme) nach Ethnie, Religion, sexueller Orientierung oder politischer Meinung ein. NICHT gemeint: Medizinische Bildanalyse (z.B. Hautkrebs-Erkennung).',
      },
      {
        id: 'Q3_P8',
        labelDe: 'Live-Gesichtserkennung im öffentlichen Raum',
        descriptionDe: 'Echtzeit-Gesichtserkennung an öffentlich zugänglichen Orten zur Strafverfolgung. Betrifft fast nur Behörden/Polizei. NICHT gemeint: Gesichtserkennung am privaten Firmeneingang.',
      },
      {
        id: 'Q3_NONE',
        labelDe: 'Keine der genannten — nichts davon trifft auf uns zu',
        descriptionDe: 'Unser KI-System macht nichts von alledem. (Das trifft auf die allermeisten Unternehmen zu.)',
      },
    ],
  },
  {
    id: 'Q4',
    textDe: 'Haben Sie das KI-Modell selbst entwickelt — also ein eigenes "Grundmodell" trainiert?',
    helpTextDe:
      'Diese Frage betrifft sogenannte "General-Purpose AI" (GPAI) — das sind die großen KI-Grundmodelle wie GPT-4, Claude, Gemini oder Llama. Diese Modelle können viele verschiedene Aufgaben erledigen.\n\n' +
      '**Wichtig:** Wenn Sie ChatGPT, Claude oder ähnliche Tools nur NUTZEN, sind Sie KEIN GPAI-Anbieter. Sie sind Betreiber. Diese Frage betrifft nur Unternehmen, die selbst solche Grundmodelle entwickeln und anbieten (wie OpenAI, Google, Meta).\n\n' +
      '💡 **Für die meisten KMU ist die Antwort "Nein".** Selbst wenn Sie die ChatGPT-API in Ihre Software einbauen, entwickeln Sie kein GPAI-Modell.',
    options: [
      {
        id: 'Q4_YES',
        labelDe: 'Ja, wir entwickeln und vertreiben ein eigenes KI-Grundmodell',
        descriptionDe: 'Wir trainieren ein eigenes KI-Modell, das für viele verschiedene Aufgaben eingesetzt werden kann (wie GPT, Claude, Gemini).',
      },
      {
        id: 'Q4_NO',
        labelDe: 'Nein, wir nutzen nur bestehende KI-Modelle',
        descriptionDe: 'Wir verwenden ChatGPT, Copilot, Claude oder andere fertige KI-Dienste — wir trainieren kein eigenes Grundmodell. (Das trifft auf fast alle Unternehmen zu.)',
      },
    ],
  },
  {
    id: 'Q5',
    textDe: 'Ist die KI ein Sicherheitsbauteil in einem physischen Produkt?',
    helpTextDe:
      'Diese Frage betrifft KI, die in physische Produkte eingebaut ist und dort eine Sicherheitsfunktion übernimmt — z.B. in Maschinen, Medizingeräten, Aufzügen oder Spielzeug.\n\n' +
      '**Beispiele, wo dies zutrifft:**\n' +
      '• KI-gesteuerte Notbremsung in einer Industriemaschine\n' +
      '• KI in einem medizinischen Diagnosegerät\n' +
      '• KI-Steuerung in einem autonomen Fahrzeug\n\n' +
      '**Beispiele, wo dies NICHT zutrifft:**\n' +
      '• ChatGPT oder andere reine Software-Tools\n' +
      '• KI-Recruiting, KI-Buchhaltung, KI-Marketing\n' +
      '• KI-Chatbots auf der Website\n\n' +
      '💡 **Für die meisten Büro- und Dienstleistungsunternehmen ist die Antwort "Nein".**',
    options: [
      {
        id: 'Q5_YES',
        labelDe: 'Ja — die KI ist ein Sicherheitsbauteil in einem physischen Produkt',
        descriptionDe: 'Das KI-System steckt in einer Maschine, einem Medizingerät oder einem anderen Produkt und hat dort eine Sicherheitsfunktion.',
      },
      {
        id: 'Q5_NO',
        labelDe: 'Nein — es ist ein reines Software-Tool',
        descriptionDe: 'Die KI ist keine Sicherheitskomponente in einem physischen Produkt. Es ist eine eigenständige Software-Anwendung.',
      },
    ],
  },
  {
    id: 'Q6',
    textDe: 'Wofür setzen Sie die KI ein? Fällt der Einsatzzweck in eine dieser Kategorien?',
    helpTextDe:
      'Der AI Act stuft bestimmte KI-Einsatzbereiche als "Hochrisiko" ein, weil sie tiefgreifende Auswirkungen auf Menschen haben können. Hochrisiko bedeutet NICHT verboten — es bedeutet, dass Sie bestimmte Pflichten einhalten müssen.\n\n' +
      '**Lesen Sie die Kategorien durch und überlegen Sie, ob Ihr konkreter Einsatzzweck darunter fällt.**\n\n' +
      '💡 Wenn Sie unsicher sind: Fragen Sie sich, ob die KI Entscheidungen trifft oder beeinflusst, die direkte Auswirkungen auf das Leben, den Beruf oder die finanzielle Situation von Menschen haben.',
    options: [
      {
        id: 'Q6_A3_1',
        labelDe: 'Gesichts-/Personenerkennung (Biometrie)',
        descriptionDe: 'Beispiele: Gesichtserkennung für Zutrittskontrolle, biometrische Zeiterfassung, automatische Personenidentifizierung per Kamera.',
      },
      {
        id: 'Q6_A3_2',
        labelDe: 'Steuerung kritischer Infrastruktur',
        descriptionDe: 'Beispiele: KI-Steuerung von Stromnetzen, Wasserversorgung, Verkehrsleitsystemen, Telekommunikationsnetzen.',
      },
      {
        id: 'Q6_A3_3',
        labelDe: 'Bildung & Ausbildung',
        descriptionDe: 'Beispiele: KI, die Prüfungen bewertet, über Studienplatzvergabe entscheidet, den Lernfortschritt bewertet oder den Bildungsweg beeinflusst.',
      },
      {
        id: 'Q6_A3_4',
        labelDe: 'Personalwesen & Recruiting',
        descriptionDe: 'Beispiele: KI, die Bewerbungen vorsortiert, Kandidaten bewertet/rankt, Mitarbeiter-Performance misst, Beförderungs- oder Kündigungsentscheidungen beeinflusst, oder Schichtpläne nach Leistung erstellt. Auch LinkedIn Recruiter AI fällt hierunter.',
      },
      {
        id: 'Q6_A3_5',
        labelDe: 'Kreditvergabe, Versicherung oder Sozialleistungen',
        descriptionDe: 'Beispiele: KI-basiertes Kredit-Scoring, KI-Bewertung von Versicherungsrisiken (Lebens-/Krankenversicherung), KI-Entscheidung über Sozialleistungen. NICHT gemeint: Normale KI-Buchhaltung oder KI-Rechnungserstellung.',
      },
      {
        id: 'Q6_A3_6',
        labelDe: 'Strafverfolgung',
        descriptionDe: 'Beispiele: KI zur Lügendetektion, Risikobewertung von Verdächtigen, Predictive Policing. (Betrifft fast nur Behörden.)',
      },
      {
        id: 'Q6_A3_7',
        labelDe: 'Migration & Grenzkontrolle',
        descriptionDe: 'Beispiele: KI für Asyl- oder Visaentscheidungen, Risikoanalyse bei der Einreise. (Betrifft fast nur Behörden.)',
      },
      {
        id: 'Q6_A3_8',
        labelDe: 'Justiz & Wahlen',
        descriptionDe: 'Beispiele: KI als Entscheidungshilfe für Richter, KI zur Beeinflussung von Wahlergebnissen. (Betrifft fast nur Behörden.)',
      },
      {
        id: 'Q6_NONE',
        labelDe: 'Nichts davon — unser Einsatzzweck ist ein anderer',
        descriptionDe: 'Unser KI-Tool wird für keinen der genannten Zwecke eingesetzt (z.B. Marketing-Texte, Übersetzung, Kundenservice, interne Recherche).',
      },
    ],
  },
  {
    id: 'Q7',
    textDe: 'Trifft die KI eigenständig Entscheidungen über Menschen — oder unterstützt sie nur?',
    helpTextDe:
      'Es gibt eine Ausnahme: Ein KI-System in einer Hochrisiko-Kategorie gilt NICHT als Hochrisiko, wenn es nur eine **unterstützende Hilfsfunktion** hat und keine echten Entscheidungen trifft oder beeinflusst.\n\n' +
      '**Die Ausnahme greift, wenn ALLE diese Bedingungen erfüllt sind:**\n' +
      '1. Die KI führt nur eine eng begrenzte Aufgabe aus (z.B. Daten sortieren, Dokumente formatieren)\n' +
      '2. Sie verbessert nur das Ergebnis einer bereits abgeschlossenen menschlichen Entscheidung\n' +
      '3. Sie zeigt nur Muster auf, ohne die menschliche Bewertung zu ersetzen\n' +
      '4. Sie bereitet nur Informationen vor — die eigentliche Entscheidung trifft ein Mensch\n\n' +
      '**Beispiele, wo die Ausnahme greift:**\n' +
      '• KI, die Lebensläufe nur in ein einheitliches Format bringt (ohne zu bewerten)\n' +
      '• KI, die einen Rechtschreibcheck für Mitarbeiterbewertungen macht\n' +
      '• KI, die statistische Auffälligkeiten in Daten anzeigt, ohne Empfehlungen zu geben\n\n' +
      '**Beispiele, wo die Ausnahme NICHT greift:**\n' +
      '• KI, die Bewerber in eine Rangfolge bringt\n' +
      '• KI, die Kandidaten automatisch aussortiert, bevor ein Mensch sie sieht\n' +
      '• KI, die Mitarbeiter nach Leistung bewertet\n' +
      '• Jede KI, die **personenbezogene Profile** erstellt (Leistung, Verhalten, Zuverlässigkeit einer Person bewertet)\n\n' +
      '⚠️ **Wichtig:** Wenn die KI in irgendeiner Form **Menschen bewertet oder Profile über sie erstellt**, greift die Ausnahme NIE.',
    options: [
      {
        id: 'Q7_EXEMPT',
        labelDe: 'Die KI ist nur ein Hilfswerkzeug — sie bewertet keine Menschen',
        descriptionDe: 'Die KI sortiert nur Daten, formatiert Dokumente oder zeigt Statistiken an. Sie bewertet, rankt oder profiliert keine Personen. Alle 4 Bedingungen sind erfüllt.',
      },
      {
        id: 'Q7_NOT_EXEMPT',
        labelDe: 'Die KI bewertet, rankt oder beeinflusst Entscheidungen über Menschen',
        descriptionDe: 'Die KI sortiert Bewerber vor, bewertet Mitarbeiter, erstellt Rankings oder beeinflusst Personalentscheidungen.',
      },
      {
        id: 'Q7_PROFILING',
        labelDe: 'Die KI erstellt Profile über Personen',
        descriptionDe: 'Die KI bewertet persönliche Eigenschaften wie Leistung, Zuverlässigkeit, Verhalten oder Eignung einer Person.',
      },
    ],
  },
  {
    id: 'Q8',
    textDe: 'Interagiert die KI mit Menschen oder erzeugt sie Inhalte, die als menschengemacht wirken könnten?',
    helpTextDe:
      'Manche KI-Systeme müssen gekennzeichnet werden, damit Menschen wissen, dass sie mit einer KI interagieren oder dass Inhalte von einer KI erzeugt wurden.\n\n' +
      '**Wählen Sie "Ja", wenn eines davon zutrifft:**\n' +
      '• Die KI chattet direkt mit Kunden (Chatbot auf Ihrer Website)\n' +
      '• Die KI erzeugt Texte, die veröffentlicht werden (Blog, Newsletter, Social Media)\n' +
      '• Die KI erzeugt Bilder, Videos oder Audioinhalte\n' +
      '• Die KI erzeugt Deepfakes (manipulierte Bilder/Videos von echten Personen)\n\n' +
      '**Wählen Sie "Nein", wenn:**\n' +
      '• Die KI nur intern genutzt wird (interne Recherche, Zusammenfassungen für Sie selbst)\n' +
      '• Die KI nur Daten analysiert, ohne Inhalte zu erzeugen\n' +
      '• Die KI nur E-Mails an einzelne Kunden formuliert (kein öffentlicher Inhalt)\n\n' +
      '💡 **Beispiel:** Wenn Sie ChatGPT nutzen, um interne Berichte zu schreiben — "Nein". Wenn Sie ChatGPT nutzen, um Blog-Artikel zu veröffentlichen — "Ja".',
    options: [
      {
        id: 'Q8_YES',
        labelDe: 'Ja — die KI interagiert mit Menschen oder erzeugt öffentliche Inhalte',
        descriptionDe: 'Die KI chattet mit Kunden (Chatbot), erzeugt veröffentlichte Texte/Bilder/Videos, oder generiert Inhalte, die als menschengemacht wirken könnten.',
      },
      {
        id: 'Q8_NO',
        labelDe: 'Nein — die KI wird nur intern oder im Hintergrund genutzt',
        descriptionDe: 'Die KI analysiert nur Daten, hilft bei internen Aufgaben oder erzeugt keine öffentlich sichtbaren Inhalte.',
      },
    ],
  },
];

export function getQuestionById(id: string): Question | undefined {
  return questions.find((q) => q.id === id);
}
