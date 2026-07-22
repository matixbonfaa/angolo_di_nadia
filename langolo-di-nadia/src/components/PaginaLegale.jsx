// PaginaLegale — layout condiviso per Privacy e Cookie policy.
// Ogni pagina legale è una route a sé: il suo titolo è l'unico h1 della pagina.

import Seo from './Seo.jsx'

function PaginaLegale({ pagina }) {
  return (
    <>
      <Seo titolo={pagina.seo.titolo} descrizione={pagina.seo.descrizione} />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="font-serif text-h2 text-nero">{pagina.titolo}</h1>
        <p className="mt-2 text-sm text-grigio">{pagina.aggiornamento}</p>

        <div className="mt-10 space-y-8">
          {pagina.sezioni.map((sezione) => (
            <section key={sezione.titolo}>
              <h2 className="font-serif text-h3 text-nero">{sezione.titolo}</h2>
              <p className="mt-2 text-base text-grigio">{sezione.testo}</p>
            </section>
          ))}
        </div>
      </article>
    </>
  )
}

export default PaginaLegale
