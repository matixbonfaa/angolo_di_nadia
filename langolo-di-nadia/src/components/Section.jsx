// Section — contenitore riusabile per le sezioni della one-page.
// Standardizza spaziatura e larghezza, ma dà RITMO editoriale:
//  - fondo alternabile: bianco | avorio (caldo) | nero (sezione-pausa)
//  - numerazione grande e sottile in outline (01, 02…) sopra il titolo
//  - intestazione a sinistra oppure centrata e stretta
//  - watermark opzionale col simbolo del brand, tagliato dal bordo
// I colori del testo si adattano automaticamente al fondo (contrasto AA).

import Rivela from './Rivela.jsx'
import Logo from './Logo.jsx'

const SFONDI = {
  bianco: 'bg-bianco',
  avorio: 'bg-avorio',
  nero: 'bg-nero',
}

// Posizioni del watermark: partono oltre il bordo così vengono tagliate.
const WATERMARK_POS = {
  'bottom-right': 'bottom-[-7%] right-[-5%]',
  'top-left': 'top-[-8%] left-[-6%]',
  'top-right': 'top-[-8%] right-[-5%]',
  'bottom-left': 'bottom-[-7%] left-[-6%]',
}

function Section({
  id,
  titolo,
  sottotitolo,
  numero,
  sfondo = 'bianco',
  intestazioneCentrata = false,
  watermark = false,
  posizioneWatermark = 'bottom-right',
  children,
}) {
  const scuro = sfondo === 'nero'
  const bg = SFONDI[sfondo] ?? SFONDI.bianco
  const coloreTitolo = scuro ? 'text-bianco' : 'text-nero'
  const coloreSotto = scuro ? 'text-grigio-chiaro' : 'text-grigio'
  const coloreNumero = scuro ? 'numero-sezione numero-sezione--scuro' : 'numero-sezione'
  const coloreMark = scuro ? 'text-bianco' : 'text-fucsia'
  const allineamento = intestazioneCentrata
    ? 'mx-auto max-w-xl items-center text-center'
    : 'max-w-2xl items-start'

  return (
    <section id={id} className={`relative overflow-hidden ${bg}`}>
      {watermark && (
        <Logo
          variant="mark"
          className={`watermark-mark ${coloreMark} ${WATERMARK_POS[posizioneWatermark]}`}
        />
      )}

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        {(titolo || sottotitolo || numero) && (
          <Rivela as="header" className={`flex flex-col ${allineamento}`}>
            {numero && (
              <span aria-hidden="true" className={`${coloreNumero} mb-1 block`}>
                {numero}
              </span>
            )}
            {titolo && (
              <h2 className={`font-serif text-h2 ${coloreTitolo}`}>{titolo}</h2>
            )}
            {sottotitolo && (
              <p className={`mt-3 text-lg ${coloreSotto}`}>{sottotitolo}</p>
            )}
          </Rivela>
        )}
        <div className="relative mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  )
}

export default Section
