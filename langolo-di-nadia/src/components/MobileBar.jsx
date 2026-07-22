// Barra fissa in basso, solo su mobile: Chiama | WhatsApp.
// Le due azioni primarie sempre a portata di pollice.

import Button from './Button.jsx'
import { IconaTelefono, IconaWhatsapp } from './icons.jsx'
import { attivita, cta } from '../data/content.js'
import { buildWhatsAppUrl, buildTelUrl } from '../lib/links.js'

function MobileBar() {
  const linkWhatsapp = buildWhatsAppUrl(attivita.whatsappNumero, cta.messaggioWhatsapp)
  const linkTelefono = buildTelUrl(attivita.telefonoTel)

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-grigio-chiaro bg-bianco p-2 md:hidden"
      style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom))' }}
    >
      <Button
        href={linkTelefono}
        variant="secondaria"
        size="md"
        icona={<IconaTelefono size={18} />}
        className="w-full"
      >
        {cta.chiama}
      </Button>
      <Button
        href={linkWhatsapp}
        external
        variant="primaria"
        size="md"
        icona={<IconaWhatsapp size={18} />}
        className="w-full"
      >
        {cta.whatsappBreve}
      </Button>
    </div>
  )
}

export default MobileBar
