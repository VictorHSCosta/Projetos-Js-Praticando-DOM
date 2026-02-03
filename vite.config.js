import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        jogoDaVelha: resolve(__dirname, 'src/pages/jogo_da_velha/index.html'),
        piano: resolve(__dirname, 'src/pages/piano/index.html'),

      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
