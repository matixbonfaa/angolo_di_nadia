// Recensioni: sezione-pausa su fondo NERO, valorizza le stelle. In evidenza il
// dato aggregato di Google (5,0 · 5 recensioni), poi le card SOLO per le
// recensioni con testo (le altre, solo stelle, contribuiscono al conteggio).
// Intestazione centrata; chiude un link al profilo Google.

import Section from '../components/Section.jsx'
import ReviewCard from '../components/ReviewCard.jsx'
import Button from '../components/Button.jsx'
import Rivela from '../components/Rivela.jsx'
import { IconaStella } from '../components/icons.jsx'
import {
  recensioniIntro,
  recensioni,
  recensioniAggregato,
  attivita,
} from '../data/content.js'

function Recensioni() {
  return (
    <Section
      id="recensioni"
      numero="04"
      sfondo="nero"
      intestazioneCentrata
      titolo={recensioniIntro.titolo}
      sottotitolo={recensioniIntro.sottotitolo}
      watermark
      posizioneWatermark="bottom-left"
    >
      {/* Dato aggregato in evidenza: "★★★★★ 5,0 · 5 recensioni su Google" */}
      <Rivela className="mb-10 flex flex-col items-center gap-2 text-center">
        <span
          role="img"
          aria-label={`Valutazione media: ${recensioniAggregato.valutazioneLabel} stelle su 5`}
          className="flex gap-1 text-fucsia"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <IconaStella key={i} size={26} piena />
          ))}
        </span>
        <p className="text-lg text-bianco">
          <span className="font-serif text-h3 leading-none">
            {recensioniAggregato.valutazioneLabel}
          </span>{' '}
          · {recensioniAggregato.conteggio} {recensioniIntro.aggregatoSuffisso}
        </p>
      </Rivela>

      {/* Card solo per le recensioni con testo */}
      <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {recensioni.map((recensione, i) => (
          <Rivela as="li" key={recensione.nome + i} delay={(i % 2) * 90} className="h-full">
            <ReviewCard recensione={recensione} scuro />
          </Rivela>
        ))}
      </ul>

      <div className="mt-10 flex justify-center">
        <Button
          href={attivita.googleReviewsUrl}
          external
          variant="chiara"
          size="md"
        >
          {recensioniIntro.linkLabel}
        </Button>
      </div>
    </Section>
  )
}

export default Recensioni
