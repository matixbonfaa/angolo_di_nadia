// Gallery: griglia di miniature con lazy loading; il click apre la lightbox.

import { useState } from 'react'
import Section from '../components/Section.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { galleryIntro, gallery } from '../data/content.js'

function Gallery() {
  const [indice, setIndice] = useState(null)

  const apri = (i) => setIndice(i)
  const chiudi = () => setIndice(null)
  const vai = (delta) =>
    setIndice((i) => (i + delta + gallery.length) % gallery.length)

  return (
    <Section
      id="gallery"
      titolo={galleryIntro.titolo}
      sottotitolo={galleryIntro.sottotitolo}
    >
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {gallery.map((img, i) => (
          <li key={img.src}>
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
                className="aspect-[4/5] w-full object-cover transition-transform duration-200 ease-out group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {indice !== null && (
        <Lightbox
          immagini={gallery}
          indice={indice}
          onChiudi={chiudi}
          onVai={vai}
        />
      )}
    </Section>
  )
}

export default Gallery
