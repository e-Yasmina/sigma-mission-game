import React from 'react';
import { ChallengeId, SupportedLanguage } from '../types';
import { UI_TRANSLATIONS } from '../data/uiTranslations';

interface ProgressBarProps {
  currentScreen: number; // 1 to 10
  answers: Record<ChallengeId, string | null>;
  lang: SupportedLanguage;
}

interface StepInfo {
  screen: number;
  labelFr: string;
  labelEn: string;
  shortLabelFr: string;
  shortLabelEn: string;
  mission?: string;
  challengeId?: ChallengeId;
}

const STEPS: StepInfo[] = [
  { screen: 1, labelFr: 'Accueil', labelEn: 'Welcome', shortLabelFr: 'A', shortLabelEn: 'W' },
  { screen: 2, labelFr: 'Défi 1', labelEn: 'Challenge 1', shortLabelFr: 'D1', shortLabelEn: 'C1', mission: 'M1', challengeId: 'D1' },
  { screen: 3, labelFr: 'Défi 2', labelEn: 'Challenge 2', shortLabelFr: 'D2', shortLabelEn: 'C2', mission: 'M1', challengeId: 'D2' },
  { screen: 4, labelFr: 'Défi 3', labelEn: 'Challenge 3', shortLabelFr: 'D3', shortLabelEn: 'C3', mission: 'M2', challengeId: 'D3' },
  { screen: 5, labelFr: 'Défi 4', labelEn: 'Challenge 4', shortLabelFr: 'D4', shortLabelEn: 'C4', mission: 'M2', challengeId: 'D4' },
  { screen: 6, labelFr: 'Défi 5', labelEn: 'Challenge 5', shortLabelFr: 'D5', shortLabelEn: 'C5', mission: 'M3', challengeId: 'D5' },
  { screen: 7, labelFr: 'Défi 6', labelEn: 'Challenge 6', shortLabelFr: 'D6', shortLabelEn: 'C6', mission: 'M3', challengeId: 'D6' },
  { screen: 8, labelFr: 'Défi 7', labelEn: 'Challenge 7', shortLabelFr: 'D7', shortLabelEn: 'C7', mission: 'M4', challengeId: 'D7' },
  { screen: 9, labelFr: 'Défi 8', labelEn: 'Challenge 8', shortLabelFr: 'D8', shortLabelEn: 'C8', mission: 'M4', challengeId: 'D8' },
  { screen: 10, labelFr: 'Bilan', labelEn: 'Verdict', shortLabelFr: 'B', shortLabelEn: 'V' },
];

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentScreen, answers, lang }) => {
  const t = UI_TRANSLATIONS[lang].progress;

  return (
    <nav className="sigma-progress-container" aria-label={t.progressAria}>
      <ol className="progress-steps-list">
        {STEPS.map((step) => {
          const isCurrent = step.screen === currentScreen;
          const isPassed = step.screen < currentScreen;
          const isAnswered = step.challengeId ? Boolean(answers[step.challengeId]) : isPassed;
          const label = lang === 'en' ? step.labelEn : step.labelFr;
          const shortLabel = lang === 'en' ? step.shortLabelEn : step.shortLabelFr;

          let statusClass = 'step-upcoming';
          if (isCurrent) statusClass = 'step-current';
          else if (isPassed) statusClass = 'step-completed';

          return (
            <li
              key={step.screen}
              className={`progress-step-item ${statusClass}`}
              aria-current={isCurrent ? 'step' : undefined}
            >
              <div className="step-marker" title={label}>
                <span className="step-num">{shortLabel}</span>
                {isPassed && isAnswered && <span className="step-check" aria-hidden="true">✓</span>}
              </div>
              <span className="step-caption">{label}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
