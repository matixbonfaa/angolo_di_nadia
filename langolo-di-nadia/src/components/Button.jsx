// Button — CTA riusabile. Rende un <a> se riceve href, altrimenti un <button>.
//
// props:
//   variant: "primaria" (fucsia, testo bianco) | "secondaria" (bordo scuro)
//            | "chiara" (bordo bianco, per fondi scuri)
//   size:    "md" | "lg"
//   href:    se presente, rende un link. external=true aggiunge target/rel.
//   icona:   elemento icona opzionale mostrato prima del testo.
//
// Nota contrasto: il fucsia su testo bianco passa WCAG AA solo come testo
// GRANDE (>=18px semibold). Per questo la variante primaria usa sempre un
// testo di almeno 18px e peso semibold.

const varianti = {
  primaria:
    'bg-fucsia text-bianco font-semibold hover:bg-fucsia-scuro border border-transparent',
  secondaria:
    'bg-transparent text-nero font-medium border border-nero hover:bg-nero hover:text-bianco',
  chiara:
    'bg-transparent text-bianco font-medium border border-bianco/70 hover:bg-bianco hover:text-nero',
}

const misure = {
  md: 'text-[1.125rem] px-5 py-2.5 gap-2', // 18px
  lg: 'text-lg px-7 py-3.5 gap-2.5', // 20px
}

function Button({
  variant = 'primaria',
  size = 'md',
  href,
  external = false,
  icona,
  children,
  className = '',
  ...rest
}) {
  const classi = [
    'inline-flex items-center justify-center rounded-[4px]',
    'transition-colors duration-150 ease-out',
    'focus-visible:outline-2 focus-visible:outline-offset-2',
    'leading-none whitespace-nowrap',
    varianti[variant] ?? varianti.primaria,
    misure[size] ?? misure.md,
    className,
  ].join(' ')

  const contenuto = (
    <>
      {icona}
      <span>{children}</span>
    </>
  )

  if (href) {
    const attrs = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}
    return (
      <a href={href} className={classi} {...attrs} {...rest}>
        {contenuto}
      </a>
    )
  }

  return (
    <button type="button" className={classi} {...rest}>
      {contenuto}
    </button>
  )
}

export default Button
