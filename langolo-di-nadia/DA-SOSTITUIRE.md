# Immagini da sostituire

Le immagini in `public/images/` sono **segnaposto SVG** generati per la demo.
Vanno sostituite con foto reali. Consigli:

- Formato finale: **WebP** (buona qualità, peso ridotto).
- Esporta ogni immagine **esattamente** con il nome elencato qui sotto e caricala
  in `public/images/`, poi aggiorna il percorso corrispondente in
  `src/data/content.js` (cambia solo l'estensione da `.svg` a `.webp`).
- Rispetta le proporzioni indicate per evitare tagli o deformazioni.
- Includi sempre `width` e `height` reali: sono già gestiti dai componenti,
  ma per la gallery i valori stanno in `content.js` (`larghezza`/`altezza`).

| File finale | Dimensioni consigliate (px) | Proporzione | Dove appare | Segnaposto attuale |
|---|---|---|---|---|
| `hero.webp` | 1600 × 1000 | 16:10 | Sfondo della sezione Hero | `hero.svg` |
| `team-nadia.webp` | 900 × 1100 | 9:11 (ritratto) | Sezione "Chi sono" | `team-nadia.svg` |
| `gallery-01.webp` | 800 × 1000 | 4:5 | Gallery | `gallery-01.svg` |
| `gallery-02.webp` | 800 × 1000 | 4:5 | Gallery | `gallery-02.svg` |
| `gallery-03.webp` | 800 × 1000 | 4:5 | Gallery | `gallery-03.svg` |
| `gallery-04.webp` | 800 × 1000 | 4:5 | Gallery | `gallery-04.svg` |
| `gallery-05.webp` | 800 × 1000 | 4:5 | Gallery | `gallery-05.svg` |
| `gallery-06.webp` | 800 × 1000 | 4:5 | Gallery | `gallery-06.svg` |
| `og-image.webp` | 1200 × 630 | 1.91:1 | Anteprima social (Open Graph) | `og-image.svg` |

## Altri contenuti da sostituire (in `src/data/content.js`)

Tutti i testi sono **fittizi**. Prima della pubblicazione controlla e sostituisci:

- **Telefono / WhatsApp**: `attivita.telefonoDisplay`, `attivita.telefonoTel`, `attivita.whatsappNumero`.
- **Indirizzo**: `attivita.indirizzo` e `attivita.geo` (coordinate della mappa).
- **Orari**: `attivita.orari`.
- **P.IVA**: `attivita.partitaIva` (attualmente placeholder).
- **Email e social**: `attivita.email`, `attivita.social`.
- **Link recensioni Google**: `attivita.googleReviewsUrl`.
- **Recensioni**: array `recensioni` (attualmente inventate).
- **Prezzi e servizi**: array `servizi`.
- **Testo "Chi sono"**: `chiSono.paragrafi`.
- **Dominio del sito**: `seo.urlSito`.

## Nascondere la striscia "Anteprima dimostrativa"

In `src/data/content.js` imposta `flags.anteprima` a `false`
(oppure rimuovi `<DemoBanner />` in `src/App.jsx`).
