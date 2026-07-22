// useInView — rileva quando un elemento entra nel viewport (IntersectionObserver).
// Restituisce [ref, inView]. Di default scatta una sola volta (once).

import { useEffect, useRef, useState } from 'react'

export function useInView({ once = true, soglia = 0.15 } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Fallback se l'API non è disponibile: mostra al frame successivo
    // (evita il set-state sincrono dentro l'effetto).
    if (typeof IntersectionObserver === 'undefined') {
      const raf = requestAnimationFrame(() => setInView(true))
      return () => cancelAnimationFrame(raf)
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) obs.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold: soglia, rootMargin: '0px 0px -10% 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [once, soglia])

  return [ref, inView]
}
