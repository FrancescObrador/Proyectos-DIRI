import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Proyecytos-DIRI/sesion-5/Comida/docs', 
  build: {
    outDir: 'docs' // Para Github Pages
  }
})
