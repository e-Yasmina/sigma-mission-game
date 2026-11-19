import { SupportedLanguage } from '../types';

export type EvidenceCategory = 'measurement' | 'validity' | 'ethics';

export interface EvidenceScannerCopy {
  eyebrow: string;
  heading: string;
  instruction: string;
  clueLabel: (current: number, total: number) => string;
  categoryPrompt: string;
  categories: Record<EvidenceCategory, string>;
  correctLabel: string;
  incorrectLabel: string;
  retry: string;
  nextClue: string;
  finish: string;
  completeHeading: string;
  completeBody: string;
  continueToDecision: string;
  clues: {
    evidence: string;
    category: EvidenceCategory;
    explanation: string;
  }[];
}

export const EVIDENCE_SCANNER_COPY: Record<SupportedLanguage, EvidenceScannerCopy> = {
  fr: {
    eyebrow: 'SCANNER DE PREUVES · DOSSIER 07',
    heading: 'Classez les pièces du dossier',
    instruction:
      'Inspectez chaque pièce et classez-la dans la bonne famille avant de rendre votre avis sur les résultats.',
    clueLabel: (current, total) => `PIÈCE ${current} / ${total}`,
    categoryPrompt: 'Cette pièce concerne surtout…',
    categories: {
      measurement: 'La mesure',
      validity: 'La validité',
      ethics: 'L’éthique',
    },
    correctLabel: 'Pièce correctement classée',
    incorrectLabel: 'Cette pièce mérite un autre classement',
    retry: 'Reclasser cette pièce',
    nextClue: 'Scanner la pièce suivante',
    finish: 'Terminer le scan',
    completeHeading: 'Dossier scanné',
    completeBody:
      'Vous avez séparé les limites de mesure, la menace de validité et l’enjeu éthique. Passez maintenant au verdict sur ce que les chiffres permettent réellement d’affirmer.',
    continueToDecision: 'Rendre mon avis sur les résultats',
    clues: [
      {
        evidence: '85 % des utilisateurs se disent satisfaits, contre 60 % du groupe comparateur.',
        category: 'measurement',
        explanation:
          'Ces pourcentages mesurent une satisfaction déclarée : une expérience ressentie, pas la qualité des synthèses.',
      },
      {
        evidence: 'Aucun barème commun n’évalue directement la qualité des synthèses.',
        category: 'measurement',
        explanation:
          'La qualité, résultat principal annoncé, n’a pas été mesurée directement avec un critère partagé.',
      },
      {
        evidence: '46 volontaires utilisent l’assistant et 44 autres étudiants suivent la méthode habituelle, sans affectation aléatoire.',
        category: 'validity',
        explanation:
          'Les groupes peuvent différer avant l’étude. L’auto-sélection fragilise l’attribution d’une différence à l’assistant.',
      },
      {
        evidence: 'Certaines requêtes contiennent des informations personnelles ; consentement et protections ne sont pas décrits.',
        category: 'ethics',
        explanation:
          'L’usage de données personnelles exige d’examiner information, consentement, minimisation, sécurité et règles institutionnelles applicables.',
      },
    ],
  },
  en: {
    eyebrow: 'EVIDENCE SCANNER · CASE FILE 07',
    heading: 'Classify the case evidence',
    instruction:
      'Inspect each exhibit and file it under the right category before deciding what the results can support.',
    clueLabel: (current, total) => `EXHIBIT ${current} / ${total}`,
    categoryPrompt: 'This exhibit mainly concerns…',
    categories: {
      measurement: 'Measurement',
      validity: 'Validity',
      ethics: 'Ethics',
    },
    correctLabel: 'Exhibit classified correctly',
    incorrectLabel: 'This exhibit belongs in a different category',
    retry: 'Reclassify this exhibit',
    nextClue: 'Scan the next exhibit',
    finish: 'Finish the scan',
    completeHeading: 'Case file scanned',
    completeBody:
      'You separated measurement limits, a validity threat, and an ethical concern. Now decide what the figures can actually support.',
    continueToDecision: 'Give my verdict on the results',
    clues: [
      {
        evidence: '85% of assistant users report satisfaction, compared with 60% of the comparison group.',
        category: 'measurement',
        explanation:
          'These percentages measure reported satisfaction: a perceived experience, not synthesis quality.',
      },
      {
        evidence: 'No common rubric directly assesses the quality of the syntheses.',
        category: 'measurement',
        explanation:
          'The announced primary outcome, synthesis quality, was not directly measured with a shared criterion.',
      },
      {
        evidence: '46 volunteers use the assistant and 44 other students use the usual method, with no random assignment.',
        category: 'validity',
        explanation:
          'The groups may differ before the study. Self-selection weakens attribution of a difference to the assistant.',
      },
      {
        evidence: 'Some prompts contain personal information; consent and safeguards are not described.',
        category: 'ethics',
        explanation:
          'Personal data use requires review of information, consent, minimization, security, and applicable institutional rules.',
      },
    ],
  },
};
