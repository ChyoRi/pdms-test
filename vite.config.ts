import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/pdms/' : '/',
  build: {
    assetsInlineLimit: 0, // ⛔ data:image → ✅ URL
  },
  plugins: [react()],
}))
