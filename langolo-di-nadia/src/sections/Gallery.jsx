// Gallery: griglia di miniature con lazy loading; il click apre la lightbox.

import { useState } from 'react'
import Section from '../components/Section.jsx'
import Lightbox from '../components/Lightbox.jsx'
import Rivela from '../components/Rivela.jsx'
import { galleryIntro, gallery } from '../data/content.js'
import { asset } from '../lib/asset.js'

// Percorsi immagini resi base-aware una volta sola (miniature + lightbox).
const immagini = gallery.map((img) => ({ ...img, src: asset(img.src) }))

function Gallery() {
  const [indice, setIndice] = useState(null)

  const apri = (i) => setIndice(i)
  const chiudi = () => setIndice(null)
  const vai = (delta) =>
    setIndice((i) => (i + delta + immagini.length) % immagini.length)

  return (
    <Section
      id="gallery"
      titolo={galleryIntro.titolo}
      sottotitolo={galleryIntro.sottotitolo}
    >
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {immagini.map((img, i) => (
          <Rivela as="li" key={img.src} delay={(i % 3) * 80}>
            <button
              type="button"
              onClick={() => apri(i)}
              aria-label={`Apri immagine: ${img.alt}`}
              className="group block w-full overflow-hidden rounded-[4px] focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <img
                src={img.src}
                alt=""
                width={img.larghezza}
                height={img.altezza}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
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
