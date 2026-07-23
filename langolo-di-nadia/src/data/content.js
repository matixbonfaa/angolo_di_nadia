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
  // Numero unico per telefono e WhatsApp. DA INSERIRE: lasciato vuoto finché non
  // arriva il numero definitivo. Finché questi campi sono vuoti, i pulsanti
  // Chiama/WhatsApp restano visibili ma disattivati (segnaposto) e il JSON-LD
  // omette il telefono. Basta ricompilarli per riattivare tutto.
  // telefonoDisplay: come appare a schermo. telefonoTel: formato per tel:.
  // whatsappNumero: solo cifre con prefisso internazionale, per i link wa.me.
  telefonoDisplay: '',
  telefonoTel: '',
  whatsappNumero: '',
  email: 'info@langolodinadia.it',
  // Indirizzo reale — Vigo Meano è una frazione a nord di Trento, CAP 38121.
  indirizzo: {
    via: 'Via don Emilio Perugini, 8',
    cap: '38121',
    citta: 'Trento',
    frazione: 'Vigo Meano',
    provincia: 'TN',
    // Testo pronto da mostrare su una riga.
    completo: 'Via don Emilio Perugini, 8 — 38121 Vigo Meano (TN)',
  },
  // Coordinate reali del salone (per la mappa Leaflet e il JSON-LD).
  geo: { lat: 46.132566, lng: 11.134598 },
  // Zoom iniziale della mappa.
  mappaZoom: 16,
  // URL "universali" di Google Maps: aprono l'app nativa su mobile.
  // Apri in Google Maps (scheda del luogo, per coordinate).
  mappaLinkUrl:
    'https://www.google.com/maps/search/?api=1&query=46.132566%2C11.134598',
  // Indicazioni stradali verso il salone.
  mappaIndicazioniUrl:
    'https://www.google.com/maps/dir/?api=1&destination=46.132566%2C11.134598',
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
  // Link al profilo Google del salone (recensioni e scheda).
  googleReviewsUrl: 'https://share.google/pGYq9Da3xAYt5wSuB',
}

