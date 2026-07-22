// Shell dell'applicazione: striscia demo, header, contenuto (one-page + pagine
// legali) e barra mobile fissa. Il layout è condiviso da tutte le route.

import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DemoBanner from './components/DemoBanner.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MobileBar from './components/MobileBar.jsx'
import Home from './pages/Home.jsx'
import Privacy from './pages/Privacy.jsx'
import Cookie from './pages/Cookie.jsx'
import { flags } from './data/content.js'

// Al cambio di route porta in cima; se c'è un'ancora scorre fino ad essa.
function GestioneScroll() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <>
      {flags.anteprima && <DemoBanner />}
      <Header />
      <GestioneScroll />

      {/* pb-20 su mobile per non finire sotto la barra fissa in basso */}
      <div className="pb-20 md:pb-0">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookie" element={<Cookie />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>

      <MobileBar />
    </>
  )
}

export default App
