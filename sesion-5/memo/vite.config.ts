import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Proyectos-DIRI/sesion-5/memo/', 
  build: {
    outDir: 'docs', // Para Github Pages
  }
})
