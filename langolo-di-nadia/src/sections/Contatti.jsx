// Contatti: indirizzo, orari, mappa e azioni (telefono + WhatsApp).
// Il giorno corrente è evidenziato con testo (non solo colore).

import Section from '../components/Section.jsx'
import Button from '../components/Button.jsx'
import Rivela from '../components/Rivela.jsx'
import {
  IconaLuogo,
  IconaTelefono,
  IconaWhatsapp,
} from '../components/icons.jsx'
import { contattiIntro, attivita, cta } from '../data/content.js'
import { buildWhatsAppUrl, buildTelUrl } from '../lib/links.js'

function Contatti() {
  const linkWhatsapp = buildWhatsAppUrl(attivita.whatsappNumero, cta.messaggioWhatsapp)
  const linkTelefono = buildTelUrl(attivita.telefonoTel)

  // Lun=0 ... Dom=6, coerente con l'ordine di attivita.orari.
  const oggiIdx = (new Date().getDay() + 6) % 7

  return (
    <Section
      id="contatti"
      titolo={contattiIntro.titolo}
      sottotitolo={contattiIntro.sottotitolo}
    >
      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        {/* Colonna informazioni */}
        <Rivela className="space-y-8">
          {/* Indirizzo */}
          <div>
            <h3 className="font-serif text-h3 text-nero">Dove siamo</h3>
            <p className="mt-3 flex items-start gap-2 text-base text-grigio">
              <span className="mt-0.5 text-fucsia">
                <IconaLuogo size={20} />
              </span>
              {attivita.indirizzo.completo}
            </p>
            <a
              href={attivita.mappaLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-nero underline underline-offset-2 hover:text-fucsia"
            >
              {contattiIntro.mappaLinkLabel}
            </a>
          </div>

          {/* Azioni */}
          <div>
            <h3 className="font-serif text-h3 text-nero">Prenota</h3>
            <p className="mt-3 text-base text-grigio">
              Su appuntamento, al numero{' '}
              <a
                href={linkTelefono}
                className="font-medium text-nero underline underline-offset-2 hover:text-fucsia"
              >
                {attivita.telefonoDisplay}
              </a>
              .
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Button
                href={linkWhatsapp}
                external
                variant="primaria"
                size="md"
                icona={<IconaWhatsapp size={18} />}
              >
                {cta.whatsapp}
              </Button>
              <Button
                href={linkTelefono}
                variant="secondaria"
                size="md"
                icona={<IconaTelefono size={18} />}
              >
                {cta.chiama}
              </Button>
            </div>
          </div>

          {/* Orari */}
          <div>
            <h3 className="font-serif text-h3 text-nero">
              {contattiIntro.orariTitolo}
            </h3>
            <ul className="mt-3 max-w-sm">
              {attivita.orari.map((o, i) => (
                <li
                  key={o.giorno}
                  className={`flex items-center justify-between gap-4 border-b border-grigio-chiaro py-2 last:border-b-0 ${
                    i === oggiIdx ? 'font-semibold text-nero' : 'text-grigio'
                  }`}
                >
                  <span>
                    {o.giorno}
                    {i === oggiIdx && (
                      <span className="text-fucsia"> · oggi</span>
                    )}
                  </span>
                  <span>{o.apertura ?? attivita.chiusoLabel}</span>
                </li>
              ))}
            </ul>
          </div>
        </Rivela>

        {/* Colonna mappa */}
        <Rivela delay={120}>
          <iframe
            title="Mappa: posizione del salone a Meano, Trento"
            src={attivita.mappaEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[340px] w-full rounded-[4px] border border-grigio-chiaro"
          />
        </Rivela>
      </div>
    </Section>
  )
}

export default Contatti
