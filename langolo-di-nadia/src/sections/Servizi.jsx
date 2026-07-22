// Servizi: griglia di card con il listino (da content.js).

import Section from '../components/Section.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Rivela from '../components/Rivela.jsx'
import { serviziIntro, servizi } from '../data/content.js'

function Servizi() {
  return (
    <Section
      id="servizi"
      titolo={serviziIntro.titolo}
      sottotitolo={serviziIntro.sottotitolo}
    >
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {servizi.map((servizio, i) => (
          <Rivela as="li" key={servizio.nome} delay={(i % 2) * 90} className="h-full">
            <ServiceCard servizio={servizio} />
          </Rivela>
        ))}
      </ul>
    </Section>
  )
}

export default Servizi
