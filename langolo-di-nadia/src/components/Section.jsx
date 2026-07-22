// Section — contenitore riusabile per le sezioni della one-page.
// Standardizza spaziatura, larghezza e intestazione (h2 + sottotitolo),
// mantenendo una gerarchia dei titoli coerente su tutta la pagina.
//
// props:
//   id:         ancora della sezione (es. "servizi")
//   titolo:     titolo della sezione (h2)
//   sottotitolo: testo introduttivo opzionale
//   sfondo:     "bianco" (default) | "chiaro" (grigio-chiaro, sezioni alternate)
//   intestazioneCentrata: centra l'intestazione
//   children:   contenuto della sezione

function Section({
  id,
  titolo,
  sottotitolo,
  sfondo = 'bianco',
  intestazioneCentrata = false,
  children,
}) {
  const bg = sfondo === 'chiaro' ? 'bg-grigio-chiaro' : 'bg-bianco'
  const allineamento = intestazioneCentrata ? 'mx-auto text-center' : ''

  return (
    <section id={id} className={bg}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        {(titolo || sottotitolo) && (
          <header className={`max-w-2xl ${allineamento}`}>
            {titolo && (
              <h2 className="font-serif text-h2 text-nero">{titolo}</h2>
            )}
            {sottotitolo && (
              <p className="mt-3 text-lg text-grigio">{sottotitolo}</p>
            )}
          </header>
        )}
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  )
}

export default Section
