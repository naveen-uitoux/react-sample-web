import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-sample-web/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    // other build configurations...
  },
})
