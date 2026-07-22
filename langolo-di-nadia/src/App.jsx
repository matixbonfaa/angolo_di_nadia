// Shell dell'applicazione. Le sezioni e le pagine (Home, Privacy, Cookie)
// vengono aggiunte nei passi successivi. Il routing serve solo per le
// pagine legali (Privacy e Cookie policy); il resto è una one-page ad ancore.

import Logo from './components/Logo.jsx'

function App() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <Logo variant="full" size={80} title="L'angolo di Nadia" />
      <p className="mt-8 text-lg text-grigio">
        Setup completato. Le sezioni arrivano nei prossimi passi.
      </p>
    </main>
  )
}

export default App
