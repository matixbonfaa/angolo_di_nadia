// Servizi: listino come MENU tipografico (niente card/box).
// Ogni voce: nome in serif, leader punteggiato verso il prezzo in fucsia
// allineato a destra; sotto, descrizione piccola in grigio e durata come
// etichetta discreta. Solo filetti orizzontali sottili tra le voci.
// Due colonne su desktop, una su mobile.

import Section from '../components/Section.jsx'
import Rivela from '../components/Rivela.jsx'
import { serviziIntro, servizi } from '../data/content.js'

function Servizi() {
  return (
    <Section
      id="servizi"
      numero="01"
      sfondo="bianco"
      titolo={serviziIntro.titolo}
      sottotitolo={serviziIntro.sottotitolo}
      watermark
      posizioneWatermark="top-right"
    >
      <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-14">
        {servizi.map((servizio, i) => (
          <Rivela
            as="li"
            key={servizio.nome}
            delay={(i % 2) * 80}
            className="border-t border-grigio-chiaro py-5 first:border-t-0 md:[&:nth-child(2)]:border-t-0"
          >
            {/* Riga nome ··· prezzo */}
            <div className="flex items-baseline gap-3">
              <h3 className="min-w-0 font-serif text-h3 leading-tight text-nero">
                {servizio.nome}
              </h3>
              <span className="menu-leader" aria-hidden="true" />
              <span className="shrink-0 whitespace-nowrap font-serif text-lg font-semibold text-fucsia">
                {servizio.prezzo}
              </span>
            </div>
            {/* Descrizione + durata */}
            <div className="mt-2 flex items-baseline justify-between gap-4">
              <p className="max-w-md text-sm text-grigio">{servizio.descrizione}</p>
              <span className="shrink-0 whitespace-nowrap text-xs uppercase tracking-wide text-grigio">
                {servizio.durata}
              </span>
            </div>
          </Rivela>
        ))}
      </ul>
    </Section>
  )
}

export default Servizi
