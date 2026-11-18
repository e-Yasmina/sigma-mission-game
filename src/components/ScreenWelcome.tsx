import React, { useState } from 'react';
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
  const [isRulesExpanded, setIsRulesExpanded] = useState<boolean>(false);
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  return (
    <div className="screen-welcome-container">
      <div className="welcome-hero-card">
        <div className="welcome-header-strip">
          <span className="welcome-badge">{t.dossierNumber}</span>
          <span className="welcome-duration">{t.duration}</span>
        </div>

        <div className="welcome-main-layout">
          <div className="welcome-robot-slot">
            <RobotInspector mood="curious" size={92} speech={t.robotWelcome} />
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

        {/* 4 Mission Cards with Sub-text revealed on Hover/Focus */}
        <div className="welcome-missions-grid" role="region" aria-label="Missions overview">
          {t.missions.map((m, idx) => {
            const isActive = activeTooltip === idx;
            return (
              <div
                key={idx}
                className={`mission-preview-card ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveTooltip(idx)}
                onMouseLeave={() => setActiveTooltip(null)}
                onFocus={() => setActiveTooltip(idx)}
                onBlur={() => setActiveTooltip(null)}
                onClick={() => setActiveTooltip(isActive ? null : idx)}
                tabIndex={0}
                role="button"
                aria-haspopup="dialog"
                aria-expanded={isActive}
                aria-label={`${m.tag}: ${m.title}. ${m.desc}`}
              >
                <div className="mission-card-content">
                  <div className="mission-preview-tag">{m.tag}</div>
                  <h3 className="mission-preview-title">{m.title}</h3>
                </div>

                {/* Animated colored dashed line in negative space */}
                <div className="mission-card-filler" aria-hidden="true">
                  <div className="mission-animated-dash-line" />
                </div>

                <div className="mission-hover-cue">
                  <span className="cue-icon" aria-hidden="true">ℹ️</span>
                  <span className="cue-text">{t.missionHoverHint}</span>
                </div>

                {/* Floating Popover / Briefing on Hover */}
                <div
                  className={`mission-preview-popover popover-pos-${idx + 1}`}
                  role="tooltip"
                  aria-hidden={!isActive}
                >
                  <div className="popover-header">
                    <span className="popover-badge">{t.missionBriefingTag}</span>
                    <span className="popover-mission-name">{m.tag} : {m.title}</span>
                  </div>
                  <p className="popover-desc">{m.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Audit Protocol Guidelines: Closed Accordion by default */}
        <div className={`welcome-rules-accordion ${isRulesExpanded ? 'is-expanded' : 'is-collapsed'}`}>
          <button
            type="button"
            className="rules-accordion-trigger"
            onClick={() => setIsRulesExpanded(!isRulesExpanded)}
            aria-expanded={isRulesExpanded}
            aria-controls="welcome-rules-content"
          >
            <div className="rules-accordion-left">
              <span className="rules-accordion-icon" aria-hidden="true">
                {isRulesExpanded ? '▼' : '▶'}
              </span>
              <h3 className="rules-heading">{t.rulesTitle}</h3>
            </div>
            <span className="rules-accordion-hint">
              {isRulesExpanded ? t.rulesHintOpen : t.rulesHintClosed}
            </span>
          </button>

          {isRulesExpanded && (
            <div id="welcome-rules-content" className="rules-accordion-content" role="region">
              <ul className="rules-list">
                {t.rules.map((rule, idx) => (
                  <li key={idx}>
                    <strong>{rule.strong}</strong>
                    {rule.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
