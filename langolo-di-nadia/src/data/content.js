// ============================================================================
//  content.js — UNICA fonte di tutti i contenuti del sito.
//
//  Per aggiornare il sito reale basta modificare QUESTO file: testi, prezzi,
//  orari, recensioni, telefono, indirizzo, social e percorsi delle immagini
//  vivono solo qui. Nessuna stringa di contenuto sta dentro i componenti.
//
//  ATTENZIONE — DEMO: i dati sotto sono FITTIZI ma verosimili (nomi, prezzi,
//  orari, recensioni, telefono, P.IVA, indirizzo). Vanno sostituiti con quelli
//  reali prima della pubblicazione. Le immagini sono segnaposto: vedi
//  DA-SOSTITUIRE.md nella root del progetto.
// ============================================================================

// --- Flag di configurazione -------------------------------------------------
// anteprima: mostra la striscia "Anteprima dimostrativa". Metterla a false
// (o rimuovere <DemoBanner /> in App.jsx) per nasconderla in produzione.
export const flags = {
  anteprima: true,
}

// --- Dati dell'attività: contatti, orari, social ----------------------------
export const attivita = {
  nome: "L'angolo di Nadia",
  professione: 'Parrucchiere',
  // Numero unico per telefono e WhatsApp (FITTIZIO).
  // telefonoDisplay: come appare a schermo. telefonoTel: formato per tel:.
  // whatsappNumero: solo cifre con prefisso internazionale, per i link wa.me.
  telefonoDisplay: '+39 351 218 4460',
  telefonoTel: '+393512184460',
  whatsappNumero: '393512184460',
  email: 'info@langolodinadia.it',
  // Indirizzo (FITTIZIO) — Meano è una frazione a nord di Trento, CAP 38121.
  indirizzo: {
    via: 'Via di Meano, 128',
    cap: '38121',
    citta: 'Trento',
    frazione: 'Meano',
    provincia: 'TN',
    // Testo pronto da mostrare su una riga.
    completo: 'Via di Meano, 128 — 38121 Meano (Trento)',
  },
  // Coordinate approssimative di Meano (TN) per la mappa.
  geo: { lat: 46.1215, lng: 11.1085 },
  // Mappa incorporabile senza chiave API (Google Maps "output=embed").
  mappaEmbedUrl:
    'https://www.google.com/maps?q=Meano%2C%20Trento&z=14&output=embed',
  // Link "Apri in mappe" per il pulsante esterno.
  mappaLinkUrl: 'https://www.google.com/maps/search/?api=1&query=Meano%2C+Trento',
  // Orari di apertura. giorno + fasce; "Chiuso" quando chiuso.
  // Ordine da lunedì a domenica (usato anche nel JSON-LD).
  orari: [
    { giorno: 'Lunedì', apertura: null }, // chiuso
    { giorno: 'Martedì', apertura: '09:00 – 18:00' },
    { giorno: 'Mercoledì', apertura: '09:00 – 18:00' },
    { giorno: 'Giovedì', apertura: '09:00 – 20:00' },
    { giorno: 'Venerdì', apertura: '09:00 – 19:00' },
    { giorno: 'Sabato', apertura: '08:30 – 17:00' },
    { giorno: 'Domenica', apertura: null }, // chiuso
  ],
  // Etichetta breve per quando è chiuso.
  chiusoLabel: 'Chiuso',
  // P.IVA (PLACEHOLDER — sostituire con quella reale).
  partitaIva: 'IT02534780224',
  social: {
    instagram: 'https://www.instagram.com/langolodinadia',
    facebook: 'https://www.facebook.com/langolodinadia',
  },
  // Link alle recensioni Google (PLACEHOLDER — inserire l'URL reale del profilo).
  googleReviewsUrl: 'https://www.google.com/maps/search/L%27angolo+di+Nadia+Meano+Trento',
}

// --- Etichette delle azioni (CTA) e messaggio WhatsApp precompilato ---------
export const cta = {
  whatsapp: 'Prenota su WhatsApp',
  whatsappBreve: 'WhatsApp',
  chiama: 'Chiama',
  // Testo precompilato inserito nel link wa.me.
  messaggioWhatsapp:
    'Ciao Nadia, vorrei prenotare un appuntamento per...',
}

