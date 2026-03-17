import { ProhibitedPractice } from './types';

export const prohibitedPractices: ProhibitedPractice[] = [
  {
    id: 'P1',
    questionDe: 'Setzt das System unterschwellige Techniken oder absichtliche Täuschung ein, um das Verhalten von Personen wesentlich zu beeinflussen?',
    examplesDe: [
      'Unterschwellige Audio-/Videoeinblendungen zur Kaufbeeinflussung',
      'KI-gestützte Dark Patterns, die Nutzer zu ungewollten Entscheidungen manipulieren',
      'Täuschende KI-Systeme, die sich als Menschen ausgeben, um Verhalten zu ändern',
    ],
    notMeantDe: [
      'Reguläre Werbung und Marketing',
      'A/B-Testing von Benutzeroberflächen',
      'Personalisierte Produktempfehlungen',
    ],
    articleRef: 'Art. 5(1)(a)',
  },
  {
    id: 'P2',
    questionDe: 'Nutzt das System gezielt Schwächen aufgrund von Alter, Behinderung oder sozialer/wirtschaftlicher Lage aus?',
    examplesDe: [
      'KI-gestütztes Marketing, das gezielt die kognitive Einschränkung älterer Menschen ausnutzt',
      'Systeme, die die wirtschaftliche Notlage von Personen für aggressive Kreditangebote nutzen',
    ],
    notMeantDe: [
      'Barrierefreie Assistenzsysteme für Menschen mit Behinderung',
      'Altersgerechte Anpassung von Benutzeroberflächen',
    ],
    articleRef: 'Art. 5(1)(b)',
  },
  {
    id: 'P3',
    questionDe: 'Bewertet oder klassifiziert das System natürliche Personen anhand ihres Sozialverhaltens, wobei dies zu ungerechtfertigter Benachteiligung führt?',
    examplesDe: [
      'Sozialkreditsysteme nach chinesischem Vorbild',
      'Bewertung von Bürgern anhand ihres Online-Verhaltens für den Zugang zu öffentlichen Diensten',
    ],
    notMeantDe: [
      'Kundenbonusprogramme (Treuepunkte)',
      'Kredit-Scoring auf Basis von Finanzdaten (fällt unter Hochrisiko, nicht verboten)',
    ],
    articleRef: 'Art. 5(1)(c)',
  },
  {
    id: 'P4',
    questionDe: 'Erstellt das System individuelle Kriminalitätsprognosen allein auf Basis von Profiling oder Persönlichkeitsmerkmalen?',
    examplesDe: [
      'Vorhersage der Wahrscheinlichkeit, dass eine bestimmte Person eine Straftat begeht, basierend auf demografischen Merkmalen',
    ],
    notMeantDe: [
      'KI-gestützte Analyse konkreter Beweismittel in laufenden Ermittlungen',
      'Statistische Kriminalitätsprognosen für Gebiete (nicht Individuen)',
    ],
    articleRef: 'Art. 5(1)(d)',
  },
  {
    id: 'P5',
    questionDe: 'Wird das System zum ungezielten Scraping von Gesichtsbildern aus dem Internet oder Überwachungskameras verwendet, um eine Gesichtserkennungsdatenbank aufzubauen?',
    examplesDe: [
      'Clearview AI-ähnliche Dienste, die Milliarden Fotos aus dem Internet sammeln',
    ],
    notMeantDe: [
      'Gesichtserkennung mit gezielt erhobenen, eingewilligten Bildern',
      'Fototagging in privaten Alben (z.B. Google Photos)',
    ],
    articleRef: 'Art. 5(1)(e)',
  },
  {
    id: 'P6',
    questionDe: 'Erkennt das System Emotionen von Beschäftigten am Arbeitsplatz oder von Lernenden in Bildungseinrichtungen?',
    examplesDe: [
      'Überwachungskameras, die die Stimmung von Mitarbeitern analysieren',
      'Software, die die Aufmerksamkeit von Schülern per Webcam misst',
    ],
    notMeantDe: [
      'Emotionserkennung in medizinischen oder Sicherheitskontexten',
      'Stimmungsanalyse in Kundenfeedback-Texten',
    ],
    articleRef: 'Art. 5(1)(f)',
  },
  {
    id: 'P7',
    questionDe: 'Kategorisiert das System Personen anhand biometrischer Daten nach Rasse, politischer Meinung, Gewerkschaftszugehörigkeit, Religion, sexueller Orientierung?',
    examplesDe: [
      'Systeme, die aus Gesichtsmerkmalen auf ethnische Zugehörigkeit oder sexuelle Orientierung schließen',
    ],
    notMeantDe: [
      'Medizinische Bildanalyse (z.B. Hautkrebs-Erkennung)',
      'Geschlechtserkennung für statistische Zwecke (kann unter andere Kategorien fallen)',
    ],
    articleRef: 'Art. 5(1)(g)',
  },
  {
    id: 'P8',
    questionDe: 'Wird biometrische Echtzeit-Fernidentifizierung im öffentlichen Raum zu Strafverfolgungszwecken eingesetzt?',
    examplesDe: [
      'Live-Gesichtserkennung auf öffentlichen Plätzen zur Straftätersuche',
    ],
    notMeantDe: [
      'Nachträgliche Videoauswertung (nicht in Echtzeit)',
      'Gesichtserkennung an privaten Zugangskontrollpunkten',
      'Einsatz nach richterlicher Anordnung bei schweren Straftaten (eng begrenzte Ausnahmen möglich)',
    ],
    articleRef: 'Art. 5(1)(h)',
  },
];
