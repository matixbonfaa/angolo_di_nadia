// Divisore — piccolo simbolo del brand centrato tra due filetti sottili.
// Segna il passaggio tra due sezioni senza rumore. Decorativo (aria-hidden).
// Il colore dei filetti segue currentColor; il simbolo è fucsia.

import Logo from './Logo.jsx'

function Divisore({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-4 text-grigio ${className}`}
    >
      <span className="divisore-filetto" />
      <Logo variant="mark" size={22} className="shrink-0 text-fucsia" />
      <span className="divisore-filetto" />
    </div>
  )
}

export default Divisore
