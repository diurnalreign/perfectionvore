import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  // Dominio propio (apex): https://perfectionvore.com/ — el sitio se sirve
  // desde la raíz, por eso base '/'. (Con GitHub Pages y dominio propio, el
  // project site deja de vivir bajo /perfectionvore/.)
  base: '/',
  plugins: [react(), tailwindcss()],
});
