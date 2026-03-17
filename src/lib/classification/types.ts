export type RiskLevel =
  | 'PROHIBITED'
  | 'HIGH_RISK'
  | 'LIMITED_RISK'
  | 'MINIMAL_RISK'
  | 'GPAI'
  | 'NOT_AI';

export type UserRole =
  | 'PROVIDER'
  | 'DEPLOYER'
  | 'BOTH'
  | 'IMPORTER'
  | 'DISTRIBUTOR';

export interface Answer {
  questionId: string;
  answerId: string;
}

export interface Question {
  id: string;
  textDe: string;
  helpTextDe?: string;
  options: QuestionOption[];
}

export interface QuestionOption {
  id: string;
  labelDe: string;
  descriptionDe?: string;
}

export interface ProhibitedPractice {
  id: string;
  questionDe: string;
  examplesDe: string[];
  notMeantDe: string[];
  articleRef: string;
}

export interface HighRiskCategory {
  id: string;
  categoryDe: string;
  descriptionDe: string;
  deployerExamplesDe: string[];
  articleRef: string;
}

export interface Obligation {
  id: string;
  article: string;
  titleDe: string;
  descriptionDe: string;
  category: 'documentation' | 'transparency' | 'governance' | 'technical' | 'monitoring' | 'registration' | 'literacy';
  deadline: string;
  appliesTo: {
    riskLevels: RiskLevel[];
    roles: UserRole[];
  };
}

export interface ClassificationResult {
  riskLevel: RiskLevel;
  userRole: UserRole;
  summaryDe: string;
  obligations: Obligation[];
  classificationPath: Answer[];
}
