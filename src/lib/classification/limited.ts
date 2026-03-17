// Transparenzpflichten nach Art. 50 — Kriterien für LIMITED_RISK

export interface TransparencyTrigger {
  id: string;
  descriptionDe: string;
  examplesDe: string[];
}

export const transparencyTriggers: TransparencyTrigger[] = [
  {
    id: 'T1',
    descriptionDe: 'Das System interagiert direkt mit natürlichen Personen (z.B. Chatbot)',
    examplesDe: [
      'KI-Chatbot im Kundenservice',
      'Virtueller Assistent auf der Website',
      'KI-Telefonassistent',
    ],
  },
  {
    id: 'T2',
    descriptionDe: 'Das System generiert synthetische Inhalte (Text, Bild, Audio, Video)',
    examplesDe: [
      'KI-Textgenerator für Marketing',
      'KI-Bildgenerierung',
      'Text-to-Speech / Voice-Cloning',
      'KI-Videogenerierung',
    ],
  },
  {
    id: 'T3',
    descriptionDe: 'Das System erstellt Deepfakes oder manipuliert Inhalte, die realen Personen ähneln',
    examplesDe: [
      'Face-Swap-Technologie',
      'Stimmenklonen realer Personen',
      'KI-generierte Videos mit realen Personen',
    ],
  },
  {
    id: 'T4',
    descriptionDe: 'Das System erkennt Emotionen oder ordnet Personen biometrischen Kategorien zu',
    examplesDe: [
      'Sentiment-Analyse in Echtzeit-Interaktionen',
      'Emotionserkennung bei Kunden (außerhalb von Arbeitsplatz/Bildung)',
    ],
  },
];