// --- Navigazione ad ancore (header e footer) --------------------------------
export const navigazione = [
  { etichetta: 'Servizi', ancora: '#servizi' },
  { etichetta: 'Chi sono', ancora: '#chi-sono' },
  { etichetta: 'Gallery', ancora: '#gallery' },
  { etichetta: 'Recensioni', ancora: '#recensioni' },
  { etichetta: 'Contatti', ancora: '#contatti' },
]

// --- Sezione Hero -----------------------------------------------------------
export const hero = {
  // Sopratitolo piccolo sopra il claim.
  sopratitolo: 'Parrucchiere · Meano, Trento',
  // Claim principale (h1). Tenuto breve ed elegante.
  claim: 'Il tuo stile, curato nei dettagli',
  sottotitolo:
    'Tagli, colore e trattamenti su misura in un salone accogliente alle porte di Trento. Su appuntamento.',
  immagine: '/images/hero.svg',
  immagineAlt: 'Interno luminoso del salone L’angolo di Nadia',
}

// --- Servizi / listino (FITTIZIO, fascia medio-alta) ------------------------
// Ogni voce: nome, descrizione breve, prezzo (stringa già formattata),
// durata indicativa. I prezzi "da …" indicano che variano per lunghezza.
export const serviziIntro = {
  titolo: 'Servizi e listino',
  sottotitolo:
    'Prezzi indicativi. Il preventivo esatto si definisce in consulenza, in base a lunghezza e tipo di capello.',
}
export const servizi = [
  {
    nome: 'Taglio & piega donna',
    descrizione:
      'Consulenza, taglio personalizzato e piega finale adatta alla forma del viso.',
    prezzo: '38 €',
    durata: '60 min',
  },
  {
    nome: 'Piega & styling',
    descrizione:
      'Piega su misura, liscia o mossa, con finish a specchio o effetto naturale.',
    prezzo: '22 €',
    durata: '30 min',
  },
  {
    nome: 'Colore',
    descrizione:
      'Colorazione uniforme con prodotti delicati e copertura completa dei capelli bianchi.',
    prezzo: 'da 45 €',
    durata: '90 min',
  },
  {
    nome: 'Balayage & shatush',
    descrizione:
      'Schiariture a mano libera per un effetto luce naturale e sfumato, cucito sul tuo incarnato.',
    prezzo: 'da 95 €',
    durata: '150 min',
  },
  {
    nome: 'Colpi di sole',
    descrizione:
      'Meches con stagnola per illuminare la chioma con precisione, senza stravolgere il colore.',
    prezzo: 'da 70 €',
    durata: '120 min',
  },
  {
    nome: 'Trattamenti ristrutturanti',
    descrizione:
      'Rituali di cura per capelli sfibrati: ricostruzione, idratazione profonda e lucentezza.',
    prezzo: 'da 30 €',
    durata: '40 min',
  },
  {
    nome: 'Acconciature & raccolti',
    descrizione:
      'Raccolti e acconciature per cerimonie, spose e occasioni speciali, prova inclusa.',
    prezzo: 'da 55 €',
    durata: '75 min',
  },
  {
    nome: 'Taglio uomo',
    descrizione:
      'Taglio maschile con rifinitura, lavaggio e styling. Anche barba su richiesta.',
    prezzo: '22 €',
    durata: '30 min',
  },
]

// --- Chi sono ---------------------------------------------------------------
export const chiSono = {
  titolo: 'Chi sono',
  // Testo in prima persona, tono caldo e professionale.
  paragrafi: [
    'Mi chiamo Nadia e da oltre quindici anni mi occupo di capelli con la stessa passione del primo giorno. Ho aperto L’angolo di Nadia a Meano per dare vita a uno spazio dove sentirsi a casa, lontano dalla fretta.',
    'Credo in un lavoro fatto di ascolto: prima di prendere in mano le forbici mi siedo con te, capisco cosa desideri e ti consiglio ciò che valorizza davvero i tuoi lineamenti e la tua vita di tutti i giorni.',
    'Mi aggiorno di continuo su tecniche di colore e cura del capello, scegliendo prodotti delicati e rispettosi. Perché un bel risultato non deve mai andare a scapito della salute dei tuoi capelli.',
  ],
  // Firma sotto il testo.
  firma: 'Nadia',
  immagine: '/images/team-nadia.svg',
  immagineAlt: 'Ritratto di Nadia, titolare del salone',
}

