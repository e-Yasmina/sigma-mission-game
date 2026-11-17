import { SupportedLanguage } from '../types';

export interface CaseFact {
  category: string;
  detail: string;
  flaw: string;
}

export interface CaseDossierContent {
  title: string;
  subheading: string;
  overview: string;
  keyFacts: CaseFact[];
  verdictComite: {
    officialAvis: string;
    acquis: string[];
    pointVigilance: string;
    questionTransfert: string;
  };
  postGameQuestions: {
    id: number;
    question: string;
    expectedCriteria: string;
  }[];
}

export const CASE_DOSSIER_FR: CaseDossierContent = {
  title: 'Dossier d’évaluation SIGMA #2026-IA',
  subheading: 'Étude d’impact d’un assistant d’IA générative sur les synthèses critiques en Master',
  overview:
    'Une équipe universitaire souhaite prouver qu’un assistant d’intelligence artificielle générative améliore significativement la qualité des synthèses de littérature critique produites par des étudiants de master. L’équipe demande la publication et diffusion immédiate d’un rapport concluant à un effet causal positif.',
  keyFacts: [
    {
      category: 'Échantillonnage',
      detail: '46 étudiants volontaires utilisent l’assistant IA vs 44 étudiants suivant la filière pédagogique habituelle.',
      flaw: 'Groupes préexistants constitués par volontariat, sans affectation aléatoire (biais d’auto-sélection).',
    },
    {
      category: 'Ligne de base',
      detail: 'Aucun prétest ni mesure initiale des compétences en synthèse critique n’a été réalisé avant le début du semestre.',
      flaw: 'Impossibilité de savoir si le niveau final provient de l’outil ou des compétences déjà acquises par les volontaires.',
    },
    {
      category: 'Mesure du résultat',
      detail: '85 % des utilisateurs de l’assistant se déclarent satisfaits contre 60 % dans le groupe comparateur.',
      flaw: 'Mesure exclusivement subjective (satisfaction ressentie). Aucun barème commun standardisé n’évalue la qualité réelle des synthèses.',
    },
    {
      category: 'Données & Éthique',
      detail: 'Certaines requêtes transmises à l’assistant contiennent des données personnelles tirées des dossiers étudiants.',
      flaw: 'Aucune procédure de consentement éclairé documentée, absence de plan de minimisation des données et pas de saisine du comité d’éthique.',
    },
  ],
  verdictComite: {
    officialAvis:
      'Avis du comité : les résultats présentés ne permettent pas d’affirmer que l’assistant améliore la qualité scientifique des synthèses. La différence de satisfaction peut être rapportée comme descriptive, avec les limites du protocole. Avant toute conclusion plus forte, l’équipe doit mesurer directement la qualité avec un outil commun, renforcer la comparabilité et examiner les exigences éthiques et de protection des données.',
    acquis: [
      'Distinguer question, variable et indicateur observable.',
      'Formuler une question empirique délimitée et une hypothèse testable.',
      'Repérer les menaces à la validité (auto-sélection, absence de prétest) et proposer des améliorations réalistes.',
      'Interpréter prudemment les données sans confondre satisfaction et compétence, et défendre une éthique rigoureuse.',
    ],
    pointVigilance:
      'Si vous avez confondu satisfaction et qualité, demandez-vous toujours quel construit chaque mesure observe. Si vous avez conclu à une causalité, vérifiez l’affectation, la comparabilité initiale et les explications alternatives.',
    questionTransfert:
      'Dans une autre étude qui compare deux méthodes pédagogiques, quelles preuves directes, quelles mesures initiales et quelles garanties éthiques vous faudrait-il avant d’attribuer une différence à la méthode ?',
  },
  postGameQuestions: [
    {
      id: 1,
      question: 'Quelle question de recherche permettrait d’évaluer l’effet de l’assistant sur la qualité des synthèses ?',
      expectedCriteria:
        'Population et contexte définis, usage de l’assistant comme exposition/intervention, qualité de synthèse mesurée par un barème commun et période précisée.',
    },
    {
      id: 2,
      question: 'Proposez une hypothèse testable associée à cette question.',
      expectedCriteria:
        'Prédit une différence sur un score de qualité évalué avec un barème commun ; ne confond pas satisfaction et compétence.',
    },
    {
      id: 3,
      question: 'Quel plan et quelles précautions réduiraient les biais du protocole ?',
      expectedCriteria:
        'Propose une affectation aléatoire si faisable ou un plan quasi-expérimental justifié ; mesure prétest/post-test, critères communs, contrôle/description des facteurs de confusion.',
    },
    {
      id: 4,
      question: 'Que peut-on conclure des chiffres 85 % et 60 %, et que faut-il faire avant diffusion ?',
      expectedCriteria:
        'Ils décrivent une différence de satisfaction déclarée, pas une amélioration de qualité ni un effet causal. Suspendre la conclusion forte, documenter limites, consentement, minimisation/sécurisation des données et avis institutionnel requis.',
    },
  ],
};

