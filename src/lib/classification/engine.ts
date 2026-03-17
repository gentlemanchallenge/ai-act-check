import { Answer, ClassificationResult, RiskLevel, UserRole } from './types';
import { getObligationsForResult } from './obligations';

export function classify(answers: Answer[]): ClassificationResult {
  const answerMap = new Map(answers.map((a) => [a.questionId, a.answerId]));

  // Determine user role
  const roleAnswer = answerMap.get('Q0');
  let userRole: UserRole = 'DEPLOYER';
  if (roleAnswer === 'Q0_SELF') userRole = 'PROVIDER';
  else if (roleAnswer === 'Q0_BOTH') userRole = 'BOTH';

  // Q1: Is it an AI system?
  const q1 = answerMap.get('Q1');
  if (q1 === 'Q1_NO') {
    return buildResult('NOT_AI', userRole, answers);
  }

  // Q3: Prohibited practice?
  const q3 = answerMap.get('Q3_PROHIBITED');
  if (q3 && q3 !== 'Q3_NONE') {
    return buildResult('PROHIBITED', userRole, answers);
  }

  // Q4: GPAI?
  const q4 = answerMap.get('Q4');
  if (q4 === 'Q4_YES') {
    return buildResult('GPAI', userRole, answers);
  }

  // Q5: Safety component in Annex I product?
  const q5 = answerMap.get('Q5');
  if (q5 === 'Q5_YES') {
    return buildResult('HIGH_RISK', userRole, answers);
  }

  // Q6: Annex III category?
  const q6 = answerMap.get('Q6');
  if (q6 && q6 !== 'Q6_NONE') {
    // Q7: Art. 6(3) exemption?
    const q7 = answerMap.get('Q7');
    if (q7 === 'Q7_EXEMPT') {
      // Exemption applies — not high risk
      // Fall through to transparency check
    } else {
      // High risk (not exempt or profiling)
      return buildResult('HIGH_RISK', userRole, answers);
    }
  }

  // Q8: Transparency obligations?
  const q8 = answerMap.get('Q8');
  if (q8 === 'Q8_YES') {
    return buildResult('LIMITED_RISK', userRole, answers);
  }

  return buildResult('MINIMAL_RISK', userRole, answers);
}

function buildResult(
  riskLevel: RiskLevel,
  userRole: UserRole,
  classificationPath: Answer[]
): ClassificationResult {
  const obligations = getObligationsForResult(riskLevel, userRole);
  const summaryDe = generateSummary(riskLevel, userRole);

  return {
    riskLevel,
    userRole,
    summaryDe,
    obligations,
    classificationPath,
  };
}

function generateSummary(riskLevel: RiskLevel, userRole: UserRole): string {
  const roleLabel =
    userRole === 'PROVIDER'
      ? 'Anbieter (Provider)'
      : userRole === 'DEPLOYER'
        ? 'Betreiber (Deployer)'
        : userRole === 'BOTH'
          ? 'Anbieter und Betreiber'
          : userRole === 'IMPORTER'
            ? 'Importeur'
            : 'Händler';

  switch (riskLevel) {
    case 'PROHIBITED':
      return `Achtung: Diese KI-Anwendung ist in der EU verboten! Der Einsatz verstößt gegen Art. 5 des EU AI Act. Dieses Verbot ist bereits seit dem 2. Februar 2025 in Kraft. Bitte stellen Sie den Einsatz dieses Systems sofort ein und holen Sie rechtlichen Rat ein. Bei Verstößen drohen Strafen bis zu 35 Mio. € oder 7% des weltweiten Jahresumsatzes (bei KMU: der niedrigere Betrag).`;

    case 'HIGH_RISK':
      return `Ihr KI-System ist als Hochrisiko eingestuft. Das bedeutet: Sie dürfen es weiter nutzen, aber es gelten strenge Auflagen. Als ${roleLabel} müssen Sie unter anderem eine menschliche Aufsicht sicherstellen, die Eingabedaten prüfen und den Betrieb überwachen. Sie haben bis zum 2. August 2026 Zeit, alles umzusetzen. Scrollen Sie nach unten für Ihre konkreten Pflichten und Handlungsempfehlungen.`;

    case 'LIMITED_RISK':
      return `Ihr KI-System fällt in die Kategorie "Begrenztes Risiko". Das ist die gute Nachricht: Es gelten keine strengen Hochrisiko-Auflagen. Sie müssen aber Transparenzpflichten einhalten — das heißt vor allem: Kennzeichnen Sie, wo KI im Spiel ist, damit Ihre Kunden und Nutzer Bescheid wissen. Die Details finden Sie unten.`;

    case 'MINIMAL_RISK':
      return `Gute Nachricht: Ihr KI-System hat minimales Risiko. Es gelten keine besonderen Pflichten nach dem AI Act — außer der allgemeinen KI-Kompetenzpflicht (Art. 4), die bereits seit Februar 2025 für alle Unternehmen gilt. Stellen Sie sicher, dass Ihre Mitarbeiter wissen, wie sie KI verantwortungsvoll einsetzen.`;

    case 'GPAI':
      return `Ihr System basiert auf einem General-Purpose AI Model (z.B. wie GPT, Claude oder Gemini). Als ${roleLabel} eines solchen Modells haben Sie besondere Pflichten: technische Dokumentation, Urheberrechts-Strategie und Informationspflichten gegenüber nachgelagerten Anbietern. Wichtig: Diese Pflichten gelten bereits ab dem 2. August 2025 — also ein Jahr früher als die Hochrisiko-Anforderungen.`;

    case 'NOT_AI':
      return `Entwarnung: Das beschriebene System ist kein KI-System im Sinne des EU AI Act. Die Verordnung gilt dafür nicht. Falls Sie aber andere KI-Tools in Ihrem Unternehmen einsetzen (z.B. ChatGPT, Copilot, DeepL), prüfen Sie diese separat — und beachten Sie die allgemeine KI-Kompetenzpflicht (Art. 4), die seit Februar 2025 gilt.`;
  }
}

export function getNextQuestion(answers: Answer[]): string | null {
  const answerMap = new Map(answers.map((a) => [a.questionId, a.answerId]));

  // Flow: Q0 → Q1 → Q3 → Q4 → Q5 → Q6 → (Q7) → Q8 → done
  if (!answerMap.has('Q0')) return 'Q0';
  if (!answerMap.has('Q1')) return 'Q1';

  const q1 = answerMap.get('Q1');
  if (q1 === 'Q1_NO') return null; // NOT_AI

  if (!answerMap.has('Q3_PROHIBITED')) return 'Q3_PROHIBITED';
  const q3 = answerMap.get('Q3_PROHIBITED');
  if (q3 !== 'Q3_NONE') return null; // PROHIBITED

  if (!answerMap.has('Q4')) return 'Q4';
  const q4 = answerMap.get('Q4');
  if (q4 === 'Q4_YES') return null; // GPAI

  if (!answerMap.has('Q5')) return 'Q5';
  const q5 = answerMap.get('Q5');
  if (q5 === 'Q5_YES') return null; // HIGH_RISK

  if (!answerMap.has('Q6')) return 'Q6';
  const q6 = answerMap.get('Q6');

  if (q6 !== 'Q6_NONE') {
    if (!answerMap.has('Q7')) return 'Q7';
    const q7 = answerMap.get('Q7');
    if (q7 !== 'Q7_EXEMPT') return null; // HIGH_RISK
  }

  if (!answerMap.has('Q8')) return 'Q8';
  return null; // Classification complete
}
