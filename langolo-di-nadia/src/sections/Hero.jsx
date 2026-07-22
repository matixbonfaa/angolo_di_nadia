// Hero: logo animato, claim e le due CTA (WhatsApp + Chiama) su fondo scuro.
// Animazioni (solo transform/opacity, disattivate con prefers-reduced-motion):
//  - il simbolo entra con una leggera rotazione + fade (.anim-simbolo)
//  - il testo compare in fade appena dopo (.anim-fade)
//  - il simbolo pulsa molto lentamente, appena percettibile (.anim-battito)
// Nota: nell'SVG il cuore non è un path separato, quindi il battito interessa
// l'intero mark (forbici+cuore) in modo molto tenue.

import Logo from '../components/Logo.jsx'
import Button from '../components/Button.jsx'
import { IconaWhatsapp, IconaTelefono } from '../components/icons.jsx'
import { attivita, hero, cta } from '../data/content.js'
import { buildWhatsAppUrl, buildTelUrl } from '../lib/links.js'

function Hero() {
  const linkWhatsapp = buildWhatsAppUrl(attivita.whatsappNumero, cta.messaggioWhatsapp)
  const linkTelefono = buildTelUrl(attivita.telefonoTel)

  return (
    <section id="top" className="relative isolate overflow-hidden bg-nero text-bianco">
      {/* Immagine di sfondo + velo scuro per garantire il contrasto del testo */}
      <img
        src={hero.immagine}
        alt={hero.immagineAlt}
        width={1600}
        height={1000}
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-nero/70" aria-hidden="true" />

      <div className="mx-auto flex min-h-[85svh] max-w-4xl flex-col items-center justify-center gap-8 px-6 py-24 text-center">
        {/* Simbolo animato */}
        <div className="anim-simbolo">
          <Logo
            variant="mark"
            size={92}
            title={attivita.nome}
            className="anim-battito text-fucsia"
          />
        </div>

        {/* Blocco testo + CTA in fade */}
        <div className="anim-fade flex flex-col items-center gap-5">
          <p className="text-sm uppercase tracking-[0.22em] text-grigio-chiaro">
            {hero.sopratitolo}
          </p>
          <h1 className="max-w-2xl font-serif text-display text-bianco">
            {hero.claim}
          </h1>
          <p className="max-w-xl text-lg text-grigio-chiaro">
            {hero.sottotitolo}
          </p>

          <div className="mt-3 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              href={linkWhatsapp}
              external
              variant="primaria"
              size="lg"
              icona={<IconaWhatsapp size={20} />}
            >
              {cta.whatsapp}
            </Button>
            <Button
              href={linkTelefono}
              variant="chiara"
              size="lg"
              icona={<IconaTelefono size={20} />}
            >
              {cta.chiama}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
