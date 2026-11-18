import React from 'react';
import { SupportedLanguage } from '../types';
import { UI_TRANSLATIONS } from '../data/uiTranslations';

interface AppHeaderProps {
  currentScreen: number;
  totalScreens: number;
  lang: SupportedLanguage;
  onToggleLang: (newLang: SupportedLanguage) => void;
  onOpenGlossary: () => void;
  onOpenDossier: () => void;
  onResetGame: () => void;
  onCollapse?: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  currentScreen,
  totalScreens,
  lang,
  onToggleLang,
  onOpenGlossary,
  onOpenDossier,
  onResetGame,
  onCollapse,
}) => {
  const t = UI_TRANSLATIONS[lang].header;

  return (
    <header className="sigma-header" role="banner">
      <div className="header-brand">
        <span className="brand-badge">{t.brandBadge}</span>
        <h1 className="header-title">{t.title}</h1>
        <p className="header-subtitle">{t.subtitle}</p>
      </div>

      <div className="header-meta">
        {/* Language Switcher */}
        <div className="lang-switcher" role="group" aria-label={t.langAria}>
          <button
            type="button"
            className={`btn-lang-toggle ${lang === 'fr' ? 'is-active' : ''}`}
            onClick={() => onToggleLang('fr')}
            aria-pressed={lang === 'fr'}
            title="Passer en Français"
          >
            FR
          </button>
          <span className="lang-divider" aria-hidden="true">|</span>
          <button
            type="button"
            className={`btn-lang-toggle ${lang === 'en' ? 'is-active' : ''}`}
            onClick={() => onToggleLang('en')}
            aria-pressed={lang === 'en'}
            title="Switch to English"
          >
            EN
          </button>
        </div>

        <div className="screen-counter" aria-label={`${t.screenCounter} ${currentScreen} / ${totalScreens}`}>
          <span className="counter-label">{t.screenCounter}</span>
          <span className="counter-val">
            {currentScreen} / {totalScreens}
          </span>
        </div>

        <nav className="header-actions" aria-label="Outils d’aide">
          <button
            type="button"
            className="btn-header-tool"
            onClick={onOpenDossier}
            aria-label={lang === 'fr' ? 'Consulter les pièces du dossier' : 'Review case dossier'}
          >
            {t.dossierBtn}
          </button>
          <button
            type="button"
            className="btn-header-tool"
            onClick={onOpenGlossary}
            aria-label={lang === 'fr' ? 'Ouvrir le glossaire' : 'Open methodology glossary'}
          >
            {t.glossaryBtn}
          </button>
          {currentScreen > 1 && (
            <button
              type="button"
              className="btn-header-reset"
              onClick={onResetGame}
              aria-label={lang === 'fr' ? 'Recommencer la mission' : 'Restart the mission'}
            >
              {t.resetBtn}
            </button>
          )}
          {onCollapse && (
            <button
              type="button"
              className="btn-header-tool btn-header-collapse"
              onClick={onCollapse}
              aria-label={lang === 'fr' ? 'Masquer l’en-tête et le menu pour agrandir l’espace' : 'Collapse header & menu to save height'}
              title={lang === 'fr' ? 'Réduire l’en-tête en petit bouton pour gagner de la hauteur' : 'Collapse header & menu into small button to save height'}
            >
              {t.collapseBtn}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};
