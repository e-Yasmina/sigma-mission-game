export type SupportedLanguage = 'fr' | 'en';

export type MissionId = 'M1' | 'M2' | 'M3' | 'M4';

export type ChallengeId = 'D1' | 'D2' | 'D3' | 'D4' | 'D5' | 'D6' | 'D7' | 'D8';

export type ChoiceKey = 'A' | 'B' | 'C' | 'D';

export interface ChallengeOption {
  key: ChoiceKey;
  text: string;
}

export interface Challenge {
  id: ChallengeId;
  missionId: MissionId;
  missionNumber: number;
  missionName: string;
  challengeNumberInMission: number;
  screenNumber: number; // 2 to 9
  title: string;
  competence: string;
  situation: string;
  question: string;
  options: Record<ChoiceKey, string>;
  correctAnswer: ChoiceKey;
  feedbackSuccess: string;
  feedbackRetry: string;
  hint: string;
  whyItMatters: string;
}

export interface GlossaryEntry {
  term: string;
  definition: string;
  sigmaContext: string;
}

export interface MissionInfo {
  id: MissionId;
  number: number;
  name: string;
  description: string;
  challengeIds: [ChallengeId, ChallengeId];
}
