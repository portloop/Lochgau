import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@layouts': '/src/layouts',
      // Добавьте другие алиасы по необходимости
      '@': path.resolve(__dirname, 'src'),

    },
  },
});