export const CASE_DOSSIER_EN: CaseDossierContent = {
  title: 'SIGMA Evaluation Dossier #2026-AI',
  subheading: 'Impact study of a generative AI assistant on master’s students’ critical literature syntheses',
  overview:
    'A university research team seeks to prove that a generative AI assistant significantly improves the quality of critical literature syntheses produced by master’s students. The team demands immediate publication and institutional dissemination of a report concluding a positive causal effect.',
  keyFacts: [
    {
      category: 'Sampling',
      detail: '46 volunteer students use the AI assistant vs. 44 students following standard coursework.',
      flaw: 'Pre-existing groups formed through voluntary self-selection without random assignment (self-selection bias).',
    },
    {
      category: 'Baseline',
      detail: 'No pretest or initial baseline assessment of synthesis competence was conducted prior to semester start.',
      flaw: 'Impossible to discern whether final achievement stems from tool usage or pre-existing competence of volunteers.',
    },
    {
      category: 'Outcome Measure',
      detail: '85% of assistant users report being satisfied compared to 60% in the comparator group.',
      flaw: 'Exclusively subjective metric (reported satisfaction). No common standardized rubric measures the actual quality of syntheses.',
    },
    {
      category: 'Data & Ethics',
      detail: 'Certain prompts submitted to the assistant contained personal data extracted from academic student records.',
      flaw: 'No documented informed consent procedure, no data minimization protocol, and lack of institutional ethics review.',
    },
  ],
  verdictComite: {
    officialAvis:
      'Committee Verdict: The reported findings do not permit asserting that the assistant improves the scientific quality of syntheses. The satisfaction difference may be reported descriptively, acknowledging the protocol’s methodological limitations. Before advancing stronger claims, the team must directly evaluate quality with a standardized instrument, strengthen group comparability, and resolve all ethical and data protection requirements.',
    acquis: [
      'Distinguish research question, variable, and observable indicator.',
      'Formulate a bounded empirical question and a testable hypothesis.',
      'Identify validity threats (self-selection, missing baseline) and propose realistic mitigations.',
      'Interpret data cautiously without conflating satisfaction and competence, and uphold rigorous ethics.',
    ],
    pointVigilance:
      'If you conflated satisfaction with quality, always ask what underlying construct each measure actually captures. If you inferred causality, verify assignment procedures, initial comparability, and alternative explanations.',
    questionTransfert:
      'In another study comparing two pedagogical methods, what direct evidence, baseline measures, and ethical safeguards would you require before attributing an observed difference to the instructional method?',
  },
  postGameQuestions: [
    {
      id: 1,
      question: 'What research question would allow evaluating the assistant’s effect on synthesis quality?',
      expectedCriteria:
        'Defined population and context, assistant usage as exposure/intervention, synthesis quality measured with a standardized rubric, and timeframe specified.',
    },
    {
      id: 2,
      question: 'Propose a testable hypothesis associated with this question.',
      expectedCriteria:
        'Predicts a difference in quality score evaluated via a shared rubric; does not conflate satisfaction and competence.',
    },
    {
      id: 3,
      question: 'What study design and precautions would reduce protocol bias?',
      expectedCriteria:
        'Proposes random assignment if feasible or a justified quasi-experimental design; pretest/post-test measures, common rubric, control/documentation of confounders.',
    },
    {
      id: 4,
      question: 'What can be inferred from the figures 85% and 60%, and what must be done prior to dissemination?',
      expectedCriteria:
        'They describe reported satisfaction disparities, not quality enhancement or causality. Suspend strong conclusions, document limitations, ensure consent, data minimization/security, and required institutional review.',
    },
  ],
};

export const getCaseDossier = (lang: SupportedLanguage): CaseDossierContent =>
  lang === 'en' ? CASE_DOSSIER_EN : CASE_DOSSIER_FR;
