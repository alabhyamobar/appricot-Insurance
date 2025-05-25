import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/appricot-Insurance/",  // Correct format for GitHub Pages
})
