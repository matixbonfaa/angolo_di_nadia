// JsonLd — dati strutturati schema.org/HairSalon per la home.
// I valori arrivano da content.js (placeholder pronti da compilare).

import { attivita, seo, recensioniAggregato } from '../data/content.js'
import { assetAssoluto } from '../lib/asset.js'

// Giorni in ordine Lun..Dom, coerente con attivita.orari, verso schema.org.
const GIORNI_SCHEMA = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

function orariSpecification() {
  return attivita.orari
    .map((o, i) => {
      if (!o.apertura) return null
      // "09:00 – 18:00" -> ["09:00", "18:00"]
      const [apre, chiude] = o.apertura.split('–').map((s) => s.trim())
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: GIORNI_SCHEMA[i],
        opens: apre,
        closes: chiude,
      }
    })
    .filter(Boolean)
}

function JsonLd() {
  const dati = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    '@id': seo.urlSito,
    name: attivita.nome,
    image: assetAssoluto(seo.ogImage),
    url: seo.urlSito,
    // telephone incluso solo quando il numero è disponibile.
    ...(attivita.telefonoTel ? { telephone: attivita.telefonoTel } : {}),
    email: attivita.email,
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: attivita.indirizzo.via,
      addressLocality: attivita.indirizzo.frazione,
      postalCode: attivita.indirizzo.cap,
      addressRegion: attivita.indirizzo.provincia,
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: attivita.geo.lat,
      longitude: attivita.geo.lng,
    },
    openingHoursSpecification: orariSpecification(),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: recensioniAggregato.valutazione,
      reviewCount: recensioniAggregato.conteggio,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [attivita.googleReviewsUrl],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dati) }}
    />
  )
}

export default JsonLd
