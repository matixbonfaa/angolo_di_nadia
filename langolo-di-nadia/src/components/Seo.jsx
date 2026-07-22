// Seo — metadati di pagina. Usa il supporto nativo ai metadati di React 19:
// <title> e <meta> resi qui vengono spostati automaticamente nel <head>.

import { seo as seoDefault } from '../data/content.js'

function Seo({ titolo, descrizione, immagine, url }) {
  const img = immagine ?? `${seoDefault.urlSito}${seoDefault.ogImage}`
  const link = url ?? seoDefault.urlSito

  return (
    <>
      <title>{titolo}</title>
      <meta name="description" content={descrizione} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={titolo} />
      <meta property="og:description" content={descrizione} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={link} />
      <meta property="og:locale" content={seoDefault.lingua} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titolo} />
      <meta name="twitter:description" content={descrizione} />
      <meta name="twitter:image" content={img} />
    </>
  )
}

export default Seo