// Dato aggregato delle recensioni Google (inserito a mano: niente API).
// valutazioneLabel usa la virgola come separatore decimale (formato italiano).
export const recensioniAggregato = {
  valutazione: 5.0, // per JSON-LD (numero)
  valutazioneLabel: '5,0',
  conteggio: 5,
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
  // Nell'hero il fuoco visivo è il logo; il claim generico è stato rimosso.
  // Questo titolo resta come h1 semantico (screen reader, SEO), non a schermo.
  titoloAccessibile: "L'angolo di Nadia — parrucchiere a Vigo Meano, Trento",
  // Sottotitolo: una riga sola, corpo piccolo, sotto al logo.
  sottotitolo: 'Parrucchiere a Vigo Meano, Trento · su appuntamento',
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
    'Mi chiamo Nadia e da oltre quindici anni mi occupo di capelli con la stessa passione del primo giorno. Ho aperto L’angolo di Nadia a Vigo Meano per dare vita a uno spazio dove sentirsi a casa, lontano dalla fretta.',
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
// titolo: etichetta breve mostrata in overlay sulla miniatura.
export const gallery = [
  { src: '/images/gallery-01.svg', titolo: 'Taglio & piega', alt: 'Taglio e piega su capelli castani', larghezza: 800, altezza: 1000 },
  { src: '/images/gallery-02.svg', titolo: 'Balayage', alt: 'Balayage biondo su base scura', larghezza: 800, altezza: 1000 },
  { src: '/images/gallery-03.svg', titolo: 'Colore rame', alt: 'Colore rame intenso su capelli lunghi', larghezza: 800, altezza: 1000 },
  { src: '/images/gallery-04.svg', titolo: 'Raccolto sposa', alt: 'Raccolto elegante per una sposa', larghezza: 800, altezza: 1000 },
  { src: '/images/gallery-05.svg', titolo: 'Piega mossa', alt: 'Piega mossa voluminosa', larghezza: 800, altezza: 1000 },
  { src: '/images/gallery-06.svg', titolo: 'Schiaritura', alt: 'Dettaglio di una schiaritura sfumata', larghezza: 800, altezza: 1000 },
]

// --- Recensioni (Google, inserite a mano) -----------------------------------
// Il dato aggregato (5,0 · 5 recensioni) sta in `recensioniAggregato` sopra.
// Qui SOLO le recensioni CON testo: su Google sono 2 su 5 (le altre 3 sono
// solo stelle e contribuiscono unicamente al conteggio aggregato, quindi non
// vanno mostrate come card).
//
// Struttura: { nome, iniziale, stelle, testo, quando }.
// PLACEHOLDER: incollare qui i testi veri delle 2 recensioni con testo.
export const recensioniIntro = {
  titolo: 'Dicono di noi',
  sottotitolo: 'Le parole di chi si affida a Nadia.',
  aggregatoSuffisso: 'recensioni su Google',
  linkLabel: 'Leggi tutte le recensioni su Google',
}
export const recensioni = [
  {
    nome: 'Nome Cognome', // ← sostituire con l'autore reale
    iniziale: 'N',
    stelle: 5,
    testo: 'Testo della recensione da incollare.',
    quando: 'mese 2025',
  },
  {
    nome: 'Nome Cognome', // ← sostituire con l'autore reale
    iniziale: 'N',
    stelle: 5,
    testo: 'Testo della recensione da incollare.',
    quando: 'mese 2025',
  },
]

// --- Contatti (intro di sezione) --------------------------------------------
export const contattiIntro = {
  titolo: 'Dove trovarmi',
  sottotitolo:
    'Si lavora su appuntamento, per telefono o WhatsApp. Scrivimi e troviamo insieme l’orario giusto.',
  orariTitolo: 'Orari di apertura',
  mappaLinkLabel: 'Apri in Google Maps',
  indicazioniLabel: 'Indicazioni stradali',
}

// --- Footer -----------------------------------------------------------------
export const footer = {
  // Frase breve sotto il logo.
  descrizione: 'Parrucchiere a Vigo Meano, Trento. Su appuntamento.',
  navTitolo: 'Naviga',
  contattiTitolo: 'Contatti',
  socialTitolo: 'Seguici',
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

// --- Pagine legali (PLACEHOLDER da far revisionare) -------------------------
// Testi di esempio: NON sono un parere legale. Vanno adattati alla situazione
// reale (dati del titolare, strumenti usati, cookie effettivamente installati).
export const paginelegali = {
  privacy: {
    titolo: 'Privacy Policy',
    aggiornamento: 'Ultimo aggiornamento: gennaio 2025',
    seo: {
      titolo: "Privacy Policy — L'angolo di Nadia",
      descrizione:
        "Informativa sul trattamento dei dati personali di L'angolo di Nadia.",
    },
    sezioni: [
      {
        titolo: 'Titolare del trattamento',
        testo:
          'Il titolare del trattamento dei dati è L’angolo di Nadia, con sede in Via don Emilio Perugini, 8 — 38121 Vigo Meano (TN). Per qualsiasi richiesta è possibile scrivere a info@langolodinadia.it.',
      },
      {
        titolo: 'Dati raccolti',
        testo:
          'Questo sito è puramente informativo e non prevede moduli di registrazione o prenotazione. I contatti avvengono tramite telefono o WhatsApp: in quel caso vengono trattati solo i dati che scegli di comunicare (nome e numero) al fine di gestire l’appuntamento.',
      },
      {
        titolo: 'Finalità e base giuridica',
        testo:
          'I dati eventualmente comunicati sono utilizzati esclusivamente per rispondere alle richieste e organizzare gli appuntamenti, sulla base del legittimo interesse a fornire il servizio richiesto.',
      },
      {
        titolo: 'Conservazione',
        testo:
          'I dati vengono conservati per il tempo strettamente necessario a gestire la richiesta e successivamente cancellati, salvo obblighi di legge.',
      },
      {
        titolo: 'Diritti dell’interessato',
        testo:
          'Puoi in ogni momento chiedere l’accesso, la rettifica o la cancellazione dei tuoi dati, oppure opporti al trattamento, scrivendo ai recapiti indicati sopra.',
      },
    ],
  },
  cookie: {
    titolo: 'Cookie Policy',
    aggiornamento: 'Ultimo aggiornamento: gennaio 2025',
    seo: {
      titolo: "Cookie Policy — L'angolo di Nadia",
      descrizione:
        "Informativa sull'uso dei cookie del sito di L'angolo di Nadia.",
    },
    sezioni: [
      {
        titolo: 'Cosa sono i cookie',
        testo:
          'I cookie sono piccoli file di testo che i siti salvano sul dispositivo durante la navigazione, per farlo funzionare o per raccogliere informazioni.',
      },
      {
        titolo: 'Cookie utilizzati da questo sito',
        testo:
          'Questo sito non utilizza cookie di profilazione. La mappa incorporata (Google Maps) potrebbe installare cookie tecnici e di terze parti quando viene caricata: in quel caso si applicano le informative del rispettivo fornitore.',
      },
      {
        titolo: 'Gestione dei cookie',
        testo:
          'Puoi gestire o disabilitare i cookie dalle impostazioni del tuo browser. La disattivazione di alcuni cookie potrebbe limitare la visualizzazione della mappa.',
      },
    ],
  },
}

// --- Striscia "anteprima" ---------------------------------------------------
export const banner = {
  testo: 'Anteprima dimostrativa — contenuti di esempio',
}

// --- SEO / metadati ---------------------------------------------------------
export const seo = {
  titolo: "L'angolo di Nadia — Parrucchiere a Vigo Meano, Trento",
  descrizione:
    'Salone di parrucchiere a Vigo Meano (Trento): taglio, colore, balayage e trattamenti su misura. Su appuntamento, per telefono o WhatsApp.',
  // Immagine per le anteprime social (Open Graph / Twitter).
  ogImage: '/images/og-image.svg',
  // URL canonico del sito (PLACEHOLDER — inserire il dominio reale).
  urlSito: 'https://www.langolodinadia.it',
  lingua: 'it_IT',
}
