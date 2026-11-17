import React, { useState, useEffect, useRef } from 'react';
import { SupportedLanguage } from '../types';
import { getGlossaryTerms } from '../data/glossaryData';
import { UI_TRANSLATIONS } from '../data/uiTranslations';

interface GlossaryModalProps {
  isOpen: boolean;
  lang: SupportedLanguage;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, lang, onClose }) => {
  const [search, setSearch] = useState('');
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const t = UI_TRANSLATIONS[lang].glossaryModal;
  const terms = getGlossaryTerms(lang);

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

  const filteredTerms = terms.filter(
    (item) =>
      item.term.toLowerCase().includes(search.toLowerCase()) ||
      item.definition.toLowerCase().includes(search.toLowerCase()) ||
      item.sigmaContext.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="sigma-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="sigma-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="glossary-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-eyebrow">{t.eyebrow}</span>
            <h2 id="glossary-title" className="modal-title">
              {t.title}
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

        <div className="modal-search-box">
          <label htmlFor="glossary-search" className="sr-only">
            {t.searchPlaceholder}
          </label>
          <input
            id="glossary-search"
            type="search"
            placeholder={t.searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-modal-search"
          />
        </div>

        <div className="modal-body-scroll">
          {filteredTerms.length === 0 ? (
            <p className="no-results">{t.noResults(search)}</p>
          ) : (
            <dl className="glossary-list">
              {filteredTerms.map((item, idx) => (
                <div key={idx} className="glossary-item-card">
                  <dt className="glossary-term">{item.term}</dt>
                  <dd className="glossary-definition">{item.definition}</dd>
                  <dd className="glossary-context">
                    <span className="context-tag">{t.contextTag}</span>
                    <span> {item.sigmaContext}</span>
                  </dd>
                </div>
              ))}
            </dl>
          )}
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
