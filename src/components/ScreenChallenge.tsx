import React, { useState, useEffect } from 'react';
import { Challenge, ChoiceKey, SupportedLanguage } from '../types';
import { UI_TRANSLATIONS } from '../data/uiTranslations';
import { RobotInspector, RobotMood } from './RobotInspector';

interface ScreenChallengeProps {
  challenge: Challenge;
  savedAnswer: ChoiceKey | null;
  lang: SupportedLanguage;
  onAnswer: (choice: ChoiceKey) => void;
  onNext: () => void;
}

export const ScreenChallenge: React.FC<ScreenChallengeProps> = ({
  challenge,
  savedAnswer,
  lang,
  onAnswer,
  onNext,
}) => {
  const [selectedChoice, setSelectedChoice] = useState<ChoiceKey | null>(savedAnswer);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showWhy, setShowWhy] = useState<boolean>(false);

  const t = UI_TRANSLATIONS[lang].challenge;

  // Sync state if challenge changes or saved answer is present
  useEffect(() => {
    setSelectedChoice(savedAnswer);
    setShowHint(false);
    setShowWhy(false);
  }, [challenge.id, savedAnswer]);

  const hasAnswered = selectedChoice !== null;
  const isCorrect = selectedChoice === challenge.correctAnswer;

  const handleSelect = (key: ChoiceKey) => {
    setSelectedChoice(key);
    onAnswer(key);
  };

  const handleRetry = () => {
    setSelectedChoice(null);
  };

  // Determine robot mood and speech based on state
  let robotMood: RobotMood = 'neutral';
  let robotSpeech: string = t.robotDefault(challenge.id);

  if (hasAnswered) {
    if (isCorrect) {
      robotMood = 'success';
      robotSpeech = t.robotSuccess;
    } else {
      robotMood = 'alert';
      robotSpeech = t.robotAlert;
    }
  } else if (showHint) {
    robotMood = 'thinking';
    robotSpeech = t.robotHint;
  }

  const optionKeys: ChoiceKey[] = ['A', 'B', 'C', 'D'];

  return (
    <article className="screen-challenge-container" aria-labelledby="challenge-heading">
      {/* Challenge Header */}
      <header className="challenge-header-bar">
        <div className="challenge-mission-tag">
          <span className="mission-pill">
            {t.missionLabel} {challenge.missionNumber} · {challenge.missionName.toUpperCase()}
          </span>
          <span className="challenge-num-pill">
            {t.challengeScreenLabel(challenge.id, challenge.screenNumber)}
          </span>
        </div>
        <h2 id="challenge-heading" className="challenge-title">
          {challenge.title}
        </h2>
        <div className="competence-badge">
          <span className="competence-label">{t.competenceLabel}</span> {challenge.competence}
        </div>
      </header>

      {/* Main Challenge Layout */}
      <div className="challenge-layout">
        {/* Left/Top Content: Situation & Question */}
        <section className="challenge-brief-box" aria-label="Situation et consigne">
          <div className="situation-card">
            <span className="card-micro-label">{t.situationLabel}</span>
            <p className="situation-text">{challenge.situation}</p>
          </div>

          <div className="question-card">
            <span className="card-micro-label">{t.decisionLabel}</span>
            <h3 className="question-text">{challenge.question}</h3>
          </div>

          {/* Interactive Options List */}
          <fieldset className="options-fieldset">
            <legend className="sr-only">{t.optionsLegend}</legend>
            <div className="options-list">
              {optionKeys.map((key) => {
                const isSelected = selectedChoice === key;
                const optionText = challenge.options[key];

                let optionStateClass = '';
                if (hasAnswered) {
                  if (isSelected) {
                    optionStateClass = isCorrect
                      ? 'option-selected-correct'
                      : 'option-selected-incorrect';
                  } else if (key === challenge.correctAnswer && !isCorrect) {
                    optionStateClass = 'option-target-hint';
                  }
                }

                return (
                  <button
                    key={key}
                    type="button"
                    className={`option-choice-btn ${isSelected ? 'is-selected' : ''} ${optionStateClass}`}
                    onClick={() => handleSelect(key)}
                    aria-pressed={isSelected}
                    aria-describedby={`opt-desc-${key}`}
                  >
                    <span className="option-letter">{key}</span>
                    <span id={`opt-desc-${key}`} className="option-text-content">
                      {optionText}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        </section>

        {/* Right/Side Panel: Robot Inspector & In-place Feedback */}
        <aside className="challenge-feedback-panel" aria-label="Assistance et retour d’expertise">
          <RobotInspector mood={robotMood} size={80} speech={robotSpeech} />

          {/* Tools & Hints */}
          <div className="helper-toggles">
            <button
              type="button"
              className={`btn-helper ${showHint ? 'is-active' : ''}`}
              onClick={() => setShowHint(!showHint)}
              aria-expanded={showHint}
            >
              {showHint ? t.hintBtnHide : t.hintBtnShow}
            </button>
            <button
              type="button"
              className={`btn-helper ${showWhy ? 'is-active' : ''}`}
              onClick={() => setShowWhy(!showWhy)}
              aria-expanded={showWhy}
            >
              {showWhy ? t.whyBtnHide : t.whyBtnShow}
            </button>
          </div>

          {showHint && (
            <div className="hint-card" role="note" aria-label={t.hintTag}>
              <span className="hint-tag">{t.hintTag}</span>
              <p>{challenge.hint}</p>
            </div>
          )}

          {showWhy && (
            <div className="why-card" role="note" aria-label={t.whyTag}>
              <span className="why-tag">{t.whyTag}</span>
              <p>{challenge.whyItMatters}</p>
            </div>
          )}

          {/* Feedback Display Area (live region) */}
          <div className="feedback-live-region" aria-live="polite" aria-atomic="true">
            {hasAnswered && (
              <div
                className={`feedback-card ${
                  isCorrect ? 'feedback-card-success' : 'feedback-card-retry'
                }`}
              >
                <div className="feedback-status-banner">
                  {isCorrect ? (
                    <>
                      <span className="status-icon" aria-hidden="true">
                        ✔
                      </span>
                      <strong>{t.feedbackOptimal}</strong>
                    </>
                  ) : (
                    <>
                      <span className="status-icon" aria-hidden="true">
                        ⚠
                      </span>
                      <strong>{t.feedbackWeakness}</strong>
                    </>
                  )}
                </div>

                <p className="feedback-explanation">
                  {isCorrect ? challenge.feedbackSuccess : challenge.feedbackRetry}
                </p>

                {/* Navigation actions after feedback */}
                <div className="feedback-action-bar">
                  {!isCorrect && (
                    <button
                      type="button"
                      className="btn-action-retry"
                      onClick={handleRetry}
                    >
                      {t.retryBtn}
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn-action-continue"
                    onClick={onNext}
                  >
                    {challenge.id === 'D8'
                      ? t.continueBilan
                      : isCorrect
                      ? t.continueNext
                      : t.continueAnyway}
                  </button>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </article>
  );
};
