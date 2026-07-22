// Chi sono: testo personale in prima persona affiancato al ritratto.
// Su mobile la foto è sopra, il testo sotto; su desktop foto a destra.

import { chiSono } from '../data/content.js'

function ChiSono() {
  return (
    <section id="chi-sono" className="bg-grigio-chiaro">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2 md:items-center md:gap-14">
        {/* Testo */}
        <div className="order-2 md:order-1">
          <h2 className="font-serif text-h2 text-nero">{chiSono.titolo}</h2>
          <div className="mt-5 space-y-4 text-base text-grigio">
            {chiSono.paragrafi.map((paragrafo, i) => (
              <p key={i}>{paragrafo}</p>
            ))}
          </div>
          <p className="mt-6 font-serif text-h3 text-nero">{chiSono.firma}</p>
        </div>

        {/* Ritratto */}
        <div className="order-1 md:order-2">
          <img
            src={chiSono.immagine}
            alt={chiSono.immagineAlt}
            width={900}
            height={1100}
            loading="lazy"
            className="mx-auto w-full max-w-sm rounded-[4px] object-cover md:max-w-md"
          />
        </div>
      </div>
    </section>
  )
}

export default ChiSono
