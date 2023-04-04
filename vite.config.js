import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    base: 'https://tesda-inventory.herokuapp.com/',
  plugins: [
    
    laravel({
      input: 'resources/js/app.js',
      refresh: true,
      
    }),
    vue({
      template: {
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    }),
  ],
  build: {
    manifest: true,
    rollupOptions: {
      input: 'resources/js/app.js',
    },
  },
});
