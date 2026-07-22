// Helper per i riferimenti agli asset in public/ e per le ancore.
// Antepone la base di Vite (import.meta.env.BASE_URL) così i percorsi
// funzionano anche sotto la sottocartella di GitHub Pages, senza percorsi
// assoluti che partono da "/".

// asset('/images/x.svg') -> '/langolo-di-nadia/images/x.svg' (in produzione)
// asset('#servizi')      -> '/langolo-di-nadia/#servizi'
export function asset(percorso) {
  return `${import.meta.env.BASE_URL}${String(percorso).replace(/^\//, '')}`
}

// Versione assoluta (con origin), utile per og:image e JSON-LD.
export function assetAssoluto(percorso) {
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  return `${origin}${asset(percorso)}`
}
