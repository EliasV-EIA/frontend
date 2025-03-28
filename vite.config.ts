import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',  // Correct build output folder
    rollupOptions: {
      input: 'index.html',
    },
  },
});