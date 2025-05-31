import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/', // <- must match your repo name
  plugins: [
    tailwindcss(),
  ],
})
