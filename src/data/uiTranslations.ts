import { SupportedLanguage } from '../types';

export interface UiStrings {
  header: {
    brandBadge: string;
    title: string;
    subtitle: string;
    screenCounter: string;
    dossierBtn: string;
    glossaryBtn: string;
    resetBtn: string;
    resetConfirm: string;
    langAria: string;
  };
  progress: {
    progressAria: string;
    introLabel: string;
    introShort: string;
    bilanLabel: string;
    bilanShort: string;
  };
  welcome: {
    dossierNumber: string;
    duration: string;
    robotWelcome: string;
    welcomeTitle: string;
    welcomeLead: string;
    welcomeRoleLead: string;
    welcomeRole: string;
    missions: {
      tag: string;
      title: string;
      desc: string;
    }[];
    missionHoverHint: string;
    missionBriefingTag: string;
    rulesTitle: string;
    rulesHintClosed: string;
    rulesHintOpen: string;
    rules: {
      strong: string;
      text: string;
    }[];
    startBtn: string;
    readDossierBtn: string;
    readGlossaryBtn: string;
  };
  challenge: {
    missionLabel: string;
    challengeScreenLabel: (id: string, screen: number) => string;
    competenceLabel: string;
    situationLabel: string;
    decisionLabel: string;
    optionsLegend: string;
    robotDefault: (id: string) => string;
    robotSuccess: string;
    robotAlert: string;
    robotHint: string;
    hintBtnShow: string;
    hintBtnHide: string;
    whyBtnShow: string;
    whyBtnHide: string;
    hintTag: string;
    whyTag: string;
    feedbackOptimal: string;
    feedbackWeakness: string;
    retryBtn: string;
    continueNext: string;
    continueBilan: string;
    continueAnyway: string;
  };
  bilan: {
    badge: string;
    title: string;
    subtitle: string;
    robotSpeech: string;
    verdictTitle: string;
    takeawaysTitle: string;
    vigilanceBadge: string;
    transferTag: string;
    transferTitle: string;
    transferLabel: string;
    transferPlaceholder: string;
    copyBtn: string;
    copiedBtn: string;
    learningNoticeStrong: string;
    learningNoticeText: string;
    facilitatorToggleShow: string;
    facilitatorToggleHide: string;
    facilitatorCriteriaLabel: string;
    replayBtn: string;
    reviewDossierBtn: string;
    reviewGlossaryBtn: string;
  };
  glossaryModal: {
    eyebrow: string;
    title: string;
    searchPlaceholder: string;
    noResults: (query: string) => string;
    contextTag: string;
    closeBtn: string;
    returnBtn: string;
  };
  dossierModal: {
    eyebrow: string;
    closeBtn: string;
    sectionSubtitle: string;
    reportedLabel: string;
    flawBadge: string;
    mandateLabel: string;
    returnBtn: string;
  };
}

