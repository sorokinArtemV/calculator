import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-expect-error 123
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
