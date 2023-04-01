import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    https: true,
  },
  build: {
    manifest: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: 'resources/js/app.js',
      output: {
        dir: 'public/build/assets',
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]',
        // Use absolute URLs for assets to ensure they are loaded over HTTPS
        // Replace "https://yourdomain.com" with your actual domain
        assetUrls: (asset) => `https://tesda-inventory.herokuapp.com/build/assets/${asset.name}${asset.ext}`,
      },
    },
  },
});