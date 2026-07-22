// Costruzione dei link di contatto. Nessun contenuto qui dentro: numeri e
// messaggi arrivano da src/data/content.js.

// Link a WhatsApp con messaggio precompilato.
// numero: solo cifre con prefisso internazionale (es. "393512184460").
export function buildWhatsAppUrl(numero, messaggio = '') {
  const base = `https://wa.me/${numero}`
  return messaggio ? `${base}?text=${encodeURIComponent(messaggio)}` : base
}

// Link telefonico. Accetta numeri con spazi e li normalizza per tel:.
export function buildTelUrl(numero) {
  return `tel:${numero.replace(/[^\d+]/g, '')}`
}
