import { Obligation } from './types';

export const allObligations: Obligation[] = [
  // === AI LITERACY (ALLE) ===
  {
    id: 'OBL_LITERACY',
    article: 'Art. 4',
    titleDe: 'KI-Kompetenz (AI Literacy)',
    descriptionDe:
      'Anbieter und Betreiber müssen sicherstellen, dass ihr Personal und andere beteiligte Personen über ausreichende KI-Kompetenz verfügen. Dies umfasst technisches Wissen, Erfahrung, Bildung und Schulung.',
    category: 'literacy',
    deadline: '02.02.2025 (bereits in Kraft)',
    appliesTo: {
      riskLevels: ['PROHIBITED', 'HIGH_RISK', 'LIMITED_RISK', 'MINIMAL_RISK', 'GPAI'],
      roles: ['PROVIDER', 'DEPLOYER', 'BOTH', 'IMPORTER', 'DISTRIBUTOR'],
    },
  },

  // === HIGH RISK — PROVIDER ===
  {
    id: 'OBL_HR_P_RISK_MGMT',
    article: 'Art. 9',
    titleDe: 'Risikomanagementsystem',
    descriptionDe:
      'Ein kontinuierliches Risikomanagementsystem einrichten, umsetzen, dokumentieren und aufrechterhalten. Risiken identifizieren, analysieren, bewerten und durch geeignete Maßnahmen mindern.',
    category: 'governance',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['HIGH_RISK'],
      roles: ['PROVIDER', 'BOTH'],
    },
  },
  {
    id: 'OBL_HR_P_DATA_GOV',
    article: 'Art. 10',
    titleDe: 'Daten-Governance',
    descriptionDe:
      'Trainings-, Validierungs- und Testdatensätze müssen angemessenen Daten-Governance-Praktiken unterliegen: Relevanz, Repräsentativität, Fehlerfreiheit, Vollständigkeit.',
    category: 'governance',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['HIGH_RISK'],
      roles: ['PROVIDER', 'BOTH'],
    },
  },
  {
    id: 'OBL_HR_P_TECH_DOC',
    article: 'Art. 11 + Annex IV',
    titleDe: 'Technische Dokumentation',
    descriptionDe:
      'Technische Dokumentation erstellen und aktuell halten, BEVOR das System in Verkehr gebracht wird. Inhalt gemäß Annex IV: allgemeine Beschreibung, Elemente des Systems, Entwicklungsprozess, Leistung.',
    category: 'documentation',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['HIGH_RISK'],
      roles: ['PROVIDER', 'BOTH'],
    },
  },
  {
    id: 'OBL_HR_P_LOGGING',
    article: 'Art. 12',
    titleDe: 'Aufzeichnungspflichten (Logging)',
    descriptionDe:
      'Automatische Aufzeichnung von Ereignissen (Logs) während des Betriebs. Logs müssen Rückverfolgbarkeit ermöglichen und Risiken überwachbar machen.',
    category: 'technical',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['HIGH_RISK'],
      roles: ['PROVIDER', 'BOTH'],
    },
  },
  {
    id: 'OBL_HR_P_TRANSPARENCY',
    article: 'Art. 13',
    titleDe: 'Transparenz und Bereitstellung von Informationen',
    descriptionDe:
      'Das System muss so gestaltet sein, dass sein Betrieb ausreichend transparent ist. Gebrauchsanweisung mit klaren, verständlichen Informationen bereitstellen.',
    category: 'transparency',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['HIGH_RISK'],
      roles: ['PROVIDER', 'BOTH'],
    },
  },
  {
    id: 'OBL_HR_P_HUMAN_OVERSIGHT',
    article: 'Art. 14',
    titleDe: 'Menschliche Aufsicht',
    descriptionDe:
      'Das System muss so gestaltet sein, dass es von natürlichen Personen wirksam beaufsichtigt werden kann. Mindestens eine natürliche Person muss die Ausgaben verstehen und bei Bedarf eingreifen können.',
    category: 'governance',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['HIGH_RISK'],
      roles: ['PROVIDER', 'BOTH'],
    },
  },
  {
    id: 'OBL_HR_P_ACCURACY',
    article: 'Art. 15',
    titleDe: 'Genauigkeit, Robustheit und Cybersicherheit',
    descriptionDe:
      'Das System muss ein angemessenes Maß an Genauigkeit, Robustheit und Cybersicherheit erreichen und während seines Lebenszyklus aufrechterhalten.',
    category: 'technical',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['HIGH_RISK'],
      roles: ['PROVIDER', 'BOTH'],
    },
  },
  {
    id: 'OBL_HR_P_QMS',
    article: 'Art. 17',
    titleDe: 'Qualitätsmanagementsystem',
    descriptionDe:
      'Ein Qualitätsmanagementsystem einrichten und dokumentieren, das die Einhaltung der Verordnung sicherstellt.',
    category: 'governance',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['HIGH_RISK'],
      roles: ['PROVIDER', 'BOTH'],
    },
  },
  {
    id: 'OBL_HR_P_CONFORMITY',
    article: 'Art. 16 + 49',
    titleDe: 'Konformitätsbewertung & CE-Kennzeichnung',
    descriptionDe:
      'Vor dem Inverkehrbringen eine Konformitätsbewertung durchführen. CE-Kennzeichnung anbringen. EU-Konformitätserklärung ausstellen.',
    category: 'governance',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['HIGH_RISK'],
      roles: ['PROVIDER', 'BOTH'],
    },
  },
  {
    id: 'OBL_HR_P_REGISTRATION',
    article: 'Art. 49 + 72',
    titleDe: 'EU-Datenbankregistrierung & Marktüberwachung',
    descriptionDe:
      'Das Hochrisiko-KI-System in der EU-Datenbank registrieren. Mit Marktüberwachungsbehörden kooperieren.',
    category: 'registration',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['HIGH_RISK'],
      roles: ['PROVIDER', 'BOTH'],
    },
  },

  // === HIGH RISK — DEPLOYER ===
  {
    id: 'OBL_HR_D_INSTRUCTIONS',
    article: 'Art. 26(1)',
    titleDe: 'Verwendung gemäß Gebrauchsanweisung',
    descriptionDe:
      'Das KI-System gemäß der beigefügten Gebrauchsanweisung einsetzen. Technische und organisatorische Maßnahmen umsetzen, um die bestimmungsgemäße Verwendung sicherzustellen.',
    category: 'governance',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['HIGH_RISK'],
      roles: ['DEPLOYER', 'BOTH'],
    },
  },
  {
    id: 'OBL_HR_D_HUMAN_OVERSIGHT',
    article: 'Art. 26(2)',
    titleDe: 'Menschliche Aufsicht sicherstellen',
    descriptionDe:
      'Natürliche Personen mit der Aufsicht beauftragen. Diese müssen über die notwendige Kompetenz, Ausbildung und Befugnis verfügen sowie die vom Anbieter bereitgestellten Informationen verstehen.',
    category: 'governance',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['HIGH_RISK'],
      roles: ['DEPLOYER', 'BOTH'],
    },
  },
  {
    id: 'OBL_HR_D_INPUT_DATA',
    article: 'Art. 26(4)',
    titleDe: 'Relevanz der Eingabedaten',
    descriptionDe:
      'Sicherstellen, dass die Eingabedaten im Hinblick auf die Zweckbestimmung des Systems relevant und ausreichend repräsentativ sind.',
    category: 'governance',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['HIGH_RISK'],
      roles: ['DEPLOYER', 'BOTH'],
    },
  },
  {
    id: 'OBL_HR_D_MONITORING',
    article: 'Art. 26(5)',
    titleDe: 'Überwachung des Betriebs',
    descriptionDe:
      'Den Betrieb des KI-Systems auf Grundlage der Gebrauchsanweisung überwachen. Bei Risiken oder schwerwiegenden Vorfällen den Anbieter und die zuständige Behörde informieren.',
    category: 'monitoring',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['HIGH_RISK'],
      roles: ['DEPLOYER', 'BOTH'],
    },
  },
  {
    id: 'OBL_HR_D_LOGS',
    article: 'Art. 26(7)',
    titleDe: 'Aufbewahrung der Logs',
    descriptionDe:
      'Die vom System automatisch generierten Logs mindestens 6 Monate aufbewahren, sofern nicht in anderen Rechtsvorschriften anders geregelt.',
    category: 'documentation',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['HIGH_RISK'],
      roles: ['DEPLOYER', 'BOTH'],
    },
  },
  {
    id: 'OBL_HR_D_DPIA',
    article: 'Art. 27',
    titleDe: 'Grundrechte-Folgenabschätzung',
    descriptionDe:
      'Vor der Inbetriebnahme eine Folgenabschätzung für die Grundrechte durchführen. Dies gilt für bestimmte Betreiber (öffentliche Stellen, Bankwesen, Versicherungen, bestimmte Annex-III-Kategorien).',
    category: 'governance',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['HIGH_RISK'],
      roles: ['DEPLOYER', 'BOTH'],
    },
  },

  // === LIMITED RISK — PROVIDER ===
  {
    id: 'OBL_LR_P_INTERACTION',
    article: 'Art. 50(1)',
    titleDe: 'Kennzeichnung KI-Interaktion',
    descriptionDe:
      'Sicherstellen, dass natürliche Personen informiert werden, dass sie mit einem KI-System interagieren (z.B. Chatbot-Kennzeichnung).',
    category: 'transparency',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['LIMITED_RISK'],
      roles: ['PROVIDER', 'BOTH'],
    },
  },
  {
    id: 'OBL_LR_P_SYNTHETIC',
    article: 'Art. 50(2)',
    titleDe: 'Kennzeichnung synthetischer Inhalte',
    descriptionDe:
      'Ausgaben (Audio, Bild, Video, Text) in maschinenlesbarer Weise als KI-generiert kennzeichnen.',
    category: 'transparency',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['LIMITED_RISK'],
      roles: ['PROVIDER', 'BOTH'],
    },
  },
  {
    id: 'OBL_LR_P_DEEPFAKE',
    article: 'Art. 50(4)',
    titleDe: 'Deepfake-Kennzeichnung',
    descriptionDe:
      'Bei Deepfakes (manipulierte Bild-/Video-/Audio-Inhalte, die realen Personen ähneln) offenlegen, dass der Inhalt KI-generiert oder manipuliert ist.',
    category: 'transparency',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['LIMITED_RISK'],
      roles: ['PROVIDER', 'BOTH'],
    },
  },

  // === LIMITED RISK — DEPLOYER ===
  {
    id: 'OBL_LR_D_DISCLOSURE',
    article: 'Art. 50(3)',
    titleDe: 'Offenlegung KI-generierter Inhalte',
    descriptionDe:
      'Als Betreiber offenlegen, dass Inhalte KI-generiert oder manipuliert sind (Deepfakes). Die Veröffentlichung KI-generierter Texte zu Themen von öffentlichem Interesse muss gekennzeichnet werden.',
    category: 'transparency',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['LIMITED_RISK'],
      roles: ['DEPLOYER', 'BOTH'],
    },
  },

  // === GPAI — PROVIDER ===
  {
    id: 'OBL_GPAI_TECH_DOC',
    article: 'Art. 53(1)(a)',
    titleDe: 'Technische Dokumentation des GPAI-Modells',
    descriptionDe:
      'Technische Dokumentation des Modells erstellen und aktuell halten, einschließlich Trainings- und Testverfahren sowie Evaluierungsergebnisse. Auf Anfrage den Behörden zur Verfügung stellen.',
    category: 'documentation',
    deadline: '02.08.2025',
    appliesTo: {
      riskLevels: ['GPAI'],
      roles: ['PROVIDER', 'BOTH'],
    },
  },
  {
    id: 'OBL_GPAI_DOWNSTREAM',
    article: 'Art. 53(1)(b)',
    titleDe: 'Information an nachgelagerte Anbieter',
    descriptionDe:
      'Nachgelagerten Anbietern ausreichende Informationen und Dokumentation bereitstellen, damit diese ihren Pflichten nachkommen können.',
    category: 'transparency',
    deadline: '02.08.2025',
    appliesTo: {
      riskLevels: ['GPAI'],
      roles: ['PROVIDER', 'BOTH'],
    },
  },
  {
    id: 'OBL_GPAI_COPYRIGHT',
    article: 'Art. 53(1)(c)',
    titleDe: 'Urheberrechts-Compliance',
    descriptionDe:
      'Eine Strategie zur Einhaltung des Urheberrechts umsetzen, insbesondere bezüglich der Identifizierung und Einhaltung von Vorbehalten nach Art. 4(3) der Richtlinie (EU) 2019/790.',
    category: 'governance',
    deadline: '02.08.2025',
    appliesTo: {
      riskLevels: ['GPAI'],
      roles: ['PROVIDER', 'BOTH'],
    },
  },
  {
    id: 'OBL_GPAI_SUMMARY',
    article: 'Art. 53(1)(d) + Annex XI/XII',
    titleDe: 'Trainingsdaten-Zusammenfassung',
    descriptionDe:
      'Eine ausreichend detaillierte Zusammenfassung der für das Training verwendeten Inhalte erstellen und veröffentlichen, gemäß der Vorlage des AI Office.',
    category: 'documentation',
    deadline: '02.08.2025',
    appliesTo: {
      riskLevels: ['GPAI'],
      roles: ['PROVIDER', 'BOTH'],
    },
  },
];

export function getObligationsForResult(
  riskLevel: string,
  userRole: string
): Obligation[] {
  return allObligations.filter((obl) => {
    const matchesRisk = obl.appliesTo.riskLevels.includes(riskLevel as any);
    const matchesRole = obl.appliesTo.roles.includes(userRole as any);
    return matchesRisk && matchesRole;
  });
}
