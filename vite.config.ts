import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'VuePatternfly',
      fileName: format => `vue-timeago.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        assetFileNames: 'vue-timeago.[ext]',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
});