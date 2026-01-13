import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // build일 때 mode로 base 결정
  const base =
    command === "build"
      ? mode === "development"
        ? "/pdms-dev/"
        : "/pdms/"
      : "/";

  return {
    base,
    build: {
      assetsInlineLimit: 0,
    },
    plugins: [react()],
  };
});