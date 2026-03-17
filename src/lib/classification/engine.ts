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
      return `Achtung: Dieses KI-System fällt unter eine verbotene Praktik gemäß Art. 5 des EU AI Act. Der Einsatz dieses Systems ist in der EU untersagt. Verbotene Praktiken sind seit dem 2. Februar 2025 in Kraft. Sie sollten den Einsatz dieses Systems umgehend einstellen und rechtlichen Rat einholen.`;

    case 'HIGH_RISK':
      return `Ihr KI-System ist als Hochrisiko-KI-System eingestuft. Als ${roleLabel} haben Sie umfangreiche Pflichten nach dem EU AI Act. Die Anforderungen müssen bis zum 2. August 2026 umgesetzt sein. Verstöße können mit Geldbußen bis zu 15 Mio. € oder 3% des weltweiten Jahresumsatzes geahndet werden.`;

    case 'LIMITED_RISK':
      return `Ihr KI-System unterliegt Transparenzpflichten (Art. 50). Als ${roleLabel} müssen Sie sicherstellen, dass Nutzer wissen, dass sie mit einem KI-System interagieren, und dass KI-generierte Inhalte als solche gekennzeichnet sind. Die Anforderungen gelten ab dem 2. August 2026.`;

    case 'MINIMAL_RISK':
      return `Ihr KI-System ist als KI-System mit minimalem Risiko eingestuft. Es gelten keine spezifischen Anforderungen über die allgemeine KI-Kompetenzpflicht (Art. 4) hinaus. Dennoch empfehlen wir, die freiwilligen Verhaltenskodizes (Art. 95) zu berücksichtigen.`;

    case 'GPAI':
      return `Dieses System basiert auf einem General-Purpose AI Model (GPAI). Als ${roleLabel} eines GPAI-Modells haben Sie spezifische Pflichten nach Art. 53. Wichtig: Die GPAI-Anforderungen gelten bereits ab dem 2. August 2025.`;

    case 'NOT_AI':
      return `Das beschriebene System ist kein KI-System im Sinne des EU AI Act. Die Verordnung findet keine Anwendung. Beachten Sie dennoch die allgemeine KI-Kompetenzpflicht (Art. 4), falls Sie andere KI-Systeme im Unternehmen einsetzen.`;
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
