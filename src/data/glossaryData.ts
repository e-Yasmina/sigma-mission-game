import { GlossaryEntry, SupportedLanguage } from '../types';

export const GLOSSARY_TERMS_FR: GlossaryEntry[] = [
  {
    term: 'Variable (indépendante / dépendante)',
    definition:
      'Une variable est un élément ou une caractéristique qui peut prendre différentes valeurs. La variable indépendante (exposition ou intervention) est ce que le chercheur manipule ou observe (ici l’usage de l’assistant). La variable dépendante (résultat) est ce qui est mesuré pour évaluer un effet potentiel (ici la qualité des synthèses).',
    sigmaContext:
      'Dans SIGMA, l’équipe a confondu la variable d’intérêt (la qualité des synthèses écrites) avec une variable d’opinion (la satisfaction déclarée).',
  },
  {
    term: 'Indicateur',
    definition:
      'Un indicateur est une mesure concrète et observable retenue pour apprécier un concept ou un construit théorique plus abstrait (ex. : la note obtenue à une grille d’évaluation standardisée pour apprécier la « qualité scientifique »).',
    sigmaContext:
      'Un questionnaire de satisfaction est un indicateur du sentiment de l’étudiant, mais un indicateur invalide de sa compétence rédactionnelle.',
  },
  {
    term: 'Biais d’auto-sélection',
    definition:
      'Biais survenant lorsque les participants choisissent eux-mêmes d’intégrer un groupe (ex. groupe volontaire avec IA). Les volontaires peuvent différer systématiquement des autres dès le départ (plus motivés, plus à l’aise avec le numérique, plus travailleurs).',
    sigmaContext:
      'Les 46 volontaires de SIGMA étaient peut-être déjà de meilleurs étudiants avant même de toucher à l’assistant IA.',
  },
  {
    term: 'Prétest (Ligne de base)',
    definition:
      'Mesure de la compétence cible réalisée avant toute intervention. Il permet de connaître le niveau initial des participants et de mesurer l’évolution réelle (gain post-test moins prétest) au lieu d’un simple score final.',
    sigmaContext:
      'Sans prétest dans l’étude SIGMA, impossible de savoir si le niveau final des étudiants résulte de l’IA ou de leurs acquis antérieurs.',
  },
  {
    term: 'Affectation aléatoire (Randomisation)',
    definition:
      'Procédure consistant à répartir les participants au hasard entre groupe intervention et groupe témoin. Elle permet de neutraliser en moyenne les différences initiales connues et inconnues entre les groupes.',
    sigmaContext:
      'Si elle est éthiquement et matériellement faisable dans le cours, la randomisation est le moyen le plus robuste d’isoler l’effet propre de l’outil.',
  },
  {
    term: 'Inférence causale (vs Association)',
    definition:
      'Affirmer qu’une intervention X a provoqué le changement Y. Pour démontrer une causalité, il faut prouver la précédence temporelle, une corrélation forte, et surtout éliminer toutes les explications alternatives ou facteurs de confusion.',
    sigmaContext:
      'Observer 85 % de satisfaction chez les utilisateurs décrit une association au sein d’un échantillon ; cela ne prouve en aucun cas que l’IA a causé une hausse de compétence.',
  },
  {
    term: 'Barème commun / Grille standardisée',
    definition:
      'Instrument de mesure explicite définissant des critères objectifs et des paliers de notation pour évaluer des travaux complexes (ex. rigueur critique, qualité des sources, cohérence argumentative).',
    sigmaContext:
      'Pour comparer équitablement les deux groupes, leurs synthèses doivent être notées avec le même barème standardisé, rédigé avant l’expérience.',
  },
  {
    term: 'Évaluation à l’aveugle (Blinding)',
    definition:
      'Procédure où les correcteurs évaluent les travaux sans savoir à quel groupe appartient l’étudiant (avec ou sans IA). Elle élimine le biais d’attente ou de confirmation du correcteur.',
    sigmaContext:
      'Si un enseignant sait qu’un texte a été fait avec l’assistant, il pourrait consciemment ou inconsciemment le noter plus sévèrement ou plus favorablement.',
  },
  {
    term: 'Hypothèse testable (Falsifiabilité)',
    definition:
      'Prédiction précise reliant une condition à une mesure concrète, formulée de telle sorte que les données expérimentales puissent la confirmer ou l’infirmer (principe de réfutabilité de Popper).',
    sigmaContext:
      '« L’IA rend les étudiants intelligents » n’est pas testable. « Le score moyen au barème sera supérieur de X points » est testable et réfutable.',
  },
  {
    term: 'Minimisation des données & Consentement',
    definition:
      'Principes éthiques et juridiques (RGPD) imposant d’informer clairement les participants, de recueillir leur accord libre et explicite, et de ne collecter que les données strictement indispensables à l’objectif de recherche.',
    sigmaContext:
      'Injecter des informations tirées des dossiers universitaires dans des requêtes d’IA sans consentement ni sécurisation enfreint l’éthique de la recherche.',
  },
];

