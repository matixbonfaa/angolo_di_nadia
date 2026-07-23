// Home: la one-page. Assembla tutte le sezioni e i metadati (SEO + JSON-LD).

import Seo from '../components/Seo.jsx'
import JsonLd from '../components/JsonLd.jsx'
import Divisore from '../components/Divisore.jsx'
import Hero from '../sections/Hero.jsx'
import Servizi from '../sections/Servizi.jsx'
import ChiSono from '../sections/ChiSono.jsx'
import Gallery from '../sections/Gallery.jsx'
import Recensioni from '../sections/Recensioni.jsx'
import Contatti from '../sections/Contatti.jsx'
import { seo } from '../data/content.js'

// Ordine e ritmo: fondi alternati (bianco/avorio con UNA pausa nera su
// Recensioni) e due divisori col simbolo del brand su striscia bianca.
function Home() {
  return (
    <>
      <Seo titolo={seo.titolo} descrizione={seo.descrizione} />
      <JsonLd />
      <Hero />
      <Servizi />
      <Divisore className="bg-bianco py-8" />
      <ChiSono />
      <Gallery />
      <Divisore className="bg-bianco py-8" />
      <Recensioni />
      <Contatti />
    </>
  )
}

export default Home
