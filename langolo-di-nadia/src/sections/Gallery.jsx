// Gallery: masonry ad altezze diverse (movimento anche coi placeholder).
// Etichetta del lavoro in overlay in basso a sinistra. Hover: leggero zoom
// dell'immagine dentro il riquadro (overflow hidden) e comparsa dell'etichetta.
// Il click apre la lightbox. Intestazione centrata e stretta (ritmo diverso).

import { useState } from 'react'
import Section from '../components/Section.jsx'
import Lightbox from '../components/Lightbox.jsx'
import Rivela from '../components/Rivela.jsx'
import { galleryIntro, gallery } from '../data/content.js'
import { asset } from '../lib/asset.js'

// Percorsi immagini resi base-aware una volta sola (miniature + lightbox).
const immagini = gallery.map((img) => ({ ...img, src: asset(img.src) }))

// Proporzioni alternate → altezze diverse nel masonry (colonne CSS).
const PROPORZIONI = [
  'aspect-[4/5]',
  'aspect-[3/4]',
  'aspect-[1/1]',
  'aspect-[3/4]',
  'aspect-[4/5]',
  'aspect-[5/7]',
]

function Gallery() {
  const [indice, setIndice] = useState(null)

  const apri = (i) => setIndice(i)
  const chiudi = () => setIndice(null)
  const vai = (delta) =>
    setIndice((i) => (i + delta + immagini.length) % immagini.length)

  return (
    <Section
      id="gallery"
      numero="03"
      sfondo="bianco"
      intestazioneCentrata
      titolo={galleryIntro.titolo}
      sottotitolo={galleryIntro.sottotitolo}
    >
      {/* Masonry con le colonne CSS: le voci non si spezzano tra le colonne. */}
      <ul className="gap-3 [column-gap:0.75rem] columns-2 sm:[column-gap:1rem] sm:columns-3">
        {immagini.map((img, i) => (
          <Rivela
            as="li"
            key={img.src}
            delay={(i % 3) * 80}
            className="mb-3 break-inside-avoid sm:mb-4"
          >
            <button
              type="button"
              onClick={() => apri(i)}
              aria-label={`Apri immagine: ${img.alt}`}
              className="group relative block w-full overflow-hidden rounded-[4px] focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <img
                src={img.src}
                alt=""
                width={img.larghezza}
                height={img.altezza}
                loading="lazy"
                className={`${PROPORZIONI[i % PROPORZIONI.length]} w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105`}
              />
              {/* Etichetta in overlay, in basso a sinistra */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-nero/75 via-nero/30 to-transparent p-3 text-left text-sm font-medium text-bianco opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100"
              >
                {img.titolo}
              </span>
            </button>
          </Rivela>
        ))}
      </ul>

      {indice !== null && (
        <Lightbox
          immagini={immagini}
          indice={indice}
          onChiudi={chiudi}
          onVai={vai}
        />
      )}
    </Section>
  )
}

export default Gallery