export const GLOSSARY_TERMS_EN: GlossaryEntry[] = [
  {
    term: 'Variable (independent / dependent)',
    definition:
      'A variable is any characteristic or attribute that can take on different values. The independent variable (exposure or intervention) is what the researcher manipulates or observes (here, assistant usage). The dependent variable (outcome) is what is measured to evaluate potential effects (here, synthesis quality).',
    sigmaContext:
      'In SIGMA, the team confused the primary outcome variable of interest (written synthesis quality) with an opinion variable (reported satisfaction).',
  },
  {
    term: 'Indicator',
    definition:
      'A concrete, observable metric chosen to measure an abstract theoretical concept or construct (e.g., scores from a standardized rubric to evaluate "scientific quality").',
    sigmaContext:
      'A satisfaction survey indicates student perceptions, but is an invalid indicator of actual writing competence.',
  },
  {
    term: 'Self-selection bias',
    definition:
      'Bias occurring when participants choose their own study group (e.g., volunteering to use the AI tool). Volunteers may differ systematically from non-volunteers at baseline (higher motivation, tech-savviness, academic drive).',
    sigmaContext:
      'The 46 SIGMA volunteers may already have possessed stronger writing skills before ever touching the AI assistant.',
  },
  {
    term: 'Pretest (Baseline measurement)',
    definition:
      'Assessment of the target skill administered prior to any intervention. It establishes baseline ability, allowing measurement of actual growth (post-test minus pretest) rather than raw cross-sectional performance.',
    sigmaContext:
      'Without a pretest in SIGMA, it is impossible to determine whether final performance stems from the assistant or prior student competence.',
  },
  {
    term: 'Random allocation (Randomization)',
    definition:
      'Procedure where participants are assigned by chance to intervention or control groups. On average, it balances both observed and unobserved baseline characteristics across groups.',
    sigmaContext:
      'If feasible and equitable within the curriculum, randomization is the most rigorous method to isolate the true effect of the tool.',
  },
  {
    term: 'Causal inference (vs Association)',
    definition:
      'Asserting that intervention X caused outcome Y. Establishing causality requires temporal precedence, empirical correlation, and ruling out all alternative explanations or confounders.',
    sigmaContext:
      'Observing 85% satisfaction among users describes an association within a self-selected sample; it does not prove the AI caused superior competence.',
  },
  {
    term: 'Common rubric / Standardized scoring',
    definition:
      'An explicit scoring guide establishing objective criteria and performance levels for evaluating complex work (e.g., critical rigor, source credibility, argumentative coherence).',
    sigmaContext:
      'To compare both groups fairly, their literature syntheses must be scored using the same standardized rubric defined prior to the study.',
  },
  {
    term: 'Blinded assessment (Blinding)',
    definition:
      'Procedure where evaluators grade productions without knowing which group the student belonged to (with or without AI). It eliminates evaluator expectation or confirmation bias.',
    sigmaContext:
      'If an instructor knows an essay was written with the assistant, they might consciously or unconsciously grade it more leniently or harshly.',
  },
  {
    term: 'Testable hypothesis (Falsifiability)',
    definition:
      'A precise prediction connecting a condition to a concrete measure, formulated so that empirical data can either support or refute it (Popperian falsifiability).',
    sigmaContext:
      '"AI makes students smarter" is not testable. "Mean synthesis rubric scores will be higher by X points" is concrete and refutable.',
  },
  {
    term: 'Data minimization & Informed consent',
    definition:
      'Ethical and legal principles (e.g. GDPR) requiring researchers to inform participants, obtain voluntary consent, and collect only data strictly necessary for the research purpose.',
    sigmaContext:
      'Injecting student records into AI prompts without informed consent or security safeguards violates research integrity standards.',
  },
];

export const getGlossaryTerms = (lang: SupportedLanguage): GlossaryEntry[] =>
  lang === 'en' ? GLOSSARY_TERMS_EN : GLOSSARY_TERMS_FR;
