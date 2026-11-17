# Mission SIGMA — Le protocole scientifique à sauver

Prototype interactif de jeu sérieux d'initiation et de renforcement en **méthodologie de la recherche** et **littératie scientifique**, conçu pour doctorants et jeunes chercheurs.

> [!IMPORTANT]
> **Avertissement relatif aux exigences de l'évaluation :**
> Le présent prototype React + TypeScript + Vite constitue un modèle de contenu interactif et un banc d'essai ergonomique. Il a été conçu pour éprouver l'alignement pédagogique, les textes, les feedbacks et l'enchaînement des 10 écrans. **Il ne se substitue pas à la publication du projet individuel final dans Genially** requise par les consignes du cours (livrables E01 à E06 disponibles dans `C:\temp\SIGMA_Livrables`).

---

## 1. Contexte pédagogique et scénario de référence

Le joueur endosse le rôle d’un **expert scientifique indépendant** sollicité par un comité universitaire. 

Une équipe de recherche affirme qu'un assistant d'IA générative améliore significativement la qualité des synthèses critiques rédigées par des étudiants de master. Cependant, l’examen du protocole révèle des failles méthodologiques majeures :
- **Biais d'auto-sélection :** 46 étudiants volontaires utilisent l'assistant face à 44 étudiants suivant la filière classique, sans assignation aléatoire.
- **Absence de ligne de base (prétest) :** aucune mesure préalable des compétences n'a été réalisée avant le début du semestre.
- **Confusion entre satisfaction et compétence :** le résultat mis en avant repose sur un taux de satisfaction de 85 % vs 60 %, sans notation des productions par un barème commun.
- **Données et éthique :** des requêtes contiennent des données tirées de dossiers étudiants, sans consentement formalisé ni avis de comité d'éthique.

Le joueur guide le comité en 4 missions et 8 décisions pour requalifier la démarche sans jamais verser dans un cours technique sur l'entraînement des modèles d'IA.

---

## 2. Architecture des 10 écrans

Le parcours est strictement structuré en **10 écrans centraux** sans dead-end :

| Écran | Titre & Mission | Défi | Compétence évaluée | Clé |
|---|---|---|---|---|
| **1** | **Accueil — Le dossier SIGMA** | — | Prise en main du mandat d'expert, règles et pièces du dossier | — |
| **2** | **M1 Diagnostiquer** | **Défi 1** | Identifier le problème scientifique investigable | **B** |
| **3** | **M1 Diagnostiquer** | **Défi 2** | Délimiter population, exposition, comparaison et indicateur | **A** |
| **4** | **M2 Reconstruire** | **Défi 3** | Formuler une question empirique délimitée | **C** |
| **5** | **M2 Reconstruire** | **Défi 4** | Construire une hypothèse testable et falsifiable | **D** |
| **6** | **M3 Contrôler** | **Défi 5** | Sélectionner un plan d'étude défendable (randomisation, prétest/post-test) | **B** |
| **7** | **M3 Contrôler** | **Défi 6** | Repérer et neutraliser l'auto-sélection et l'absence de prétest | **C** |
| **8** | **M4 Défendre** | **Défi 7** | Interpréter les résultats (satisfaction vs performance directe) | **B** |
| **9** | **M4 Défendre** | **Défi 8** | Prendre une décision éthique (données, consentement, avis comité) | **C** |
| **10** | **Bilan — Avis au comité** | — | Avis officiel au comité, 4 acquis, point de vigilance, transfert | — |

---

## 3. Direction visuelle, multilinguisme et ergonomie

- **Support bilingue intégral (FR / EN) :** sélecteur de langue accessible positionné dans l'en-tête permettant d'alterner instantanément entre le français et l'anglais pour l'ensemble des 10 écrans, des défis, des feedbacks, du glossaire méthodologique et des pièces du dossier.
- **Palette chromatique conforme aux tokens :**
  - Encre profonde : `#0b4e65`
  - Bleu d'action : `#407f9e`
  - Blush apaisant : `#e2c9ca`
  - Argile d'accent : `#d8a896`
  - Cuivre distinctif : `#b57c52`
  - Neutres papier/ivoire : `#f5eee7`, `#fffaf4`
- **Mascotte originale :** « Inspecteur SIGMA », un petit robot pixel-art dessiné en SVG pur, dont l'expression visuelle et les messages accompagnent l'étudiant avec bienveillance.
- **Accessibilité (RGAA / WCAG) :**
  - Zones dynamiques vocalisées via `aria-live="polite"`.
  - Contrastes élevés et repères visuels non fondés sur la couleur seule (icônes, libellés explicites).
  - Cibles tactiles ≥ 44 px, utilisables au clavier avec `:focus-visible` cuivré.
  - Respect strict de `prefers-reduced-motion`.

---

## 4. Correspondance et transposition dans Genially Free

Ce prototype a été conçu pour être facilement reproductible dans un compte gratuit Genially :
- **Navigation par pages :** les 10 écrans correspondent aux 10 pages du storyboard Genially.
- **Interactivité des choix :** chaque option cliquable déclenche l'affichage d'une fenêtre de feedback (« Réussite » ou « À revoir ») ou navigue vers une sous-page dédiée.
- **Indices et explications :** transposables sous forme de boutons « Fenêtre » ou « Info-bulle ».
- **Absence de dépendance technique :** pas de base de données, pas d'API, pas de score bloquant. Le parcours reste linéaire et formateur.

---

## 5. Démarrage et commandes

### Prérequis
- Node.js (version 18+ ou 20 LTS recommandée).

### Installation
```bash
npm install
```

### Lancement en mode développement
```bash
npm run dev
```
Ouvrez l'URL locale affichée par Vite (ex. `http://localhost:5173/`).

### Compilation pour production
```bash
npm run build
```
Les fichiers statiques optimisés sont générés dans `dist/`.

### Prévisualisation de la production
```bash
npm run preview
```
