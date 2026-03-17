import { Obligation } from './types';

export const allObligations: Obligation[] = [
  // === AI LITERACY (ALLE) ===
  {
    id: 'OBL_LITERACY',
    article: 'Art. 4',
    titleDe: 'KI-Kompetenz (AI Literacy)',
    descriptionDe:
      'Alle Unternehmen, die KI einsetzen, müssen sicherstellen, dass ihre Mitarbeiter ausreichend über KI Bescheid wissen.',
    whatItMeansDe:
      'Jeder in Ihrem Unternehmen, der mit KI-Tools arbeitet, muss verstehen, was KI kann und was nicht, welche Risiken es gibt und wie man KI verantwortungsvoll einsetzt. Es gibt keine Pflicht-Zertifikate oder Mindest-Stundenzahl — aber Sie müssen nachweisen können, dass Sie sich darum kümmern.',
    actionItemsDe: [
      'Erstellen Sie eine kurze interne Richtlinie: Welche KI-Tools nutzen wir? Wofür? Was ist erlaubt, was nicht?',
      'Führen Sie ein Team-Briefing oder Workshop durch (auch informell reicht) — dokumentieren Sie Datum und Themen',
      'Stellen Sie sicher, dass alle Mitarbeiter die Anleitungen der KI-Tools kennen, die sie nutzen',
      'Tipp: Die EU bietet über 250 kostenlose "Digital Innovation Hubs" mit KI-Schulungen speziell für KMU an',
    ],
    category: 'literacy',
    deadline: '02.02.2025 (bereits in Kraft)',
    appliesTo: {
      riskLevels: ['PROHIBITED', 'HIGH_RISK', 'LIMITED_RISK', 'MINIMAL_RISK', 'GPAI'],
      roles: ['PROVIDER', 'DEPLOYER', 'BOTH', 'IMPORTER', 'DISTRIBUTOR'],
    },
  },

  // === HIGH RISK — DEPLOYER ===
  {
    id: 'OBL_HR_D_INSTRUCTIONS',
    article: 'Art. 26(1)',
    titleDe: 'Gebrauchsanweisung befolgen',
    descriptionDe:
      'Das KI-System muss so eingesetzt werden, wie der Hersteller es vorgesehen hat.',
    whatItMeansDe:
      'Lesen Sie die Anleitung des KI-Tools und halten Sie sich daran. Nutzen Sie das Tool nicht für Zwecke, für die es nicht gedacht ist. Wenn der Hersteller sagt "nicht für Personalentscheidungen verwenden", dann dürfen Sie das nicht tun.',
    actionItemsDe: [
      'Besorgen und lesen Sie die Gebrauchsanweisung / Dokumentation des KI-Systems',
      'Prüfen Sie: Nutzen wir das Tool wirklich nur für den vorgesehenen Zweck?',
      'Dokumentieren Sie intern, wofür Sie das Tool einsetzen',
    ],
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
      'Eine echte Person muss die KI-Ergebnisse überwachen und bei Bedarf eingreifen können.',
    whatItMeansDe:
      'Sie müssen eine konkrete Person benennen, die die KI-Ergebnisse prüft und überstimmen kann. Diese Person braucht die nötige Schulung, muss die Befugnis haben, die KI zu stoppen, und muss genug Zeit dafür bekommen. Einfach nur "abnicken" reicht nicht — es muss echte, unabhängige Prüfung sein.',
    actionItemsDe: [
      'Benennen Sie namentlich eine oder mehrere Personen, die für die KI-Aufsicht verantwortlich sind',
      'Schulen Sie diese Personen: Wie funktioniert das KI-System? Welche Fehler kann es machen?',
      'Geben Sie diesen Personen die Befugnis, KI-Entscheidungen zu überstimmen oder das System abzuschalten',
      'Stellen Sie sicher, dass genug Zeit für echte Prüfung eingeplant ist (kein Rubber-Stamping!)',
    ],
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
    titleDe: 'Qualität der Eingabedaten sicherstellen',
    descriptionDe:
      'Die Daten, die Sie in das KI-System eingeben, müssen relevant und korrekt sein.',
    whatItMeansDe:
      'Wenn Sie Daten in die KI eingeben (z.B. Bewerbungsunterlagen, Kundendaten, Finanzdaten), müssen diese korrekt, vollständig und für den Zweck geeignet sein. Falsche oder verzerrte Eingabedaten führen zu falschen KI-Ergebnissen.',
    actionItemsDe: [
      'Prüfen Sie: Sind die Daten, die wir in die KI eingeben, aktuell und korrekt?',
      'Stellen Sie sicher, dass die Daten repräsentativ sind (nicht einseitig oder verzerrt)',
      'Dokumentieren Sie, welche Daten Sie der KI zur Verfügung stellen',
    ],
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
    titleDe: 'Betrieb überwachen',
    descriptionDe:
      'Sie müssen regelmäßig prüfen, ob die KI noch korrekt funktioniert.',
    whatItMeansDe:
      'Kontrollieren Sie regelmäßig die KI-Ergebnisse auf Auffälligkeiten. Wenn das System fehlerhafte oder diskriminierende Ergebnisse liefert, müssen Sie den Hersteller und ggf. die zuständige Behörde informieren.',
    actionItemsDe: [
      'Prüfen Sie regelmäßig stichprobenartig die KI-Ergebnisse: Sind sie plausibel?',
      'Achten Sie auf Muster: Werden bestimmte Gruppen systematisch benachteiligt?',
      'Bei Problemen: Informieren Sie sofort den Hersteller des KI-Tools',
      'Bei schwerwiegenden Vorfällen (Diskriminierung, Gesundheitsrisiken): Melden Sie dies der zuständigen Marktüberwachungsbehörde',
    ],
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
    titleDe: 'Protokolle aufbewahren',
    descriptionDe:
      'Die automatisch erzeugten Protokolle (Logs) des KI-Systems müssen mindestens 6 Monate gespeichert werden.',
    whatItMeansDe:
      'Die meisten KI-Systeme erzeugen automatisch Protokolle darüber, was sie getan haben. Sie müssen sicherstellen, dass diese Protokolle mindestens 6 Monate lang gespeichert und bei Bedarf vorgelegt werden können.',
    actionItemsDe: [
      'Klären Sie mit dem Hersteller: Welche Logs erzeugt das System automatisch?',
      'Stellen Sie sicher, dass die Logs mindestens 6 Monate gespeichert werden',
      'Regeln Sie den Zugriff: Wer kann die Logs bei Bedarf einsehen/exportieren?',
    ],
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
      'Vor der Nutzung muss geprüft werden, welche Auswirkungen die KI auf die Grundrechte betroffener Personen hat.',
    whatItMeansDe:
      'Bevor Sie ein Hochrisiko-KI-System einsetzen, müssen Sie dokumentieren: Welche Personen sind betroffen? Welche Risiken bestehen für deren Grundrechte (z.B. Diskriminierung, Datenschutz)? Welche Schutzmaßnahmen treffen Sie? Dies gilt besonders für öffentliche Stellen und bestimmte Branchen (Banken, Versicherungen).',
    actionItemsDe: [
      'Erstellen Sie ein Dokument: Welche Personen sind von der KI betroffen? (z.B. Bewerber, Kunden)',
      'Beschreiben Sie die möglichen Risiken (Diskriminierung, Fehlentscheidungen, Datenschutz)',
      'Dokumentieren Sie Ihre Schutzmaßnahmen (menschliche Aufsicht, Beschwerdemöglichkeit)',
      'Informieren Sie betroffene Personen, dass KI eingesetzt wird',
    ],
    category: 'governance',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['HIGH_RISK'],
      roles: ['DEPLOYER', 'BOTH'],
    },
  },

  // === HIGH RISK — PROVIDER ===
  {
    id: 'OBL_HR_P_RISK_MGMT',
    article: 'Art. 9',
    titleDe: 'Risikomanagementsystem',
    descriptionDe:
      'Ein System zur Identifizierung, Analyse und Minderung von Risiken einrichten und aufrechterhalten.',
    whatItMeansDe:
      'Sie müssen systematisch dokumentieren, welche Risiken Ihr KI-System hat und wie Sie diese mindern. Das Risikomanagementsystem muss während des gesamten Lebenszyklus des Systems aufrechterhalten werden.',
    actionItemsDe: [
      'Identifizieren Sie alle bekannten und vorhersehbaren Risiken Ihres KI-Systems',
      'Bewerten Sie die Wahrscheinlichkeit und Schwere jedes Risikos',
      'Definieren und dokumentieren Sie Maßnahmen zur Risikominderung',
      'Überprüfen Sie das Risikomanagementsystem regelmäßig und aktualisieren Sie es',
    ],
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
      'Trainings- und Testdaten müssen nach klaren Qualitätsstandards verwaltet werden.',
    whatItMeansDe:
      'Die Daten, mit denen Ihr KI-System trainiert und getestet wird, müssen relevant, repräsentativ, möglichst fehlerfrei und vollständig sein. Sie brauchen dokumentierte Prozesse dafür.',
    actionItemsDe: [
      'Dokumentieren Sie Herkunft und Qualität Ihrer Trainings-/Testdaten',
      'Prüfen Sie die Daten auf Verzerrungen (Bias) und Fehler',
      'Stellen Sie sicher, dass die Daten repräsentativ für den Einsatzzweck sind',
    ],
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
      'Umfassende technische Dokumentation erstellen und aktuell halten — vor dem Markteintritt.',
    whatItMeansDe:
      'Sie müssen eine detaillierte technische Dokumentation erstellen, die beschreibt, wie das System funktioniert, wie es entwickelt wurde und welche Leistung es erbringt. Inhalt gemäß Annex IV der Verordnung.',
    actionItemsDe: [
      'Erstellen Sie die Dokumentation gemäß den Vorgaben in Annex IV',
      'Beschreiben Sie das System, den Entwicklungsprozess und die Evaluierungsergebnisse',
      'Halten Sie die Dokumentation bei Änderungen am System aktuell',
    ],
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
    titleDe: 'Automatische Protokollierung (Logging)',
    descriptionDe:
      'Das System muss automatisch Ereignisse aufzeichnen, die eine Rückverfolgbarkeit ermöglichen.',
    whatItMeansDe:
      'Ihr KI-System muss automatisch protokollieren, was es tut, damit im Nachhinein nachvollzogen werden kann, wie Entscheidungen zustande kamen.',
    actionItemsDe: [
      'Implementieren Sie automatische Logging-Funktionen',
      'Stellen Sie sicher, dass Logs den Betrieb und die Entscheidungen des Systems nachvollziehbar machen',
    ],
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
    titleDe: 'Transparenz & Gebrauchsanweisung',
    descriptionDe:
      'Das System muss transparent gestaltet sein und eine verständliche Gebrauchsanweisung haben.',
    whatItMeansDe:
      'Betreiber Ihres Systems müssen verstehen können, wie es funktioniert. Stellen Sie klare, verständliche Informationen bereit.',
    actionItemsDe: [
      'Erstellen Sie eine verständliche Gebrauchsanweisung für Betreiber',
      'Erklären Sie Fähigkeiten, Grenzen und Risiken des Systems',
      'Beschreiben Sie, wie die menschliche Aufsicht funktionieren soll',
    ],
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
    titleDe: 'Menschliche Aufsicht ermöglichen',
    descriptionDe:
      'Das System muss so gestaltet sein, dass Menschen es wirksam beaufsichtigen können.',
    whatItMeansDe:
      'Designen Sie Ihr System so, dass eine natürliche Person die Ausgaben verstehen, die Ergebnisse überwachen und bei Bedarf eingreifen oder das System stoppen kann.',
    actionItemsDe: [
      'Bauen Sie Mechanismen ein, mit denen Aufsichtspersonen die KI-Ausgaben verstehen können',
      'Ermöglichen Sie es, KI-Entscheidungen zu überstimmen oder das System zu stoppen',
    ],
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
    titleDe: 'Genauigkeit, Robustheit & Cybersicherheit',
    descriptionDe:
      'Das System muss genau, robust und cybersicher sein.',
    whatItMeansDe:
      'Ihr KI-System muss eine angemessene Genauigkeit liefern, gegen Fehler und Angriffe robust sein und cybersicher gestaltet werden.',
    actionItemsDe: [
      'Testen und dokumentieren Sie die Genauigkeit Ihres Systems',
      'Implementieren Sie Schutzmaßnahmen gegen fehlerhafte Eingaben und Cyberangriffe',
      'Halten Sie die Leistung während des gesamten Lebenszyklus aufrecht',
    ],
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
      'Ein dokumentiertes Qualitätsmanagementsystem einrichten.',
    whatItMeansDe:
      'Sie brauchen ein dokumentiertes System, das sicherstellt, dass Sie alle Anforderungen der Verordnung systematisch einhalten.',
    actionItemsDe: [
      'Richten Sie ein QMS ein, das die Einhaltung aller AI-Act-Anforderungen sicherstellt',
      'Dokumentieren Sie Prozesse, Verantwortlichkeiten und Kontrollen',
    ],
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
      'Konformitätsbewertung durchführen und CE-Kennzeichnung anbringen.',
    whatItMeansDe:
      'Bevor Sie Ihr Hochrisiko-KI-System auf den Markt bringen, müssen Sie eine Konformitätsbewertung durchführen, die CE-Kennzeichnung anbringen und eine EU-Konformitätserklärung ausstellen.',
    actionItemsDe: [
      'Führen Sie die Konformitätsbewertung gemäß Art. 43 durch',
      'Stellen Sie eine EU-Konformitätserklärung aus',
      'Bringen Sie die CE-Kennzeichnung an',
    ],
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
    titleDe: 'EU-Datenbank-Registrierung',
    descriptionDe:
      'Das KI-System in der EU-Datenbank registrieren und mit Marktüberwachungsbehörden kooperieren.',
    whatItMeansDe:
      'Ihr Hochrisiko-KI-System muss in der offiziellen EU-Datenbank eingetragen werden. Zusätzlich müssen Sie mit den nationalen Marktüberwachungsbehörden zusammenarbeiten.',
    actionItemsDe: [
      'Registrieren Sie Ihr System in der EU-Datenbank für Hochrisiko-KI',
      'Stellen Sie sicher, dass Sie auf Anfragen der Marktüberwachungsbehörde reagieren können',
    ],
    category: 'registration',
    deadline: '02.08.2026',
    appliesTo: {
      riskLevels: ['HIGH_RISK'],
      roles: ['PROVIDER', 'BOTH'],
    },
  },

  // === LIMITED RISK — PROVIDER ===
  {
    id: 'OBL_LR_P_INTERACTION',
    article: 'Art. 50(1)',
    titleDe: 'KI-Interaktion kennzeichnen',
    descriptionDe:
      'Nutzer müssen wissen, dass sie mit einer KI sprechen — nicht mit einem Menschen.',
    whatItMeansDe:
      'Wenn Ihr KI-System direkt mit Menschen interagiert (z.B. ein Chatbot), müssen die Nutzer klar erkennen können, dass sie mit einer KI kommunizieren. Ausnahme: Es ist offensichtlich (z.B. Sprachassistent auf einem Smart Speaker).',
    actionItemsDe: [
      'Kennzeichnen Sie Chatbots deutlich: "Sie chatten mit einem KI-Assistenten"',
      'Platzieren Sie den Hinweis gut sichtbar, bevor die Interaktion beginnt',
      'Auch telefonische KI-Assistenten müssen sich als KI vorstellen',
    ],
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
    titleDe: 'Synthetische Inhalte maschinenlesbar kennzeichnen',
    descriptionDe:
      'KI-generierte Inhalte (Text, Bild, Audio, Video) müssen technisch als KI-erzeugt markiert werden.',
    whatItMeansDe:
      'Wenn Ihre KI Texte, Bilder, Audio oder Video erzeugt, müssen diese in einem maschinenlesbaren Format als KI-generiert gekennzeichnet werden (z.B. Wasserzeichen, Metadaten). Dies ist eine Pflicht für Anbieter von KI-Systemen.',
    actionItemsDe: [
      'Implementieren Sie technische Kennzeichnung (Metadaten/Wasserzeichen) für KI-generierte Inhalte',
      'Stellen Sie sicher, dass die Kennzeichnung auch nach der Verarbeitung erhalten bleibt',
    ],
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
      'KI-generierte oder manipulierte Inhalte, die realen Personen ähneln (Deepfakes), müssen als solche gekennzeichnet werden.',
    whatItMeansDe:
      'Wenn Ihr System Bilder, Videos oder Audioinhalte erzeugt oder manipuliert, die realen Personen ähneln (Deepfakes), muss offengelegt werden, dass der Inhalt KI-generiert oder manipuliert ist.',
    actionItemsDe: [
      'Kennzeichnen Sie Deepfake-Inhalte klar als KI-generiert/manipuliert',
      'Die Kennzeichnung muss gut sichtbar sein (Ausnahme: Kunst/Satire, aber auch dort nicht-aufdringliche Kennzeichnung nötig)',
    ],
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
      'Wenn Sie KI-generierte Inhalte veröffentlichen, müssen Sie das kenntlich machen.',
    whatItMeansDe:
      'Wenn Sie KI-erzeugte Texte, Bilder oder Videos veröffentlichen, die Themen von öffentlichem Interesse betreffen, müssen Sie offenlegen, dass die Inhalte KI-generiert sind. Ausnahme: Wenn ein Mensch den Inhalt redaktionell geprüft hat und die Verantwortung übernimmt.\n\n' +
      'Für Chatbots gilt: Kunden müssen wissen, dass sie mit einer KI sprechen.\n\n' +
      'NICHT betroffen: Interne Nutzung (KI-Zusammenfassungen für sich selbst), private E-Mails an einzelne Kunden.',
    actionItemsDe: [
      'Chatbot auf der Website? → Kennzeichnen Sie ihn als KI: "Sie chatten mit einem KI-Assistenten"',
      'KI-generierte Blog-Artikel, Social-Media-Posts oder Newsletter? → Hinweis wie "Dieser Text wurde mit KI-Unterstützung erstellt"',
      'KI-generierte Bilder/Videos in der Öffentlichkeit? → Als KI-generiert kennzeichnen',
      'Interne Nutzung (Recherche, Zusammenfassungen, E-Mails)? → Keine Kennzeichnung nötig',
    ],
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
      'Umfassende technische Dokumentation erstellen, einschließlich Trainings- und Testverfahren.',
    whatItMeansDe:
      'Als Anbieter eines GPAI-Modells müssen Sie detailliert dokumentieren, wie Ihr Modell trainiert und getestet wurde, und diese Dokumentation auf Anfrage den Behörden vorlegen.',
    actionItemsDe: [
      'Erstellen Sie die technische Dokumentation gemäß den Vorgaben',
      'Halten Sie die Dokumentation aktuell',
      'Stellen Sie sie auf Anfrage den zuständigen Behörden zur Verfügung',
    ],
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
      'Nachgelagerten Anbietern ausreichende Informationen und Dokumentation bereitstellen.',
    whatItMeansDe:
      'Wenn andere Unternehmen auf Ihrem Modell aufbauen, müssen Sie ihnen genug Informationen geben, damit diese ihrerseits die AI-Act-Pflichten erfüllen können.',
    actionItemsDe: [
      'Erstellen Sie Dokumentation für nachgelagerte Anbieter',
      'Informieren Sie über Fähigkeiten, Grenzen und Risiken Ihres Modells',
    ],
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
    titleDe: 'Urheberrechts-Strategie',
    descriptionDe:
      'Eine Strategie zur Einhaltung des Urheberrechts umsetzen.',
    whatItMeansDe:
      'Sie müssen eine dokumentierte Strategie haben, wie Sie mit Urheberrechten umgehen — insbesondere bezüglich der Trainingsdaten Ihres Modells.',
    actionItemsDe: [
      'Dokumentieren Sie Ihre Urheberrechtsstrategie',
      'Beachten Sie insbesondere Opt-out-Vorbehalte von Rechteinhabern',
    ],
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
    titleDe: 'Trainingsdaten-Zusammenfassung veröffentlichen',
    descriptionDe:
      'Eine öffentliche Zusammenfassung der für das Training verwendeten Inhalte erstellen.',
    whatItMeansDe:
      'Sie müssen eine Zusammenfassung veröffentlichen, die beschreibt, welche Daten für das Training Ihres Modells verwendet wurden — gemäß einer Vorlage des AI Office.',
    actionItemsDe: [
      'Erstellen Sie eine Trainingsdaten-Zusammenfassung gemäß der Vorlage des AI Office',
      'Veröffentlichen Sie diese Zusammenfassung',
    ],
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
