// ServiceCard — card di un singolo servizio con prezzo e durata.
// Il prezzo è in fucsia: usato come testo grande (>=20px semibold) rispetta
// il contrasto AA su fondo bianco.

import { IconaOrologio } from './icons.jsx'

function ServiceCard({ servizio }) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-[4px] border border-grigio-chiaro p-6 transition-colors duration-150 ease-out hover:border-fucsia">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-h3 text-nero">{servizio.nome}</h3>
        <span className="shrink-0 text-lg font-semibold text-fucsia">
          {servizio.prezzo}
        </span>
      </div>
      <p className="text-base text-grigio">{servizio.descrizione}</p>
      <p className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm text-grigio">
        <IconaOrologio size={16} />
        {servizio.durata}
      </p>
    </article>
  )
}

export default ServiceCard
