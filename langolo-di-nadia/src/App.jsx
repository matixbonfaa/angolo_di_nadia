// Shell dell'applicazione: striscia demo, header sticky, contenuto e barra
// mobile fissa. Le sezioni della one-page e le pagine legali (Privacy, Cookie)
// vengono aggiunte nei passi successivi.

import DemoBanner from './components/DemoBanner.jsx'
import Header from './components/Header.jsx'
import MobileBar from './components/MobileBar.jsx'
import Hero from './sections/Hero.jsx'
import Servizi from './sections/Servizi.jsx'
import ChiSono from './sections/ChiSono.jsx'
import Gallery from './sections/Gallery.jsx'
import Recensioni from './sections/Recensioni.jsx'
import Contatti from './sections/Contatti.jsx'
import { flags } from './data/content.js'

function App() {
  return (
    <>
      {flags.anteprima && <DemoBanner />}
      <Header />

      {/* pb-24 su mobile per non finire sotto la barra fissa in basso */}
      <main className="pb-24 md:pb-0">
        <Hero />
        <Servizi />
        <ChiSono />
        <Gallery />
        <Recensioni />
        <Contatti />
      </main>

      <MobileBar />
    </>
  )
}

export default App
