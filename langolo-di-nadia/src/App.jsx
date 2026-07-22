// Shell dell'applicazione. Le sezioni e le pagine (Home, Privacy, Cookie)
// vengono aggiunte nei passi successivi. Il routing serve solo per le
// pagine legali (Privacy e Cookie policy); il resto è una one-page ad ancore.

function App() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-serif text-display text-nero">L'angolo di Nadia</h1>
      <p className="mt-4 text-lg text-grigio">
        Setup completato. Le sezioni arrivano nei prossimi passi.
      </p>
    </main>
  )
}

export default App
