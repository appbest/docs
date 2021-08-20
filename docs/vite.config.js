import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      //  '@': root.path,
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  }
});
