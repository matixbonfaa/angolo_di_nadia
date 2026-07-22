// Striscia sottile in cima: segnala che è un'anteprima con contenuti di esempio.
// Rimovibile con una riga: togliere <DemoBanner /> da App.jsx, oppure impostare
// flags.anteprima a false in content.js.

import { banner } from '../data/content.js'

function DemoBanner() {
  return (
    <div className="bg-nero text-bianco">
      <p className="flex items-center justify-center gap-2 px-4 py-1.5 text-center text-sm">
        <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-fucsia" />
        {banner.testo}
      </p>
    </div>
  )
}

export default DemoBanner
