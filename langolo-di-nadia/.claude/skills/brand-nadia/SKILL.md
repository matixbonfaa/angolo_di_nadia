---
name: brand-nadia
description: Design system del sito L'angolo di Nadia. Usare per qualsiasi componente UI, scelta di colore, font, spaziatura o layout.
user-invocable: false
---

## Palette
- nero      #0D0D0D  testi principali, sfondi scuri
- bianco    #FFFFFF  sfondo dominante
- fucsia    #FF1F9C  accenti, CTA, hover (preso dal logo)
- fucsia-scuro #D6157F  stato hover dei bottoni
- grigio    #6B6B6B  testi secondari
- grigio-chiaro #F4F4F4  separatori, sfondi alternati

Il fucsia è un accento: mai più del 10% della superficie visibile.

## Tipografia
- Titoli: serif display alto contrasto (Playfair Display o Cormorant
  Garamond), peso 400-500. Mai bold pesante.
- Corpo: sans neutro (Inter), minimo 16px, interlinea 1.6.
- Scala: 48/36/28/20/16/14 px, ridotta di circa il 25% su mobile.

## Regole visive
- Molto spazio bianco. Il brand è elegante, non affollato.
- Bordi netti, border-radius massimo 4px.
- Niente gradienti generici, glassmorphism, ombre morbide diffuse.
- Contrasto minimo WCAG AA (4.5:1). Attenzione: il fucsia su bianco
  NON passa per il testo piccolo. Usarlo solo su fondo nero, oppure
  per elementi grandi e superfici piene (bottoni con testo bianco).
- Immagini sempre in WebP, con width e height espliciti.
- Transizioni sobrie: 150-200ms, ease-out. Niente animazioni vistose.
