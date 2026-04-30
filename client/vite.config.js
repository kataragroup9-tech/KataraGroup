import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/', // Yeh ensure karta hai ki paths sahi se banein
  build: {
    outDir: 'dist', // Default yahi hota hai, par mention karna safe hai
  }
})
