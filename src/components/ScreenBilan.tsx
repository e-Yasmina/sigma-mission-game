import React, { useState } from 'react';
import { SupportedLanguage } from '../types';
import { getCaseDossier } from '../data/caseData';
import { UI_TRANSLATIONS } from '../data/uiTranslations';
import { RobotInspector } from './RobotInspector';

interface ScreenBilanProps {
  reflection: string;
  lang: SupportedLanguage;
  onUpdateReflection: (text: string) => void;
  onReplay: () => void;
  onOpenDossier: () => void;
  onOpenGlossary: () => void;
}

export const ScreenBilan: React.FC<ScreenBilanProps> = ({
  reflection,
  lang,
  onUpdateReflection,
  onReplay,
  onOpenDossier,
  onOpenGlossary,
}) => {
  const [copied, setCopied] = useState(false);
  const [showFacilitatorNotes, setShowFacilitatorNotes] = useState(false);
  const [leftSlide, setLeftSlide] = useState<number>(1);
  const [rightSlide, setRightSlide] = useState<number>(1);

  const t = UI_TRANSLATIONS[lang].bilan;
  const dossier = getCaseDossier(lang);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(reflection);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <article className="screen-bilan-container" aria-labelledby="bilan-heading">
      <header className="bilan-header-bar">
        <div className="bilan-badge">{t.badge}</div>
        <h2 id="bilan-heading" className="bilan-title">
          {t.title}
        </h2>
        <p className="bilan-subtitle">{t.subtitle}</p>
      </header>

      <div className="bilan-slide-grid">
        {/* Left Column: Carousel (Slide 1: Official Verdict; Slide 2: Takeaways & Pedagogical Note) */}
        <div className="bilan-col-left">
          <div className="bilan-carousel-header">
            <button
              type="button"
              className="btn-carousel-arrow arrow-prev"
              onClick={() => setLeftSlide((prev) => (prev === 1 ? 2 : 1))}
              aria-label={t.carouselPrev}
              title={t.carouselPrev}
            >
              <span className="arrow-icon" aria-hidden="true">◀</span>
            </button>
            <div className="carousel-nav-status">
              <div className="carousel-dots-group" role="tablist" aria-label="Pages de synthèse">
                <button
                  type="button"
                  className={`carousel-dot ${leftSlide === 1 ? 'is-active' : ''}`}
                  onClick={() => setLeftSlide(1)}
                  aria-label="Slide 1"
                  aria-selected={leftSlide === 1}
                />
                <button
                  type="button"
                  className={`carousel-dot ${leftSlide === 2 ? 'is-active' : ''}`}
                  onClick={() => setLeftSlide(2)}
                  aria-label="Slide 2"
                  aria-selected={leftSlide === 2}
                />
              </div>
              <span className="carousel-step-label">
                {leftSlide === 1 ? t.leftSlide1 : t.leftSlide2}
              </span>
            </div>
            <button
              type="button"
              className="btn-carousel-arrow arrow-next"
              onClick={() => setLeftSlide((prev) => (prev === 1 ? 2 : 1))}
              aria-label={t.carouselNext}
              title={t.carouselNext}
            >
              <span className="arrow-icon" aria-hidden="true">▶</span>
            </button>
          </div>

          <div className="bilan-carousel-viewport">
            {leftSlide === 1 ? (
              <div key="left-slide-1" className="bilan-carousel-slide slide-enter-active">
                {/* Section 1: Official Verdict to Committee */}
                <section className="bilan-verdict-card" aria-label={t.verdictTitle}>
                  <div className="verdict-banner">
                    <span className="verdict-icon">⚖</span>
                    <h3 className="verdict-title">{t.verdictTitle}</h3>
                  </div>
                  <blockquote className="verdict-quote">
                    « {dossier.verdictComite.officialAvis} »
                  </blockquote>
                </section>
              </div>
            ) : (
              <div key="left-slide-2" className="bilan-carousel-slide slide-enter-active">
                {/* Section 2: 4 Consolidated Takeaways */}
                <section className="bilan-acquis-card" aria-label={t.takeawaysTitle}>
                  <h3 className="card-section-title">{t.takeawaysTitle}</h3>
                  <ol className="acquis-list">
                    {dossier.verdictComite.acquis.map((acquis, idx) => (
                      <li key={idx} className="acquis-item">
                        <span className="acquis-num">{idx + 1}</span>
                        <span className="acquis-text">{acquis}</span>
                      </li>
                    ))}
                  </ol>
                </section>

                {/* Educational Note */}
                <div className="bilan-notice-box" role="note">
                  <p>
                    <strong>{t.learningNoticeStrong}</strong>
                    {t.learningNoticeText}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Robot stays at top, content below is divided in carousel pages */}
        <div className="bilan-col-right">
          {/* Robot inspector is ALWAYS present at the top */}
          <div className="bilan-robot-callout">
            <RobotInspector mood="celebrating" size={88} speech={t.robotSpeech} />
          </div>

          {/* Right section carousel controls */}
          <div className="bilan-carousel-header">
            <button
              type="button"
              className="btn-carousel-arrow arrow-prev"
              onClick={() => setRightSlide((prev) => (prev === 1 ? 2 : 1))}
              aria-label={t.carouselPrev}
              title={t.carouselPrev}
            >
              <span className="arrow-icon" aria-hidden="true">◀</span>
            </button>
            <div className="carousel-nav-status">
              <div className="carousel-dots-group" role="tablist" aria-label="Pages d’application">
                <button
                  type="button"
                  className={`carousel-dot ${rightSlide === 1 ? 'is-active' : ''}`}
                  onClick={() => setRightSlide(1)}
                  aria-label="Slide 1"
                  aria-selected={rightSlide === 1}
                />
                <button
                  type="button"
                  className={`carousel-dot ${rightSlide === 2 ? 'is-active' : ''}`}
                  onClick={() => setRightSlide(2)}
                  aria-label="Slide 2"
                  aria-selected={rightSlide === 2}
                />
              </div>
              <span className="carousel-step-label">
                {rightSlide === 1 ? t.rightSlide1 : t.rightSlide2}
              </span>
            </div>
            <button
              type="button"
              className="btn-carousel-arrow arrow-next"
              onClick={() => setRightSlide((prev) => (prev === 1 ? 2 : 1))}
              aria-label={t.carouselNext}
              title={t.carouselNext}
            >
              <span className="arrow-icon" aria-hidden="true">▶</span>
            </button>
          </div>

          <div className="bilan-carousel-viewport">
            {rightSlide === 1 ? (
              <div key="right-slide-1" className="bilan-carousel-slide slide-enter-active">
                {/* Section 3: Points to reinforce */}
                <section className="bilan-vigilance-card" aria-label={t.vigilanceBadge}>
                  <div className="vigilance-header">
                    <span className="vigilance-badge">{t.vigilanceBadge}</span>
                  </div>
                  <p className="vigilance-text">{dossier.verdictComite.pointVigilance}</p>
                </section>

                {/* Section 4: Transfer Activity for Discussion */}
                <section className="bilan-transfert-card" aria-label={t.transferTitle}>
                  <div className="transfert-header">
                    <span className="transfert-tag">{t.transferTag}</span>
                    <h3 className="transfert-title">{t.transferTitle}</h3>
                  </div>
                  <p className="transfert-prompt">{dossier.verdictComite.questionTransfert}</p>

                  <div className="transfert-input-group">
                    <textarea
                      id="transfer-response"
                      rows={2}
                      value={reflection}
                      onChange={(e) => onUpdateReflection(e.target.value)}
                      placeholder={t.transferPlaceholder}
                      className="textarea-transfert"
                    />
                    <div className="transfert-actions-row">
                      <button
                        type="button"
                        className="btn-transfert-copy"
                        onClick={handleCopy}
                        disabled={!reflection.trim()}
                      >
                        {copied ? t.copiedBtn : t.copyBtn}
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            ) : (
              <div key="right-slide-2" className="bilan-carousel-slide slide-enter-active">
                {/* Section 6: Facilitator Debriefing Guide (Accordion) */}
                <div className="bilan-facilitator-section">
                  <button
                    type="button"
                    className="btn-facilitator-toggle"
                    onClick={() => setShowFacilitatorNotes(!showFacilitatorNotes)}
                    aria-expanded={showFacilitatorNotes}
                  >
                    {showFacilitatorNotes ? t.facilitatorToggleHide : t.facilitatorToggleShow}
                  </button>

                  {showFacilitatorNotes && (
                    <div className="facilitator-questions-list">
                      {dossier.postGameQuestions.map((q) => (
                        <div key={q.id} className="facilitator-q-card">
                          <h4 className="q-title">
                            Question {q.id} : {q.question}
                          </h4>
                          <div className="q-expected">
                            <strong>{t.facilitatorCriteriaLabel}</strong> {q.expectedCriteria}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Final Actions */}
                <footer className="bilan-footer-actions">
                  <button
                    type="button"
                    className="btn-primary-action btn-replay"
                    onClick={onReplay}
                  >
                    {t.replayBtn}
                  </button>
                  <div className="bilan-secondary-buttons">
                    <button
                      type="button"
                      className="btn-secondary-action"
                      onClick={onOpenDossier}
                    >
                      {t.reviewDossierBtn}
                    </button>
                    <button
                      type="button"
                      className="btn-secondary-action"
                      onClick={onOpenGlossary}
                    >
                      {t.reviewGlossaryBtn}
                    </button>
                  </div>
                </footer>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
