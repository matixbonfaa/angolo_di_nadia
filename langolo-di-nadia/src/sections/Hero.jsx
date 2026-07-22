// Hero: il logo completo (simbolo + scritta) è il protagonista, in grande.
// Nessuna CTA qui: le azioni vivono nell'header, nella barra mobile e nei
// Contatti. Animazioni premium (solo transform/opacity, vedi index.css):
//  - il simbolo entra con scala + rotazione, poi respira lentissimo
//  - la scritta del logo entra subito dopo
//  - claim e sottotitolo in fade
//  - ken burns lento sullo sfondo, indicatore "scorri" in basso

import Logo from '../components/Logo.jsx'
import { IconaFrecciaGiu } from '../components/icons.jsx'
import { attivita, hero } from '../data/content.js'

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-nero text-bianco"
    >
      {/* Sfondo con velo scuro per il contrasto */}
      <img
        src={hero.immagine}
        alt=""
        width={1600}
        height={1000}
        fetchPriority="high"
        className="hero-bg absolute inset-0 -z-10 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 -z-10 bg-nero/70" aria-hidden="true" />

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 py-24 text-center">
        {/* Logo completo, protagonista */}
        <Logo
          variant="full"
          title={attivita.nome}
          className="logo-hero h-36 w-auto text-bianco sm:h-52 lg:h-64"
        />

        {/* Claim e sottotitolo */}
        <div className="hero-testo flex flex-col items-center gap-4">
          <p className="text-sm uppercase tracking-[0.28em] text-grigio-chiaro">
            {hero.sopratitolo}
          </p>
          <h1 className="max-w-2xl font-serif text-display text-bianco">
            {hero.claim}
          </h1>
          <p className="max-w-xl text-lg text-grigio-chiaro">
            {hero.sottotitolo}
          </p>
        </div>
      </div>

      {/* Indicatore "scorri" */}
      <a
        href="#servizi"
        aria-label="Scorri ai servizi"
        className="hero-cue absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full p-2 text-bianco focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <IconaFrecciaGiu size={26} />
      </a>
    </section>
  )
}

export default Hero
