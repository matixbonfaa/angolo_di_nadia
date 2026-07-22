// ReviewCard — estratto di una recensione con valutazione a stelle.
// La valutazione non è veicolata dal solo colore: ha un'etichetta testuale
// per gli screen reader.

import { IconaStella } from './icons.jsx'

function ReviewCard({ recensione }) {
  const { autore, stelle, testo, data } = recensione

  return (
    <figure className="flex h-full flex-col gap-4 rounded-[4px] border border-grigio-chiaro bg-bianco p-6">
      <div
        role="img"
        aria-label={`Valutazione: ${stelle} stelle su 5`}
        className="flex gap-0.5 text-fucsia"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <IconaStella key={i} size={18} piena={i < stelle} />
        ))}
      </div>

      <blockquote className="text-base text-nero">“{testo}”</blockquote>

      <figcaption className="mt-auto text-sm text-grigio">
        <span className="font-medium text-nero">{autore}</span> · {data}
      </figcaption>
    </figure>
  )
}

export default ReviewCard
