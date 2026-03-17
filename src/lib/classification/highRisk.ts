import { HighRiskCategory } from './types';

export const highRiskCategories: HighRiskCategory[] = [
  {
    id: 'A3_1',
    categoryDe: 'Biometrie',
    descriptionDe: 'Biometrische Fernidentifizierung, biometrische Kategorisierung und Emotionserkennung.',
    deployerExamplesDe: [
      'Gesichtserkennung für Zugangskontrolle',
      'Biometrische Zeiterfassung',
      'Emotionserkennung im Kundenservice',
    ],
    articleRef: 'Annex III Nr. 1',
  },
  {
    id: 'A3_2',
    categoryDe: 'Kritische Infrastruktur',
    descriptionDe: 'KI als Sicherheitskomponente in der Verwaltung und dem Betrieb kritischer Infrastruktur.',
    deployerExamplesDe: [
      'KI-gesteuerte Stromnetzverwaltung',
      'Autonome Verkehrssteuerung',
      'KI-Überwachung von Wasserversorgung',
    ],
    articleRef: 'Annex III Nr. 2',
  },
  {
    id: 'A3_3',
    categoryDe: 'Bildung & Berufsausbildung',
    descriptionDe: 'KI-Systeme zur Bestimmung des Zugangs zu Bildung, zur Bewertung von Lernergebnissen oder zur Steuerung des Lernprozesses.',
    deployerExamplesDe: [
      'KI-gestützte Prüfungsbewertung',
      'Automatische Studienplatzvergabe',
      'Adaptive Lernsysteme, die den Bildungsweg bestimmen',
    ],
    articleRef: 'Annex III Nr. 3',
  },
  {
    id: 'A3_4',
    categoryDe: 'Beschäftigung & Personalmanagement',
    descriptionDe: 'KI für Einstellung, Auswahl, Beförderung, Kündigung, Aufgabenverteilung oder Leistungsüberwachung.',
    deployerExamplesDe: [
      'KI-Recruiting und CV-Screening',
      'KI-gestützte Bewerbervorauswahl',
      'Performance-KI zur Mitarbeiterbewertung',
      'KI-gesteuerte Schichtplanung',
    ],
    articleRef: 'Annex III Nr. 4',
  },
  {
    id: 'A3_5',
    categoryDe: 'Wesentliche private & öffentliche Dienste',
    descriptionDe: 'KI zur Bewertung der Berechtigung für wesentliche Dienste, Kreditwürdigkeit, Versicherungsrisiken oder Notdienst-Priorisierung.',
    deployerExamplesDe: [
      'KI-basiertes Kredit-Scoring',
      'KI-Versicherungsrisikobewertung',
      'KI-gestützte Sozialleistungsentscheidungen',
      'Automatische Priorisierung von Notrufen',
    ],
    articleRef: 'Annex III Nr. 5',
  },
  {
    id: 'A3_6',
    categoryDe: 'Strafverfolgung',
    descriptionDe: 'KI zur Risikobewertung, als Lügendetektor, zur Beweisanalyse oder für Predictive Policing.',
    deployerExamplesDe: [
      'KI-Lügendetektion bei Vernehmungen',
      'Predictive Policing',
      'KI-gestützte Beweismittelanalyse',
    ],
    articleRef: 'Annex III Nr. 6',
  },
  {
    id: 'A3_7',
    categoryDe: 'Migration, Asyl & Grenzkontrolle',
    descriptionDe: 'KI für Asyl-/Visabewertungen, Risikoanalysen bei Einreise oder Dokumentenprüfung im Migrationskontext.',
    deployerExamplesDe: [
      'KI-gestützte Asylantragsbewertung',
      'Automatische Visaentscheidungen',
      'KI-Dokumentenprüfung an Grenzen',
    ],
    articleRef: 'Annex III Nr. 7',
  },
  {
    id: 'A3_8',
    categoryDe: 'Justiz & demokratische Prozesse',
    descriptionDe: 'KI als Entscheidungshilfe für Richter oder zur Beeinflussung demokratischer Prozesse.',
    deployerExamplesDe: [
      'KI-gestützte Strafzumessungsvorschläge',
      'KI zur Beeinflussung des Wahlverhaltens',
    ],
    articleRef: 'Annex III Nr. 8',
  },
];
