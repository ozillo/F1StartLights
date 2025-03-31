import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // El directorio donde se guardarán los archivos optimizados
  },
  base: '/F1/', // Aquí indicamos que el proyecto se servirá desde la subcarpeta "F1"
})
