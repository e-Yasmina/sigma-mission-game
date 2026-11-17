import React from 'react';
import { SupportedLanguage } from '../types';
import { UI_TRANSLATIONS } from '../data/uiTranslations';
import { RobotInspector } from './RobotInspector';

interface ScreenWelcomeProps {
  lang: SupportedLanguage;
  onStart: () => void;
  onOpenDossier: () => void;
  onOpenGlossary: () => void;
}

export const ScreenWelcome: React.FC<ScreenWelcomeProps> = ({
  lang,
  onStart,
  onOpenDossier,
  onOpenGlossary,
}) => {
  const t = UI_TRANSLATIONS[lang].welcome;

  return (
    <div className="screen-welcome-container">
      <div className="welcome-hero-card">
        <div className="welcome-header-strip">
          <span className="welcome-badge">{t.dossierNumber}</span>
          <span className="welcome-duration">{t.duration}</span>
        </div>

        <div className="welcome-main-layout">
          <div className="welcome-robot-slot">
            <RobotInspector mood="curious" size={110} speech={t.robotWelcome} />
          </div>

          <div className="welcome-content">
            <h2 className="welcome-title">{t.welcomeTitle}</h2>
            <p className="welcome-lead">{t.welcomeLead}</p>
            <p className="welcome-role">
              <strong>{t.welcomeRoleLead}</strong>
              {t.welcomeRole}
            </p>
          </div>
        </div>

        <div className="welcome-missions-grid">
          {t.missions.map((m, idx) => (
            <div key={idx} className="mission-preview-card">
              <div className="mission-preview-tag">{m.tag}</div>
              <h3 className="mission-preview-title">{m.title}</h3>
              <p className="mission-preview-desc">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="welcome-rules-box">
          <h3 className="rules-heading">{t.rulesTitle}</h3>
          <ul className="rules-list">
            {t.rules.map((rule, idx) => (
              <li key={idx}>
                <strong>{rule.strong}</strong>
                {rule.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="welcome-actions">
          <button
            type="button"
            className="btn-primary-action btn-start-game"
            onClick={onStart}
          >
            {t.startBtn}
          </button>
          <div className="welcome-secondary-actions">
            <button
              type="button"
              className="btn-secondary-action"
              onClick={onOpenDossier}
            >
              {t.readDossierBtn}
            </button>
            <button
              type="button"
              className="btn-secondary-action"
              onClick={onOpenGlossary}
            >
              {t.readGlossaryBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
