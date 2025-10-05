import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Use '/' since you have a custom domain
  build: {
    outDir: 'docs'
  },
  plugins: [react()],
})
