// Header sticky: logo, navigazione ad ancore e CTA WhatsApp.
// Su mobile la navigazione è in un menu a tendina accessibile (il menu bottom
// fisso gestisce già le CTA principali). Hover discreto sui link.

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { IconaWhatsapp, IconaMenu, IconaChiudi } from './icons.jsx'
import { attivita, navigazione, cta } from '../data/content.js'
import { buildWhatsAppUrl } from '../lib/links.js'
import { asset } from '../lib/asset.js'

function Header() {
  const [apertoMenu, setApertoMenu] = useState(false)
  const linkWhatsapp = buildWhatsAppUrl(attivita.whatsappNumero, cta.messaggioWhatsapp)

  // Chiude il menu con Esc.
  useEffect(() => {
    if (!apertoMenu) return
    const onKey = (e) => e.key === 'Escape' && setApertoMenu(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [apertoMenu])

  return (
    <header className="sticky top-0 z-40 border-b border-grigio-chiaro bg-bianco">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo → torna alla home */}
        <Link
          to="/"
          className="text-nero rounded-[4px]"
          onClick={() => setApertoMenu(false)}
        >
          <Logo variant="full" size={34} title={attivita.nome} />
        </Link>

        {/* Navigazione desktop */}
        <nav aria-label="Principale" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navigazione.map((item) => (
              <li key={item.ancora}>
                <a
                  href={asset(item.ancora)}
                  className="group relative text-base text-nero transition-colors duration-150 hover:text-fucsia"
                >
                  {item.etichetta}
                  <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-fucsia transition-transform duration-150 ease-out group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA WhatsApp desktop */}
        <div className="hidden md:block">
          <Button
            href={linkWhatsapp}
            external
            variant="primaria"
            size="md"
            icona={<IconaWhatsapp size={18} />}
          >
            {cta.whatsapp}
          </Button>
        </div>

        {/* Bottone menu mobile */}
        <button
          type="button"
          className="rounded-[4px] p-2 text-nero md:hidden"
          aria-expanded={apertoMenu}
          aria-controls="menu-mobile"
          aria-label={apertoMenu ? 'Chiudi il menu' : 'Apri il menu'}
          onClick={() => setApertoMenu((v) => !v)}
        >
          {apertoMenu ? <IconaChiudi /> : <IconaMenu />}
        </button>
      </div>

      {/* Pannello di navigazione mobile */}
      {apertoMenu && (
        <nav
          id="menu-mobile"
          aria-label="Principale"
          className="border-t border-grigio-chiaro bg-bianco md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {navigazione.map((item) => (
              <li key={item.ancora}>
                <a
                  href={asset(item.ancora)}
                  className="block border-b border-grigio-chiaro py-3 text-lg text-nero last:border-b-0"
                  onClick={() => setApertoMenu(false)}
                >
                  {item.etichetta}
                </a>
              </li>
            ))}
            <li className="py-3">
              <Button
                href={linkWhatsapp}
                external
                variant="primaria"
                size="md"
                icona={<IconaWhatsapp size={18} />}
                className="w-full"
                onClick={() => setApertoMenu(false)}
              >
                {cta.whatsapp}
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