export const UI_TRANSLATIONS: Record<SupportedLanguage, UiStrings> = {
  fr: {
    header: {
      brandBadge: 'EXPERTISE SCIENTIFIQUE',
      title: 'Mission SIGMA',
      subtitle: 'Le protocole scientifique à sauver',
      screenCounter: 'Écran',
      dossierBtn: '📋 Dossier',
      glossaryBtn: '📖 Glossaire',
      resetBtn: '↺ Recommencer',
      resetConfirm: 'Voulez-vous réinitialiser votre progression et recommencer la mission à l’accueil ?',
      langAria: 'Changer la langue d’affichage',
    },
    progress: {
      progressAria: 'Progression du parcours (10 écrans)',
      introLabel: 'Accueil',
      introShort: 'A',
      bilanLabel: 'Bilan',
      bilanShort: 'B',
    },
    welcome: {
      dossierNumber: 'DOSSIER D’EXPERTISE N°2026-SIGMA',
      duration: '⏱ Durée indicative : 15–20 min',
      robotWelcome:
        'Bonjour confrère ! Le comité universitaire attend notre audit méthodologique sur ce protocole d’IA générative.',
      welcomeTitle: 'Bienvenue dans la Mission SIGMA',
      welcomeLead:
        'Une équipe universitaire affirme qu’un assistant d’IA générative améliore la qualité des synthèses critiques de littérature chez des étudiants de master. Elle réclame la publication immédiate d’un rapport concluant à un effet causal bénéfique.',
      welcomeRoleLead: 'Votre mandat d’expert scientifique indépendant :',
      welcomeRole:
        ' analyser méthodologiquement ce protocole fictif, déceler ses failles de validité, opérationnaliser des mesures rigoureuses et soumettre votre avis argumenté au comité.',
      missions: [
        {
          tag: 'MISSION 1',
          title: 'Diagnostiquer',
          desc: 'Séparer l’affirmation du problème investigable et définir population, exposition et indicateurs observables.',
        },
        {
          tag: 'MISSION 2',
          title: 'Reconstruire',
          desc: 'Formuler une question empirique délimitée et construire une hypothèse scientifique falsifiable.',
        },
        {
          tag: 'MISSION 3',
          title: 'Contrôler',
          desc: 'Choisir un plan de comparaison défendable et neutraliser les biais d’auto-sélection et l’absence de ligne de base.',
        },
        {
          tag: 'MISSION 4',
          title: 'Défendre',
          desc: 'Distinguer satisfaction et compétence, puis formuler un avis éthique sur les données et le consentement.',
        },
      ],
      missionHoverHint: 'Survoler pour le briefing',
      missionBriefingTag: 'BRIEFING DE MISSION',
      rulesTitle: 'Règles du protocole d’évaluation',
      rulesHintClosed: '4 règles d’audit · Cliquer pour afficher',
      rulesHintOpen: 'Masquer les règles',
      rules: [
        {
          strong: '8 décisions réparties sur 4 missions :',
          text: ' chaque défi explore un choix méthodologique concret.',
        },
        {
          strong: 'Droit à l’erreur formateur :',
          text: ' chaque réponse produit une explication détaillée. Vous pouvez réessayer ou continuer sans blocage ni pénalité.',
        },
        {
          strong: 'Aucun prérequis technique :',
          text: ' vous apprenez la démarche d’enquête scientifique et l’esprit critique méthodologique, pas le codage d’une IA.',
        },
        {
          strong: 'Confidentialité totale :',
          text: ' vos réponses sont traitées localement dans votre navigateur ; aucune donnée n’est transmise ni enregistrée.',
        },
      ],
      startBtn: '▶ Ouvrir le dossier & Commencer la Mission',
      readDossierBtn: '📋 Lire les pièces du dossier',
      readGlossaryBtn: '📖 Consulter le glossaire',
    },
    challenge: {
      missionLabel: 'MISSION',
      challengeScreenLabel: (id, screen) => `Défi ${id} (Écran ${screen}/10)`,
      competenceLabel: 'Compétence visée :',
      situationLabel: 'SITUATION OBSERVÉE',
      decisionLabel: 'DÉCISION D’EXPERT ATTENDUE',
      optionsLegend: 'Propositions de réponse',
      robotDefault: (id) => `Défi ${id} : analysez avec méthode chaque proposition.`,
      robotSuccess: 'Excellente analyse ! Votre raisonnement méthodologique est solide.',
      robotAlert: 'Attention à la validité : examinez l’explication et l’indice pour ajuster.',
      robotHint: 'Indice en cours d’examen : focalisez sur l’indicateur observable.',
      hintBtnShow: '💡 Consulter l’indice',
      hintBtnHide: '💡 Masquer l’indice',
      whyBtnShow: '🔍 Pourquoi ce choix compte ?',
      whyBtnHide: '🔍 Masquer l’explication',
      hintTag: 'INDICE DU GUIDE :',
      whyTag: 'FONDEMENT SCIENTIFIQUE :',
      feedbackOptimal: 'Option optimale retenue',
      feedbackWeakness: 'Faiblesse méthodologique détectée',
      retryBtn: '↺ Réessayer ce défi',
      continueNext: 'Continuer vers le Défi suivant ▶',
      continueBilan: 'Consulter le Bilan final ▶',
      continueAnyway: 'Poursuivre la mission ▶',
    },
    bilan: {
      badge: 'BILAN OFFICIEL D’EXPERTISE · ÉCRAN 10/10',
      title: 'Avis motivé au comité universitaire',
      subtitle: 'Mission d’audit méthodologique complétée sur le dossier SIGMA #2026-IA',
      robotSpeech: 'Mission accomplie ! Voici la synthèse rigoureuse de notre audit pour le comité.',
      verdictTitle: 'Conclusions de l’audit scientifique',
      takeawaysTitle: 'Quatre acquis méthodologiques clés',
      vigilanceBadge: 'Rappel d’intégrité scientifique',
      transferTag: 'APPLICATION & DÉBRIEFING',
      transferTitle: 'Question de transfert méthodologique',
      transferLabel:
        'Vos notes d’expert pour le débriefing en atelier (enregistrées localement dans votre session) :',
      transferPlaceholder:
        'Exemple : Avant d’attribuer une différence à une méthode pédagogique, j’exigerais : 1) une mesure préalable (prétest) identique pour vérifier la comparabilité initiale ; 2) une évaluation anonyme à l’aveugle avec un barème standardisé ; 3) un accord formel et le respect de la minimisation des données...',
      copyBtn: '📋 Copier mes notes pour le débriefing',
      copiedBtn: '✓ Notes copiées dans le presse-papier',
      learningNoticeStrong: 'Note pédagogique :',
      learningNoticeText:
        ' Ce parcours est un dispositif de formation par la résolution de problème. Les choix effectués constituent des traces d’apprentissage et de réflexion critique, et non un examen sommatif ou une mesure psychométrique standardisée.',
      facilitatorToggleShow:
        '▼ Consulter les 4 questions d’approfondissement pour l’animateur (Livrable E02)',
      facilitatorToggleHide:
        '▲ Masquer les 4 questions d’approfondissement pour l’animateur',
      facilitatorCriteriaLabel: 'Critère d’évaluation attendu :',
      replayBtn: '↺ Rejouer la Mission SIGMA',
      reviewDossierBtn: '📋 Revoir le dossier de recherche',
      reviewGlossaryBtn: '📖 Parcourir le glossaire',
    },
    glossaryModal: {
      eyebrow: 'AIDE MÉTHODOLOGIQUE',
      title: 'Glossaire des concepts clés',
      searchPlaceholder: 'Filtrer un concept (ex : biais, variable, prétest...)',
      noResults: (query) => `Aucun concept trouvé pour « ${query} ».`,
      contextTag: 'Application au dossier SIGMA :',
      closeBtn: 'Fermer le glossaire',
      returnBtn: 'Retour à la mission',
    },
    dossierModal: {
      eyebrow: 'PIÈCES DU DOSSIER DE RECHERCHE',
      closeBtn: 'Fermer le dossier',
      sectionSubtitle: 'Constats et pièces examinées par l’expert',
      reportedLabel: 'Protocole rapporté :',
      flawBadge: 'Vulnérabilité',
      mandateLabel: 'Rappel du mandat :',
      returnBtn: 'Reprendre l’expertise',
    },
  },
  en: {
    header: {
      brandBadge: 'SCIENTIFIC EXPERT AUDIT',
      title: 'Mission SIGMA',
      subtitle: 'Rescuing the Scientific Protocol',
      screenCounter: 'Screen',
      dossierBtn: '📋 Case File',
      glossaryBtn: '📖 Glossary',
      resetBtn: '↺ Restart',
      resetConfirm: 'Do you want to reset your progress and restart the mission from the beginning?',
      langAria: 'Switch display language',
    },
    progress: {
      progressAria: 'Protocol progress (10 screens)',
      introLabel: 'Welcome',
      introShort: 'W',
      bilanLabel: 'Verdict',
      bilanShort: 'V',
    },
    welcome: {
      dossierNumber: 'EXPERT REVIEW DOSSIER #2026-SIGMA',
      duration: '⏱ Estimated duration: 15–20 min',
      robotWelcome:
        'Greetings, colleague! The university committee awaits our methodological audit of this generative AI study.',
      welcomeTitle: 'Welcome to Mission SIGMA',
      welcomeLead:
        'A university research team claims that a generative AI assistant improves the quality of master’s students’ critical literature syntheses. They demand immediate publication of a report asserting a positive causal impact.',
      welcomeRoleLead: 'Your role as an independent scientific expert:',
      welcomeRole:
        ' methodologically audit this fictional study, uncover validity threats, operationalize sound measures, and deliver a reasoned recommendation to the committee.',
      missions: [
        {
          tag: 'MISSION 1',
          title: 'Diagnose',
          desc: 'Separate the assertion from an investigable problem and define population, exposure, and observable indicators.',
        },
        {
          tag: 'MISSION 2',
          title: 'Reconstruct',
          desc: 'Formulate a bounded empirical question and construct a falsifiable scientific hypothesis.',
        },
        {
          tag: 'MISSION 3',
          title: 'Control',
          desc: 'Select a defensible comparison design and mitigate self-selection bias and the absence of a baseline.',
        },
        {
          tag: 'MISSION 4',
          title: 'Defend',
          desc: 'Distinguish satisfaction from competence, then establish ethical safeguards for data and informed consent.',
        },
      ],
      missionHoverHint: 'Hover for briefing',
      missionBriefingTag: 'MISSION BRIEFING',
      rulesTitle: 'Audit Protocol Guidelines',
      rulesHintClosed: '4 audit guidelines · Click to expand',
      rulesHintOpen: 'Hide guidelines',
      rules: [
        {
          strong: '8 decisions across 4 missions:',
          text: ' each challenge explores a concrete methodological choice.',
        },
        {
          strong: 'Constructive learning:',
          text: ' each choice generates detailed feedback. You may retry or proceed without deadlock or punitive scoring.',
        },
        {
          strong: 'No technical prerequisites:',
          text: ' you master scientific inquiry and critical research literacy, not AI programming.',
        },
        {
          strong: 'Strict privacy:',
          text: ' your responses are processed purely in-browser; no data is transmitted or tracked.',
        },
      ],
      startBtn: '▶ Open Dossier & Begin Mission',
      readDossierBtn: '📋 Review Case Files',
      readGlossaryBtn: '📖 Browse Glossary',
    },
    challenge: {
      missionLabel: 'MISSION',
      challengeScreenLabel: (id, screen) => `Challenge ${id} (Screen ${screen}/10)`,
      competenceLabel: 'Target Competence:',
      situationLabel: 'OBSERVED SITUATION',
      decisionLabel: 'EXPECTED EXPERT DECISION',
      optionsLegend: 'Answer options',
      robotDefault: (id) => `Challenge ${id}: methodically evaluate each proposition.`,
      robotSuccess: 'Excellent analysis! Your methodological reasoning is sound.',
      robotAlert: 'Watch out for validity threats: review the explanation and hint to adjust.',
      robotHint: 'Hint under review: focus on the observable indicator.',
      hintBtnShow: '💡 View Hint',
      hintBtnHide: '💡 Hide Hint',
      whyBtnShow: '🔍 Why this decision matters',
      whyBtnHide: '🔍 Hide explanation',
      hintTag: 'GUIDE HINT:',
      whyTag: 'SCIENTIFIC RATIONALE:',
      feedbackOptimal: 'Optimal Choice Selected',
      feedbackWeakness: 'Methodological Flaw Detected',
      retryBtn: '↺ Retry this challenge',
      continueNext: 'Continue to Next Challenge ▶',
      continueBilan: 'Proceed to Final Verdict ▶',
      continueAnyway: 'Proceed to Next Challenge ▶',
    },
    bilan: {
      badge: 'OFFICIAL EXPERT AUDIT · SCREEN 10/10',
      title: 'Reasoned Recommendation to University Committee',
      subtitle: 'Methodological audit mission completed for dossier SIGMA #2026-IA',
      robotSpeech: 'Mission accomplished! Here is the rigorous synthesis of our audit for the committee.',
      verdictTitle: 'Scientific Audit Conclusions',
      takeawaysTitle: 'Four Key Methodological Takeaways',
      vigilanceBadge: 'Scientific Integrity Reminder',
      transferTag: 'APPLICATION & DEBRIEFING',
      transferTitle: 'Methodological Transfer Question',
      transferLabel:
        'Your expert notes for workshop debriefing (stored locally in this session):',
      transferPlaceholder:
        'Example: Before attributing a difference to an instructional method, I would require: 1) an identical baseline pretest to verify initial comparability; 2) blinded evaluation with a standardized rubric; 3) explicit consent and strict data minimization...',
      copyBtn: '📋 Copy notes for debriefing',
      copiedBtn: '✓ Notes copied to clipboard',
      learningNoticeStrong: 'Educational Note:',
      learningNoticeText:
        ' This game is a problem-solving educational tool. Selected responses serve as learning traces and critical reflections, not a summative test or standardized psychometric measurement.',
      facilitatorToggleShow:
        '▼ View 4 facilitator debriefing questions (Deliverable E02)',
      facilitatorToggleHide:
        '▲ Hide facilitator debriefing questions',
      facilitatorCriteriaLabel: 'Expected evaluation criteria:',
      replayBtn: '↺ Replay Mission SIGMA',
      reviewDossierBtn: '📋 Review Research Dossier',
      reviewGlossaryBtn: '📖 Browse Glossary',
    },
    glossaryModal: {
      eyebrow: 'METHODOLOGICAL SUPPORT',
      title: 'Key Concepts Glossary',
      searchPlaceholder: 'Filter concept (e.g. bias, variable, pretest...)',
      noResults: (query) => `No concepts found for "${query}".`,
      contextTag: 'Application to SIGMA dossier:',
      closeBtn: 'Close glossary',
      returnBtn: 'Back to Mission',
    },
    dossierModal: {
      eyebrow: 'RESEARCH DOSSIER EXHIBITS',
      closeBtn: 'Close dossier',
      sectionSubtitle: 'Findings and exhibits examined by the expert',
      reportedLabel: 'Reported Protocol:',
      flawBadge: 'Vulnerability',
      mandateLabel: 'Mandate Reminder:',
      returnBtn: 'Resume Audit',
    },
  },
};
