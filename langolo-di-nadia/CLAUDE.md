# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Progetto

Sito vetrina per **L'angolo di Nadia**. Stack: React 19 + Vite 8, JavaScript (JSX, non TypeScript). Codice, commenti e nomi di variabili in **italiano**.

Lo scaffold attuale è ancora il template di default di Vite (`src/App.jsx`, `App.css`, `index.css`). La struttura e le convenzioni descritte sotto sono l'obiettivo verso cui portare il progetto: vanno applicate a ogni nuovo lavoro.

## Comandi

```bash
npm run dev      # server di sviluppo con HMR
npm run build    # build di produzione in dist/
npm run preview  # anteprima della build
npm run lint     # ESLint su tutto il repo
```

Non c'è ancora un test runner configurato.

## Skill di progetto

Due skill (in `.claude/skills/`) contengono le regole vincolanti. **Consultarle prima di scrivere UI o componenti** — qui sotto solo i punti chiave.

- **brand-nadia** — design system: palette, tipografia, regole visive.
- **componenti-react** — convenzioni di codice e struttura file.

## Architettura target

```
src/
  components/   un componente per file, PascalCase (Hero.jsx)
  sections/     sezioni di pagina (Servizi.jsx, Contatti.jsx)
  data/         content.js — TUTTI i contenuti testuali
  assets/       font e icone
```

Principio centrale: **separazione contenuto/presentazione**. Nessun testo di contenuto è hardcoded nei componenti — tutto importato da `src/data/content.js`. Solo componenti funzionali. Un componente = un file; oltre 150 righe va spezzato. Niente prop drilling oltre due livelli.

## Vincoli di stile

- **Palette** (dal logo): nero `#0D0D0D`, bianco `#FFFFFF` (dominante), fucsia `#FF1F9C` (accento/CTA), fucsia-scuro `#D6157F` (hover), grigi `#6B6B6B` / `#F4F4F4`. Il fucsia è un accento: **mai oltre il 10%** della superficie e **mai come testo piccolo su bianco** (non passa WCAG AA — usarlo solo su fondo nero o su superfici piene grandi).
- **Tipografia**: titoli serif display (Playfair/Cormorant, peso 400-500, mai bold pesante); corpo Inter, min 16px, interlinea 1.6.
- Molto spazio bianco, bordi netti (`border-radius` max 4px), transizioni sobrie 150-200ms ease-out. Niente gradienti generici, glassmorphism, ombre morbide.
- Immagini sempre WebP con `width`/`height` espliciti.

## Accessibilità (non negoziabile)

- `alt` significativo su ogni immagine (`alt=""` se decorativa).
- Bottoni e link raggiungibili da tastiera con focus visibile.
- Un solo `h1` per pagina, gerarchia dei titoli corretta.
- Nessuna informazione veicolata dal solo colore.

## Nota / discrepanza da risolvere

La skill `componenti-react` prescrive **Tailwind** per lo stile (niente CSS separati salvo i font), ma Tailwind **non è ancora installato** e il template usa `App.css`/`index.css`. Chiarire con l'utente prima di introdurre il sistema di stile.
