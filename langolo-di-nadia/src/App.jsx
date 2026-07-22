// Shell dell'applicazione: striscia demo, header sticky, contenuto e barra
// mobile fissa. Le sezioni della one-page e le pagine legali (Privacy, Cookie)
// vengono aggiunte nei passi successivi.

import DemoBanner from './components/DemoBanner.jsx'
import Header from './components/Header.jsx'
import MobileBar from './components/MobileBar.jsx'
import { flags } from './data/content.js'

function App() {
  return (
    <>
      {flags.anteprima && <DemoBanner />}
      <Header />

      {/* pb-24 su mobile per non finire sotto la barra fissa in basso */}
      <main className="pb-24 md:pb-0">
        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="font-serif text-display text-nero">
            Shell di navigazione pronto
          </h1>
          <p className="mt-4 text-lg text-grigio">
            Le sezioni (Hero, Servizi, Chi sono…) arrivano nei prossimi passi.
          </p>
        </section>
      </main>

      <MobileBar />
    </>
  )
}

export default App
