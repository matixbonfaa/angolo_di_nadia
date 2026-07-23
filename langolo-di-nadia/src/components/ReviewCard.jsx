// ReviewCard — una recensione con testo: avatar con l'iniziale (cerchio col
// colore del brand), nome dell'autore, valutazione a stelle e periodo.
// `scuro`: adatta i colori al fondo nero della sezione (contrasto AA).
// La valutazione non è veicolata dal solo colore: ha un'etichetta testuale.

import { IconaStella } from './icons.jsx'

function ReviewCard({ recensione, scuro = false }) {
  const { nome, iniziale, stelle, testo, quando } = recensione

  const cornice = scuro
    ? 'border-bianco/15 bg-bianco/[0.04] hover:border-fucsia'
    : 'border-grigio-chiaro bg-bianco hover:border-fucsia'
  const coloreNome = scuro ? 'text-bianco' : 'text-nero'
  const coloreQuando = scuro ? 'text-bianco/60' : 'text-grigio'
  const coloreTesto = scuro ? 'text-bianco/90' : 'text-nero'

  return (
    <figure
      className={`flex h-full flex-col gap-4 rounded-[4px] border p-6 transition-[transform,border-color] duration-200 ease-out hover:-translate-y-1 ${cornice}`}
    >
      <div className="flex items-center gap-3">
        {/* Avatar: iniziale in un cerchio fucsia. Testo bianco grande e semibold
            → contrasto AA per testo grande su fondo pieno. */}
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-fucsia text-lg font-semibold text-bianco"
        >
          {iniziale}
        </span>
        <div className="min-w-0">
          <figcaption className={`truncate font-medium ${coloreNome}`}>{nome}</figcaption>
          <div className="mt-0.5 flex items-center gap-2">
            <span
              role="img"
              aria-label={`Valutazione: ${stelle} stelle su 5`}
              className="flex gap-0.5 text-fucsia"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <IconaStella key={i} size={15} piena={i < stelle} />
              ))}
            </span>
            <span className={`text-sm ${coloreQuando}`}>{quando}</span>
          </div>
        </div>
      </div>

      <blockquote className={`text-base ${coloreTesto}`}>“{testo}”</blockquote>
    </figure>
  )
}

export default ReviewCard
