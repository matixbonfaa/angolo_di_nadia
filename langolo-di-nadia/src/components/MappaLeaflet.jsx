// MappaLeaflet — mappa OpenStreetMap con Leaflet e marker personalizzato.
//
// Perché non l'iframe di Google Maps: non è personalizzabile (nessun pin
// brandizzato). Leaflet + tile OSM è gratis e senza chiave API.
//
// Prestazioni: Leaflet (~40kB) e il suo CSS vengono caricati in modo LAZY, solo
// quando la sezione entra nel viewport (IntersectionObserver via useInView),
// così non pesano sul caricamento iniziale della pagina.
//
// Marker: il simbolo del logo (logo-mark.svg) come icona, fucsia con contorno
// nero spesso e leggera ombra (stile in index.css, .mappa-marker). L'anchor è
// sulla punta in basso, così il vertice indica il punto esatto.
//
// Interazione: scrollWheelZoom DISATTIVATO (chi scorre la pagina non resta
// "intrappolato" nella mappa); restano attivi i controlli +/− e il trascinamento.

import { useEffect, useRef } from 'react'
import { useInView } from '../hooks/useInView.js'
import logoMarkRaw from '../assets/logo-mark.svg?raw'
import { attivita } from '../data/content.js'

function MappaLeaflet() {
  // Lo stesso ref serve sia all'IntersectionObserver sia da contenitore Leaflet.
  const [rifVista, inVista] = useInView({ once: true, soglia: 0.2 })
  const mappaRef = useRef(null)

  // Inizializza la mappa una sola volta, quando la sezione è in vista.
  useEffect(() => {
    if (!inVista || mappaRef.current || !rifVista.current) return
    let annullato = false

    ;(async () => {
      const L = (await import('leaflet')).default
      await import('leaflet/dist/leaflet.css')
      if (annullato || !rifVista.current || mappaRef.current) return

      const { lat, lng } = attivita.geo
      const mappa = L.map(rifVista.current, {
        center: [lat, lng],
        zoom: attivita.mappaZoom ?? 16,
        scrollWheelZoom: false, // niente zoom con la rotella
        // zoomControl (+/−) e dragging restano attivi (default)
      })

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        // Attribuzione OSM: obbligatoria per licenza, visibile in basso a destra.
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mappa)

      const icona = L.divIcon({
        className: 'mappa-marker',
        html: logoMarkRaw,
        iconSize: [44, 46],
        iconAnchor: [22, 46], // punta in basso al centro sul punto esatto
      })
      L.marker([lat, lng], { icon: icona, title: attivita.nome, keyboard: false }).addTo(mappa)

      mappaRef.current = mappa
    })()

    return () => {
      annullato = true
    }
  }, [inVista, rifVista])

  // Distrugge la mappa allo smontaggio (libera l'id Leaflet sul contenitore).
  useEffect(
    () => () => {
      if (mappaRef.current) {
        mappaRef.current.remove()
        mappaRef.current = null
      }
    },
    [],
  )

  return (
    <div
      ref={rifVista}
      role="img"
      aria-label={`Mappa: ${attivita.nome}, ${attivita.indirizzo.completo}`}
      className="h-[300px] w-full overflow-hidden rounded-[4px] border border-grigio-chiaro bg-grigio-chiaro md:h-[420px]"
    />
  )
}

export default MappaLeaflet
