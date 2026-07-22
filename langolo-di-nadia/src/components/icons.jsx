// Icone inline riusabili. Ereditano il colore da currentColor e sono
// decorative per default (aria-hidden). Dimensione via prop size (px).

function base(size) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: false,
  }
}

export function IconaWhatsapp({ size = 20 }) {
  // WhatsApp: usa fill pieno per restare riconoscibile.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.82c2.16 0 4.19.84 5.72 2.37a8.06 8.06 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.1 8.09a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.19-.31a8.02 8.02 0 0 1-1.26-4.35c0-4.46 3.63-8.09 8.09-8.09Zm-2.67 4.36c-.14 0-.37.05-.56.26-.19.21-.74.72-.74 1.76 0 1.04.76 2.04.86 2.18.11.14 1.49 2.27 3.6 3.19.5.22.9.35 1.2.44.51.16.97.14 1.33.09.41-.06 1.25-.51 1.42-1 .18-.5.18-.92.13-1.01-.05-.09-.19-.14-.4-.25-.21-.11-1.25-.62-1.44-.69-.19-.07-.33-.1-.47.1-.14.21-.54.69-.66.83-.12.14-.24.16-.45.05-.21-.11-.89-.33-1.69-1.05-.62-.55-1.05-1.24-1.17-1.45-.12-.21-.01-.32.09-.43.09-.09.21-.24.32-.36.1-.12.14-.21.21-.35.07-.14.03-.26-.02-.37-.05-.11-.47-1.16-.65-1.58-.17-.41-.34-.36-.47-.36l-.4-.01Z" />
    </svg>
  )
}

export function IconaTelefono({ size = 20 }) {
  return (
    <svg {...base(size)}>
      <path d="M6.5 3h-2A1.5 1.5 0 0 0 3 4.6C3 13 11 21 19.4 21A1.5 1.5 0 0 0 21 19.5v-2a1 1 0 0 0-.8-1l-3-.6a1 1 0 0 0-1 .4l-.9 1.2a13 13 0 0 1-5.8-5.8l1.2-.9a1 1 0 0 0 .4-1l-.6-3a1 1 0 0 0-1-.8Z" />
    </svg>
  )
}

export function IconaMenu({ size = 24 }) {
  return (
    <svg {...base(size)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function IconaChiudi({ size = 24 }) {
  return (
    <svg {...base(size)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function IconaStella({ size = 18, piena = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={piena ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 3.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L12 16.77l-5.2 2.74.99-5.8-4.21-4.1 5.82-.85z" />
    </svg>
  )
}

export function IconaInstagram({ size = 20 }) {
  return (
    <svg {...base(size)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconaFacebook({ size = 20 }) {
  return (
    <svg {...base(size)}>
      <path d="M14.5 8.5H16V5.8c-.3 0-1.2-.1-2.2-.1-2.2 0-3.6 1.3-3.6 3.8v2H7.8v2.8h2.4V21h2.9v-6.7h2.4l.4-2.8h-2.8V9.9c0-.8.2-1.4 1.4-1.4Z" />
    </svg>
  )
}

export function IconaLuogo({ size = 20 }) {
  return (
    <svg {...base(size)}>
      <path d="M12 21s7-5.6 7-11a7 7 0 0 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function IconaOrologio({ size = 20 }) {
  return (
    <svg {...base(size)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}
