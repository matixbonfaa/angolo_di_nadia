// Header sticky: logo, navigazione ad ancore e CTA WhatsApp.
// Su mobile la navigazione è in un menu a tendina accessibile (il menu bottom
// fisso gestisce già le CTA principali). Hover discreto sui link.

import { useEffect, useLayoutEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { IconaWhatsapp, IconaTelefono, IconaMenu, IconaChiudi } from './icons.jsx'
import { attivita, navigazione, cta } from '../data/content.js'
import { buildWhatsAppUrl, buildTelUrl } from '../lib/links.js'
import { asset } from '../lib/asset.js'

function Header() {
  const [apertoMenu, setApertoMenu] = useState(false)
  // Le CTA nell'header restano nascoste finché l'hero è visibile (le sue due CTA
  // bastano): così non ci sono mai quattro bottoni nella stessa schermata.
  // Compaiono in fade quando l'hero esce dal viewport. L'hero esiste solo nella
  // home: altrove le CTA sono sempre visibili.
  const { pathname } = useLocation()
  const [heroInVista, setHeroInVista] = useState(true)
  const nascondiCta = pathname === '/' && heroInVista
  const haTelefono = Boolean(attivita.telefonoTel)
  const haWhatsapp = Boolean(attivita.whatsappNumero)
  const linkWhatsapp = haWhatsapp
    ? buildWhatsAppUrl(attivita.whatsappNumero, cta.messaggioWhatsapp)
    : undefined
  const linkTelefono = haTelefono ? buildTelUrl(attivita.telefonoTel) : undefined

  // Chiude il menu con Esc.
  useEffect(() => {
    if (!apertoMenu) return
    const onKey = (e) => e.key === 'Escape' && setApertoMenu(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [apertoMenu])

  // Osserva l'hero (#top) con un IntersectionObserver (niente listener di scroll).
  // Solo nella home: l'observer riporta lo stato iniziale da sé, senza set
  // sincroni. useLayoutEffect + [pathname] così segue anche i cambi di rotta.
  useLayoutEffect(() => {
    if (pathname !== '/') return
    const hero = document.getElementById('top')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([voce]) => setHeroInVista(voce.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-grigio-chiaro bg-bianco">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:h-[90px] sm:px-6">
        {/* Logo → torna alla home. Stesso logo completo dell'hero, ma con la
            scritta nera (currentColor) sul fondo bianco; il simbolo resta fucsia.
            L'etichetta accessibile la dà il Link, quindi il logo è decorativo. */}
        <Link
          to="/"
          className="flex items-center rounded-[4px]"
          onClick={() => setApertoMenu(false)}
          aria-label={`${attivita.nome} — home`}
        >
          <Logo variant="full" className="h-16 w-auto text-nero sm:h-[70px]" />
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

        {/* CTA desktop: Chiama (outline, secondaria) + WhatsApp (pieno).
            Nascoste finché l'hero è in vista, poi compaiono in fade. */}
        <div
          className={`hidden items-center gap-3 transition-opacity duration-300 md:flex ${
            nascondiCta ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
          aria-hidden={nascondiCta}
        >
          <Button
            href={linkTelefono}
            variant="secondaria"
            size="md"
            icona={<IconaTelefono size={18} />}
            disabilitato={!haTelefono}
          >
            {cta.chiama}
          </Button>
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
                disabilitato={!haWhatsapp}
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
