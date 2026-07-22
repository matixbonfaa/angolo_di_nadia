// Lightbox accessibile per la gallery.
//  - Esc chiude, frecce ← → navigano
//  - focus intrappolato nel dialog, ripristinato all'elemento di partenza
//  - blocco dello scroll del body mentre è aperto
//  - click sullo sfondo (non sull'immagine) chiude
//
// props:
//   immagini: array {src, alt, larghezza, altezza}
//   indice:   indice dell'immagine mostrata
//   onChiudi: chiude la lightbox
//   onVai:    (delta) => naviga (delta -1 o +1), con scorrimento circolare

import { useEffect, useRef } from 'react'
import { IconaChiudi, IconaFrecciaSx, IconaFrecciaDx } from './icons.jsx'

function Lightbox({ immagini, indice, onChiudi, onVai }) {
  const dialogRef = useRef(null)
  const chiudiRef = useRef(null)
  const item = immagini[indice]

  // Focus iniziale, ripristino e blocco dello scroll.
  useEffect(() => {
    const attivoPrecedente = document.activeElement
    chiudiRef.current?.focus()
    const overflowPrecedente = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflowPrecedente
      if (attivoPrecedente instanceof HTMLElement) attivoPrecedente.focus()
    }
  }, [])

  // Tastiera: Esc, frecce e trap del Tab.
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') {
        e.preventDefault()
        onChiudi()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        onVai(-1)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        onVai(1)
      } else if (e.key === 'Tab') {
        const nodi = dialogRef.current?.querySelectorAll('button')
        if (!nodi || nodi.length === 0) return
        const primo = nodi[0]
        const ultimo = nodi[nodi.length - 1]
        if (e.shiftKey && document.activeElement === primo) {
          e.preventDefault()
          ultimo.focus()
        } else if (!e.shiftKey && document.activeElement === ultimo) {
          e.preventDefault()
          primo.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onChiudi, onVai])

  const bottoneNav =
    'absolute top-1/2 -translate-y-1/2 rounded-full p-2 text-bianco transition-colors duration-150 hover:bg-bianco/15 focus-visible:outline-2 focus-visible:outline-offset-2'

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Immagine: ${item.alt}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-nero/90 p-4"
      onClick={(e) => e.target === e.currentTarget && onChiudi()}
    >
      <button
        ref={chiudiRef}
        type="button"
        onClick={onChiudi}
        aria-label="Chiudi"
        className="absolute right-4 top-4 rounded-full p-2 text-bianco transition-colors duration-150 hover:bg-bianco/15 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <IconaChiudi />
      </button>

      <button
        type="button"
        onClick={() => onVai(-1)}
        aria-label="Immagine precedente"
        className={`${bottoneNav} left-2 sm:left-4`}
      >
        <IconaFrecciaSx />
      </button>

      <figure className="flex max-h-full flex-col items-center">
        <img
          src={item.src}
          alt={item.alt}
          width={item.larghezza}
          height={item.altezza}
          className="h-auto max-h-[80vh] w-auto max-w-[86vw] rounded-[4px] object-contain"
        />
        <figcaption className="mt-3 text-center text-sm text-grigio-chiaro">
          {item.alt} · {indice + 1} / {immagini.length}
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={() => onVai(1)}
        aria-label="Immagine successiva"
        className={`${bottoneNav} right-2 sm:right-4`}
      >
        <IconaFrecciaDx />
      </button>
    </div>
  )
}

export default Lightbox
