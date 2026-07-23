// Hero: il logo completo (simbolo + scritta) è il protagonista, dominante.
// Gerarchia: logo → sottotitolo (una riga) → coppia di CTA. Nessun claim.
// Il logo è il fuoco visivo, ma l'h1 semantico resta nella pagina (sr-only)
// e il nome del salone è nell'aria-label del logo.
//
// Layout: colonna alta quanto il viewport meno l'header; il blocco è centrato
// nello spazio disponibile (flex-1) e la freccia di scorrimento sta in fondo,
// nel flusso: così non resta spazio morto tra CTA e freccia.
//
// Animazioni:
//  - ingresso del simbolo e della scritta del logo: CSS (vedi index.css)
//  - il cuore batte veloce in loop: CSS (@keyframes hero-cuore-battito)
//  - sottotitolo e CTA entrano in stagger con anime.js (qui sotto)
//  - sfondo scuro con aloni fucsia animati: CSS
// Tutto si disattiva con prefers-reduced-motion.

import { useLayoutEffect, useRef } from 'react'
import anime from 'animejs'
import Logo from '../components/Logo.jsx'
import Button from '../components/Button.jsx'
import { IconaWhatsapp, IconaTelefono, IconaFrecciaGiu } from '../components/icons.jsx'
import { attivita, hero, cta } from '../data/content.js'
import { buildWhatsAppUrl, buildTelUrl } from '../lib/links.js'

function Hero() {
  const haTelefono = Boolean(attivita.telefonoTel)
  const haWhatsapp = Boolean(attivita.whatsappNumero)
  const linkWhatsapp = haWhatsapp
    ? buildWhatsAppUrl(attivita.whatsappNumero, cta.messaggioWhatsapp)
    : undefined
  const linkTelefono = haTelefono ? buildTelUrl(attivita.telefonoTel) : undefined
  const sezioneRef = useRef(null)

  // Ingresso di sottotitolo + CTA guidato da anime.js: fade + risalita in
  // stagger, dopo che il logo è comparso. useLayoutEffect (pre-paint) così non
  // c'è flash prima dell'animazione. Rispetta "reduced motion" e degrada in
  // modo sicuro: in caso di errore gli elementi restano visibili.
  useLayoutEffect(() => {
    const radice = sezioneRef.current
    if (!radice) return
    const riduci = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (riduci) return

    const elementi = radice.querySelectorAll('[data-hero-anim]')
    if (!elementi.length) return

    try {
      anime.set(elementi, { opacity: 0, translateY: 16 })
      anime({
        targets: elementi,
        // I segnaposto disattivati restano smorzati (0.45) anche a fine ingresso.
        opacity: (el) => (el.disabled ? 0.45 : 1),
        translateY: [16, 0],
        duration: 800,
        delay: anime.stagger(120, { start: 900 }),
        easing: 'easeOutExpo',
      })
    } catch {
      // Fallback: mostra tutto senza animazione.
      elementi.forEach((el) => {
        el.style.opacity = ''
        el.style.transform = ''
      })
    }

    return () => anime.remove(elementi)
  }, [])

  return (
    <section
      ref={sezioneRef}
      id="top"
      className="relative isolate flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden bg-nero text-bianco sm:min-h-[calc(100svh-90px)]"
    >
      {/* Sfondo: fondo quasi nero con 3 aloni fucsia sfocati che derivano appena */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="hero-aurora">
          <div className="hero-blob hero-blob--1" />
          <div className="hero-blob hero-blob--2" />
          <div className="hero-blob hero-blob--3" />
        </div>
        <div className="hero-vignette" />
      </div>

      {/* h1 semantico: il logo è il fuoco visivo, il titolo resta per SR e SEO */}
      <h1 className="sr-only">{hero.titoloAccessibile}</h1>

      {/* Blocco centrato nello spazio disponibile */}
      <div className="flex flex-1 items-center justify-center px-6 py-10">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 text-center">
          {/* Logo completo, protagonista: ~66% della larghezza su mobile */}
          <Logo
            variant="full"
            title={attivita.nome}
            className="logo-hero w-[66%] max-w-[30rem] text-bianco"
          />

          {/* Sottotitolo: una riga sola, corpo piccolo */}
          <p
            data-hero-anim
            className="max-w-xl text-sm text-grigio-chiaro sm:text-base"
          >
            {hero.sottotitolo}
          </p>

          {/* Coppia di CTA: WhatsApp (piena) + Chiama (outline chiaro discreto) */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              href={linkWhatsapp}
              external
              variant="primaria"
              size="md"
              icona={<IconaWhatsapp size={18} />}
              disabilitato={!haWhatsapp}
              data-hero-anim
            >
              {cta.whatsapp}
            </Button>
            <Button
              href={linkTelefono}
              variant="chiara"
              size="md"
              icona={<IconaTelefono size={18} />}
              disabilitato={!haTelefono}
              data-hero-anim
            >
              {cta.chiama}
            </Button>
          </div>
        </div>
      </div>

      {/* Indicatore "scorri", in fondo nel flusso. Extra spazio su mobile per
          non finire dietro la barra fissa (MobileBar). */}
      <div className="flex justify-center pb-24 md:pb-8">
        <a
          href="#servizi"
          aria-label="Scorri ai servizi"
          className="hero-cue rounded-full p-2 text-bianco focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <IconaFrecciaGiu size={26} />
        </a>
      </div>
    </section>
  )
}

export default Hero
