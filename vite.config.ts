import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  // Project site en GitHub Pages: https://diurnalreign.github.io/perfectionvore/
  base: '/perfectionvore/',
  plugins: [react(), tailwindcss()],
});
