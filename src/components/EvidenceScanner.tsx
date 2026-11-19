import React, { useState } from 'react';
import {
  EVIDENCE_SCANNER_COPY,
  EvidenceCategory,
} from '../data/evidenceScannerData';
import { SupportedLanguage } from '../types';

interface EvidenceScannerProps {
  lang: SupportedLanguage;
  onContinue: () => void;
}

export const EvidenceScanner: React.FC<EvidenceScannerProps> = ({ lang, onContinue }) => {
  const copy = EVIDENCE_SCANNER_COPY[lang];
  const [clueIndex, setClueIndex] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const clue = copy.clues[clueIndex];
  const categoryKeys: EvidenceCategory[] = ['measurement', 'validity', 'ethics'];

  const handleClassify = (category: EvidenceCategory) => {
    setFeedback(category === clue.category ? 'correct' : 'incorrect');
  };

  const handleAdvance = () => {
    if (clueIndex === copy.clues.length - 1) {
      setIsComplete(true);
      setFeedback(null);
      return;
    }
    setClueIndex((current) => current + 1);
    setFeedback(null);
  };

  const retry = () => setFeedback(null);

  return (
    <section className="evidence-scanner" aria-labelledby="evidence-scanner-heading">
      <div className="scanner-topline">
        <span className="scanner-eyebrow">{copy.eyebrow}</span>
        <span className="scanner-count" aria-live="polite">
          {isComplete
            ? `${copy.clues.length} / ${copy.clues.length}`
            : copy.clueLabel(clueIndex + 1, copy.clues.length)}
        </span>
      </div>

      {!isComplete ? (
        <>
          <h3 id="evidence-scanner-heading" className="scanner-heading">
            {copy.heading}
          </h3>
          <p className="scanner-instruction">{copy.instruction}</p>

          <div className="scanner-progress" aria-hidden="true">
            <span style={{ width: `${((clueIndex + 1) / copy.clues.length) * 100}%` }} />
          </div>

          <div className="scanner-exhibit" aria-live="polite" aria-atomic="true">
            <span className="exhibit-index">{String(clueIndex + 1).padStart(2, '0')}</span>
            <p>{clue.evidence}</p>
          </div>

          <fieldset className="scanner-category-fieldset" disabled={feedback !== null}>
            <legend>{copy.categoryPrompt}</legend>
            <div className="scanner-category-options">
              {categoryKeys.map((category) => (
                <button
                  key={category}
                  type="button"
                  className="scanner-category-button"
                  onClick={() => handleClassify(category)}
                >
                  {copy.categories[category]}
                </button>
              ))}
            </div>
          </fieldset>

          {feedback && (
            <div
              className={`scanner-feedback ${feedback === 'correct' ? 'is-correct' : 'is-incorrect'}`}
              role="status"
              aria-live="polite"
            >
              <strong>{feedback === 'correct' ? copy.correctLabel : copy.incorrectLabel}</strong>
              <p>{clue.explanation}</p>
              {feedback === 'correct' ? (
                <button type="button" className="scanner-next-button" onClick={handleAdvance}>
                  {clueIndex === copy.clues.length - 1 ? copy.finish : copy.nextClue}
                  <span aria-hidden="true"> →</span>
                </button>
              ) : (
                <button type="button" className="scanner-retry-button" onClick={retry}>
                  {copy.retry}
                </button>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="scanner-complete" aria-live="polite">
          <div className="scanner-complete-stamp" aria-hidden="true">✓</div>
          <h3 id="evidence-scanner-heading">{copy.completeHeading}</h3>
          <p>{copy.completeBody}</p>
          <button type="button" className="scanner-next-button" onClick={onContinue}>
            {copy.continueToDecision}
            <span aria-hidden="true"> →</span>
          </button>
        </div>
      )}
    </section>
  );
};
