import React, { useState, useEffect, useRef } from 'react';
import { ChallengeId, ChoiceKey, SupportedLanguage } from './types';
import { getChallenges, CHALLENGE_ORDER } from './data/challengesData';
import { UI_TRANSLATIONS } from './data/uiTranslations';
import { AppHeader } from './components/AppHeader';
import { ProgressBar } from './components/ProgressBar';
import { ScreenWelcome } from './components/ScreenWelcome';
import { ScreenChallenge } from './components/ScreenChallenge';
import { ScreenBilan } from './components/ScreenBilan';
import { GlossaryModal } from './components/GlossaryModal';
import { CaseDossierModal } from './components/CaseDossierModal';

const INITIAL_ANSWERS: Record<ChallengeId, ChoiceKey | null> = {
  D1: null,
  D2: null,
  D3: null,
  D4: null,
  D5: null,
  D6: null,
  D7: null,
  D8: null,
};

const INITIAL_ATTEMPTS: Record<ChallengeId, number> = {
  D1: 0,
  D2: 0,
  D3: 0,
  D4: 0,
  D5: 0,
  D6: 0,
  D7: 0,
  D8: 0,
};

export default function App() {
  const [lang, setLang] = useState<SupportedLanguage>('en');
  const [currentScreen, setCurrentScreen] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<ChallengeId, ChoiceKey | null>>(INITIAL_ANSWERS);
  const [attempts, setAttempts] = useState<Record<ChallengeId, number>>(INITIAL_ATTEMPTS);
  const [transferReflection, setTransferReflection] = useState<string>('');
  const [isGlossaryOpen, setIsGlossaryOpen] = useState<boolean>(false);
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);

  const mainRegionRef = useRef<HTMLElement>(null);

  // Update HTML document language attribute when language changes
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // When changing screen, scroll to top and set focus to main landmark for accessibility
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    mainRegionRef.current?.focus();
  }, [currentScreen]);

  const handleStart = () => {
    setCurrentScreen(2);
  };

  const handleAnswer = (challengeId: ChallengeId, choice: ChoiceKey) => {
    setAnswers((prev) => ({ ...prev, [challengeId]: choice }));
    setAttempts((prev) => ({ ...prev, [challengeId]: prev[challengeId] + 1 }));
  };

  const handleNextScreen = () => {
    setCurrentScreen((prev) => Math.min(10, prev + 1));
  };

  const handleResetGame = () => {
    const confirmReset = window.confirm(UI_TRANSLATIONS[lang].header.resetConfirm);
    if (confirmReset) {
      setCurrentScreen(1);
      setAnswers(INITIAL_ANSWERS);
      setAttempts(INITIAL_ATTEMPTS);
      setTransferReflection('');
    }
  };

  const handleReplay = () => {
    setCurrentScreen(1);
    setAnswers(INITIAL_ANSWERS);
    setAttempts(INITIAL_ATTEMPTS);
  };

  const challenges = getChallenges(lang);

  // Helper to get active challenge for screens 2..9
  const currentChallengeId =
    currentScreen >= 2 && currentScreen <= 9 ? CHALLENGE_ORDER[currentScreen - 2] : null;

  return (
    <div className="sigma-app-wrapper">
      <AppHeader
        currentScreen={currentScreen}
        totalScreens={10}
        lang={lang}
        onToggleLang={setLang}
        onOpenGlossary={() => setIsGlossaryOpen(true)}
        onOpenDossier={() => setIsDossierOpen(true)}
        onResetGame={handleResetGame}
      />

      <ProgressBar currentScreen={currentScreen} answers={answers} lang={lang} />

      <main
        id="main-content"
        ref={mainRegionRef}
        tabIndex={-1}
        className="sigma-main-content"
        aria-label={lang === 'fr' ? 'Contenu actif du protocole' : 'Active protocol content'}
      >
        {currentScreen === 1 && (
          <ScreenWelcome
            lang={lang}
            onStart={handleStart}
            onOpenDossier={() => setIsDossierOpen(true)}
            onOpenGlossary={() => setIsGlossaryOpen(true)}
          />
        )}

        {currentScreen >= 2 && currentScreen <= 9 && currentChallengeId && (
          <ScreenChallenge
            key={`${currentChallengeId}-${lang}`}
            challenge={challenges[currentChallengeId]}
            savedAnswer={answers[currentChallengeId]}
            lang={lang}
            onAnswer={(choice) => handleAnswer(currentChallengeId, choice)}
            onNext={handleNextScreen}
          />
        )}

        {currentScreen === 10 && (
          <ScreenBilan
            reflection={transferReflection}
            lang={lang}
            onUpdateReflection={setTransferReflection}
            onReplay={handleReplay}
            onOpenDossier={() => setIsDossierOpen(true)}
            onOpenGlossary={() => setIsGlossaryOpen(true)}
          />
        )}
      </main>

      <GlossaryModal
        isOpen={isGlossaryOpen}
        lang={lang}
        onClose={() => setIsGlossaryOpen(false)}
      />

      <CaseDossierModal
        isOpen={isDossierOpen}
        lang={lang}
        onClose={() => setIsDossierOpen(false)}
      />
    </div>
  );
}
