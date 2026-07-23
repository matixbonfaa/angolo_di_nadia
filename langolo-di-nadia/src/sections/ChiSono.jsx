// Chi sono: testo personale in prima persona affiancato al ritratto.
// Tratti editoriali: numerazione 02, capolettera sul primo paragrafo, firma
// manoscritta (corsivo serif ruotato in fucsia) e ritratto che sborda
// leggermente oltre il margine destro della sezione (bleed) per rompere la
// rigidità della griglia. Fondo avorio caldo.
// Su mobile la foto è sopra, il testo sotto; su desktop foto a destra.

import Rivela from '../components/Rivela.jsx'
import { chiSono } from '../data/content.js'
import { asset } from '../lib/asset.js'

function ChiSono() {
  return (
    <section id="chi-sono" className="relative overflow-hidden bg-avorio">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-28 md:grid-cols-2 md:items-center md:gap-14">
        {/* Testo */}
        <Rivela className="order-2 md:order-1">
          <span aria-hidden="true" className="numero-sezione mb-1 block">
            02
          </span>
          <h2 className="font-serif text-h2 text-nero">{chiSono.titolo}</h2>
          <div className="mt-5 space-y-4 text-base text-grigio">
            {chiSono.paragrafi.map((paragrafo, i) => (
              <p key={i} className={i === 0 ? 'dropcap' : undefined}>
                {paragrafo}
              </p>
            ))}
          </div>
          <p className="firma mt-8">{chiSono.firma}</p>
        </Rivela>

        {/* Ritratto: bleed leggero oltre il margine destro su desktop */}
        <Rivela className="order-1 md:order-2" delay={120}>
          <img
            src={asset(chiSono.immagine)}
            alt={chiSono.immagineAlt}
            width={900}
            height={1100}
            loading="lazy"
            className="mx-auto w-full max-w-sm rounded-[4px] object-cover md:mx-0 md:max-w-none md:-mr-8 lg:-mr-20"
          />
        </Rivela>
      </div>
    </section>
  )
}

export default ChiSono
