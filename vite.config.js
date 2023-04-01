import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    
    laravel({
      input: 'resources/js/app.js',
      refresh: true,
      
    }),
    vue({
        template: {
          transformAssetUrls: {
            base: null,
            includeAbsolute: false,
          },
        },
      }),
  ],
  server: {
    https: true, // enable HTTPS
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: 'resources/js/app.js',
      output: {
        dir: 'public/build/assets',
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]',
        assetUrls: (asset) => {
          const url = asset.url.startsWith('/') ? `https://tesda-inventory.herokuapp.com/${asset.url}` : asset.url;
          return url.replace(/^http:/, 'https:');
        },
      },
    },
  },
});
