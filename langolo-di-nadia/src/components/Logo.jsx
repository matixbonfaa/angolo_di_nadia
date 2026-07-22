// Logo — incorpora l'SVG INLINE nel JSX (mai <img>), così i suoi gruppi
// (#testo, #simbolo) restano animabili via CSS (vedi Hero).
//
// props:
//   variant: "full" (testo + simbolo) | "mark" (solo forbici+cuore)
//   size:    altezza in px (la larghezza segue le proporzioni del viewBox).
//            Se omesso, l'altezza si controlla via className (es. h-32 sm:h-48)
//            per un logo responsive.
//   title:   se presente, dà un nome accessibile al logo (role="img");
//            se assente, il logo è decorativo (aria-hidden).
//
// Nota sul colore: nel logo "full" il testo usa currentColor (quindi diventa
// bianco su fondo scuro impostando la color del contenitore); il simbolo è
// fucsia fisso. Il "mark" è interamente currentColor.

import logoFull from '../assets/logo.svg?raw'
import logoMark from '../assets/logo-mark.svg?raw'

// Sanifica l'SVG grezzo: rimuove <title>, role e aria-labelledby dalla radice
// e l'id="logo-title". Evita id duplicati e doppie etichette quando più logo
// sono presenti nella stessa pagina; l'accessibilità la gestisce il wrapper.
function sanifica(svg) {
  return svg
    .replace(/<title[^>]*>[\s\S]*?<\/title>/i, '')
    .replace(/\s+role="[^"]*"/i, '')
    .replace(/\s+aria-labelledby="[^"]*"/i, '')
    .replace(/\s+id="logo-title"/i, '')
}

const sorgenti = {
  full: sanifica(logoFull),
  mark: sanifica(logoMark),
}

function Logo({ variant = 'full', size, title, className = '' }) {
  const svg = sorgenti[variant] ?? sorgenti.full
  const etichettato = Boolean(title)
  // Altezza fissa solo se size è un numero; altrimenti la gestisce className.
  const style = typeof size === 'number' ? { height: `${size}px` } : undefined

  return (
    <span
      className={`logo logo--${variant} ${className}`}
      style={style}
      role={etichettato ? 'img' : undefined}
      aria-label={etichettato ? title : undefined}
      aria-hidden={etichettato ? undefined : true}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}

export default Logo
