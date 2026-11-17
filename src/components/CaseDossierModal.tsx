import React, { useEffect, useRef } from 'react';
import { SupportedLanguage } from '../types';
import { getCaseDossier } from '../data/caseData';
import { UI_TRANSLATIONS } from '../data/uiTranslations';

interface CaseDossierModalProps {
  isOpen: boolean;
  lang: SupportedLanguage;
  onClose: () => void;
}

export const CaseDossierModal: React.FC<CaseDossierModalProps> = ({ isOpen, lang, onClose }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const t = UI_TRANSLATIONS[lang].dossierModal;
  const dossier = getCaseDossier(lang);

  useEffect(() => {
    if (isOpen) {
      closeBtnRef.current?.focus();
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="sigma-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="sigma-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dossier-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-eyebrow">{t.eyebrow}</span>
            <h2 id="dossier-title" className="modal-title">
              {dossier.title}
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="btn-modal-close"
            onClick={onClose}
            aria-label={t.closeBtn}
          >
            ✕
          </button>
        </div>

        <div className="modal-body-scroll">
          <div className="dossier-overview-box">
            <h3 className="overview-title">{dossier.subheading}</h3>
            <p className="overview-text">{dossier.overview}</p>
          </div>

          <h3 className="section-subtitle">{t.sectionSubtitle}</h3>
          <div className="facts-grid">
            {dossier.keyFacts.map((fact, index) => (
              <div key={index} className="fact-card">
                <div className="fact-header">
                  <span className="fact-category">{fact.category}</span>
                </div>
                <div className="fact-detail">
                  <strong>{t.reportedLabel}</strong> {fact.detail}
                </div>
                <div className="fact-flaw">
                  <span className="flaw-badge">{t.flawBadge}</span>
                  <p>{fact.flaw}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dossier-note-box">
            <p>
              <strong>{t.mandateLabel}</strong>{' '}
              {lang === 'fr'
                ? 'Votre rôle en tant qu’expert indépendant n’est pas de construire une IA, mais d’évaluer la validité interne, la pertinence des mesures et la conformité éthique du protocole soumis au comité universitaire.'
                : 'Your role as an independent expert is not to build AI, but to evaluate internal validity, measurement appropriateness, and ethical compliance of the protocol submitted to the university committee.'}
            </p>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-modal-action" onClick={onClose}>
            {t.returnBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
