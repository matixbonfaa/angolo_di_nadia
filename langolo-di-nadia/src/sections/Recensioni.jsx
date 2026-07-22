// Recensioni: estratti (fittizi) + link al profilo Google.

import Section from '../components/Section.jsx'
import ReviewCard from '../components/ReviewCard.jsx'
import Button from '../components/Button.jsx'
import Rivela from '../components/Rivela.jsx'
import { recensioniIntro, recensioni, attivita } from '../data/content.js'

function Recensioni() {
  return (
    <Section
      id="recensioni"
      sfondo="chiaro"
      titolo={recensioniIntro.titolo}
      sottotitolo={recensioniIntro.sottotitolo}
    >
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {recensioni.map((recensione, i) => (
          <Rivela as="li" key={recensione.autore} delay={(i % 2) * 90} className="h-full">
            <ReviewCard recensione={recensione} />
          </Rivela>
        ))}
      </ul>

      <div className="mt-10">
        <Button
          href={attivita.googleReviewsUrl}
          external
          variant="secondaria"
          size="md"
        >
          {recensioniIntro.linkLabel}
        </Button>
      </div>
    </Section>
  )
}

export default Recensioni
