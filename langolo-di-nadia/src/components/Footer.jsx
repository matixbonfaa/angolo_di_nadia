// Footer: logo, contatti sintetici, navigazione, social, P.IVA e link legali.
// Fondo scuro: il logo diventa bianco grazie a currentColor (il simbolo resta
// fucsia).

import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { IconaInstagram, IconaFacebook } from './icons.jsx'
import { attivita, navigazione, footer } from '../data/content.js'
import { buildTelUrl } from '../lib/links.js'

function Footer() {
  const linkTelefono = buildTelUrl(attivita.telefonoTel)

  return (
    <footer className="bg-nero text-bianco">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <Logo variant="full" size={40} title={attivita.nome} className="text-bianco" />
          <p className="mt-4 max-w-xs text-base text-grigio-chiaro">
            {footer.descrizione}
          </p>
        </div>

        {/* Navigazione */}
        <nav aria-label="Footer">
          <p className="text-sm uppercase tracking-wide text-grigio">
            {footer.navTitolo}
          </p>
          <ul className="mt-3 space-y-2">
            {navigazione.map((item) => (
              <li key={item.ancora}>
                <a
                  href={`/${item.ancora}`}
                  className="text-base text-bianco transition-colors duration-150 hover:text-fucsia"
                >
                  {item.etichetta}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contatti + social */}
        <div>
          <p className="text-sm uppercase tracking-wide text-grigio">
            {footer.contattiTitolo}
          </p>
          <ul className="mt-3 space-y-2 text-base text-grigio-chiaro">
            <li>{attivita.indirizzo.completo}</li>
            <li>
              <a
                href={linkTelefono}
                className="text-bianco transition-colors duration-150 hover:text-fucsia"
              >
                {attivita.telefonoDisplay}
              </a>
            </li>
          </ul>

          <p className="mt-5 text-sm uppercase tracking-wide text-grigio">
            {footer.socialTitolo}
          </p>
          <div className="mt-3 flex gap-3">
            <a
              href={attivita.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-[4px] p-1 text-bianco transition-colors duration-150 hover:text-fucsia"
            >
              <IconaInstagram size={22} />
            </a>
            <a
              href={attivita.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-[4px] p-1 text-bianco transition-colors duration-150 hover:text-fucsia"
            >
              <IconaFacebook size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Barra inferiore */}
      <div className="border-t border-bianco/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-grigio sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            {footer.partitaIvaLabel} {attivita.partitaIva} · {footer.copyright}
          </p>
          <ul className="flex flex-wrap gap-4">
            {footer.legali.map((l) => (
              <li key={l.percorso}>
                <Link
                  to={l.percorso}
                  className="text-grigio-chiaro underline underline-offset-2 hover:text-fucsia"
                >
                  {l.etichetta}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
