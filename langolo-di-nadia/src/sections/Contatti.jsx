// Contatti: indirizzo e prenotazione a sinistra; mappa, link e ORARI a destra
// (gli orari sotto la mappa riequilibrano le due colonne, niente vuoto sotto).
// Il giorno corrente è evidenziato con testo (non solo colore).
// CTA Chiama/WhatsApp: segnaposto disattivati finché manca il numero.

import Section from '../components/Section.jsx'
import Button from '../components/Button.jsx'
import Rivela from '../components/Rivela.jsx'
import MappaLeaflet from '../components/MappaLeaflet.jsx'
import {
  IconaLuogo,
  IconaTelefono,
  IconaWhatsapp,
} from '../components/icons.jsx'
import { contattiIntro, attivita, cta } from '../data/content.js'
import { buildWhatsAppUrl, buildTelUrl } from '../lib/links.js'

function Contatti() {
  const haTelefono = Boolean(attivita.telefonoTel)
  const haWhatsapp = Boolean(attivita.whatsappNumero)
  const linkWhatsapp = haWhatsapp
    ? buildWhatsAppUrl(attivita.whatsappNumero, cta.messaggioWhatsapp)
    : undefined
  const linkTelefono = haTelefono ? buildTelUrl(attivita.telefonoTel) : undefined

  // Lun=0 ... Dom=6, coerente con l'ordine di attivita.orari.
  const oggiIdx = (new Date().getDay() + 6) % 7

  return (
    <Section
      id="contatti"
      numero="05"
      sfondo="avorio"
      titolo={contattiIntro.titolo}
      sottotitolo={contattiIntro.sottotitolo}
    >
      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        {/* Colonna sinistra: indirizzo + prenotazione */}
        <Rivela className="space-y-8">
          <div>
            <h3 className="font-serif text-h3 text-nero">Dove siamo</h3>
            <p className="mt-3 flex items-start gap-2 text-base text-grigio">
              <span className="mt-0.5 text-fucsia">
                <IconaLuogo size={20} />
              </span>
              {attivita.indirizzo.completo}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-h3 text-nero">Prenota</h3>
            <p className="mt-3 text-base text-grigio">
              {haTelefono ? (
                <>
                  Su appuntamento, al numero{' '}
                  <a
                    href={linkTelefono}
                    className="font-medium text-nero underline underline-offset-2 hover:text-fucsia"
                  >
                    {attivita.telefonoDisplay}
                  </a>
                  .
                </>
              ) : (
                'Si lavora su appuntamento, per telefono o WhatsApp.'
              )}
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Button
                href={linkWhatsapp}
                external
                variant="primaria"
                size="md"
                icona={<IconaWhatsapp size={18} />}
                disabilitato={!haWhatsapp}
              >
                {cta.whatsapp}
              </Button>
              <Button
                href={linkTelefono}
                variant="secondaria"
                size="md"
                icona={<IconaTelefono size={18} />}
                disabilitato={!haTelefono}
              >
                {cta.chiama}
              </Button>
            </div>
          </div>
        </Rivela>

        {/* Colonna destra: mappa + link + orari (bilancia l'altezza) */}
        <Rivela delay={120} className="flex flex-col gap-5">
          <MappaLeaflet />
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href={attivita.mappaLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-nero underline underline-offset-2 hover:text-fucsia"
            >
              <IconaLuogo size={16} />
              {contattiIntro.mappaLinkLabel}
            </a>
            <a
              href={attivita.mappaIndicazioniUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-nero underline underline-offset-2 hover:text-fucsia"
            >
              {contattiIntro.indicazioniLabel}
            </a>
          </div>

          <div>
            <h3 className="font-serif text-h3 text-nero">
              {contattiIntro.orariTitolo}
            </h3>
            <ul className="mt-3">
              {attivita.orari.map((o, i) => (
                <li
                  key={o.giorno}
                  className={`flex items-center justify-between gap-4 border-b border-nero/10 py-2 last:border-b-0 ${
                    i === oggiIdx ? 'font-semibold text-nero' : 'text-grigio'
                  }`}
                >
                  <span>
                    {o.giorno}
                    {i === oggiIdx && <span className="text-fucsia"> · oggi</span>}
                  </span>
                  <span>{o.apertura ?? attivita.chiusoLabel}</span>
                </li>
              ))}
            </ul>
          </div>
        </Rivela>
      </div>
    </Section>
  )
}

export default Contatti
