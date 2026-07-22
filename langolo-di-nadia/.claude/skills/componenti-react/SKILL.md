---
name: componenti-react
description: Convenzioni di codice per il progetto React del sito L'angolo di Nadia. Usare quando si creano o si modificano componenti, file o struttura del progetto.
user-invocable: false
---

## Struttura
src/
  components/    un file per componente, PascalCase (Hero.jsx)
  sections/      le sezioni della pagina (Servizi.jsx, Contatti.jsx)
  data/          content.js - TUTTI i contenuti testuali
  assets/        font e icone

## Regole
- Solo componenti funzionali, niente classi.
- Nessun testo di contenuto hardcoded nei componenti: tutto importato
  da src/data/content.js.
- Un componente = un file. Se supera 150 righe, va spezzato.
- Tailwind per lo stile. Niente file CSS separati se non per i font.
- Props esplicite e con valori di default. Niente prop drilling oltre
  due livelli.
- Nomi di variabili e commenti in italiano.

## Accessibilità (non negoziabile)
- Ogni immagine ha alt significativo (o alt="" se decorativa).
- Ogni bottone e link è raggiungibile da tastiera con focus visibile.
- Gerarchia dei titoli corretta: un solo h1 per pagina.
- Nessuna informazione veicolata dal solo colore.
