import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        routes: resolve(__dirname, 'routes.html'),
        dispatch: resolve(__dirname, 'dispatch.html'),
        safety: resolve(__dirname, 'safety-gear.html'),
      },
    },
  },
});
