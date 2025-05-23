import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this matches Vercel's default
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
})
