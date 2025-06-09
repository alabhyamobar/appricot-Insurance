// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/', // <- must match your repo name if deploying to GitHub Pages etc.
  plugins: [
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // <-- Use your backend port here!
        changeOrigin: true,
      },
    },
  },
})