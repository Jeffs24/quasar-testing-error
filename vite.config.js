import { fileURLToPath, URL } from 'node:url';
import createVuePlugin from '@vitejs/plugin-vue';
import { configDefaults, defineConfig } from 'vitest/config';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2,
          },
        },
        transformAssetUrls,
      },
    }),
    quasar({
      sassVariables: 'src/quasar-variables.sass',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: '@vue/compat',
    },
  },
  test: {
    globals: true,
    css: true,
    environment: 'jsdom',
    exclude: [...configDefaults.exclude],
  },
});
