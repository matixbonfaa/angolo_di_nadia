import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync } from 'node:fs'

// Copia index.html in 404.html al termine del build: su GitHub Pages il 404.html
// viene servito per qualsiasi URL sconosciuto, così il refresh su /privacy o
// /cookie ricade sulla SPA (niente errori 404) mantenendo URL puliti.
function genera404() {
  return {
    name: 'genera-404',
    apply: 'build',
    closeBundle() {
      copyFileSync('dist/index.html', 'dist/404.html')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  // Sottocartella del sito su GitHub Pages: https://<utente>.github.io/langolo-di-nadia/
  base: '/langolo-di-nadia/',
  plugins: [react(), tailwindcss(), genera404()],
})