// --- Gallery ----------------------------------------------------------------
export const galleryIntro = {
  titolo: 'La gallery',
  sottotitolo: 'Alcuni lavori realizzati in salone.',
}
export const gallery = [
  { src: '/images/gallery-01.svg', alt: 'Taglio e piega su capelli castani', larghezza: 800, altezza: 1000 },
  { src: '/images/gallery-02.svg', alt: 'Balayage biondo su base scura', larghezza: 800, altezza: 1000 },
  { src: '/images/gallery-03.svg', alt: 'Colore rame intenso su capelli lunghi', larghezza: 800, altezza: 1000 },
  { src: '/images/gallery-04.svg', alt: 'Raccolto elegante per una sposa', larghezza: 800, altezza: 1000 },
  { src: '/images/gallery-05.svg', alt: 'Piega mossa voluminosa', larghezza: 800, altezza: 1000 },
  { src: '/images/gallery-06.svg', alt: 'Dettaglio di una schiaritura sfumata', larghezza: 800, altezza: 1000 },
]

// --- Recensioni (FITTIZIE) --------------------------------------------------
export const recensioniIntro = {
  titolo: 'Dicono di noi',
  sottotitolo: 'Le parole di chi si affida a Nadia.',
  linkLabel: 'Leggi tutte le recensioni su Google',
}
export const recensioni = [
  {
    autore: 'Giulia Bertolini',
    stelle: 5,
    testo:
      'Da Nadia mi sento sempre coccolata. Ha capito subito il colore che cercavo e il balayage è venuto naturale come volevo. Ambiente pulito e rilassante.',
    data: 'marzo 2025',
  },
  {
    autore: 'Francesca Delvai',
    stelle: 5,
    testo:
      'Professionale e attenta ai dettagli. Mi ha consigliato un taglio che non avrei mai osato e ora non tornerei indietro. Consigliatissima.',
    data: 'febbraio 2025',
  },
  {
    autore: 'Martina Zanella',
    stelle: 5,
    testo:
      'Finalmente una parrucchiera che ascolta davvero. I miei capelli erano rovinati dalla decolorazione e con i suoi trattamenti sono rinati.',
    data: 'gennaio 2025',
  },
  {
    autore: 'Elena Pedrotti',
    stelle: 5,
    testo:
      'Puntuale, gentile e bravissima. Mi ha fatto il raccolto per il matrimonio di mia sorella ed era perfetto, ha tenuto tutto il giorno.',
    data: 'dicembre 2024',
  },
]

// --- Contatti (intro di sezione) --------------------------------------------
export const contattiIntro = {
  titolo: 'Dove trovarmi',
  sottotitolo:
    'Si lavora su appuntamento, per telefono o WhatsApp. Scrivimi e troviamo insieme l’orario giusto.',
  orariTitolo: 'Orari di apertura',
  mappaLinkLabel: 'Apri in Google Maps',
}

// --- Footer -----------------------------------------------------------------
export const footer = {
  // Frase breve sotto il logo.
  descrizione: 'Parrucchiere a Meano, Trento. Su appuntamento.',
  partitaIvaLabel: 'P.IVA',
  // Link alle pagine legali (route interne).
  legali: [
    { etichetta: 'Privacy Policy', percorso: '/privacy' },
    { etichetta: 'Cookie Policy', percorso: '/cookie' },
  ],
  copyright: `© ${new Date().getFullYear()} L’angolo di Nadia. Tutti i diritti riservati.`,
  // Credito facoltativo, rimovibile.
  credito: 'Sito dimostrativo.',
}

// --- Striscia "anteprima" ---------------------------------------------------
export const banner = {
  testo: 'Anteprima dimostrativa — contenuti di esempio',
}

// --- SEO / metadati ---------------------------------------------------------
export const seo = {
  titolo: "L'angolo di Nadia — Parrucchiere a Meano, Trento",
  descrizione:
    'Salone di parrucchiere a Meano (Trento): taglio, colore, balayage e trattamenti su misura. Su appuntamento, per telefono o WhatsApp.',
  // Immagine per le anteprime social (Open Graph / Twitter).
  ogImage: '/images/og-image.svg',
  // URL canonico del sito (PLACEHOLDER — inserire il dominio reale).
  urlSito: 'https://www.langolodinadia.it',
  lingua: 'it_IT',
}
