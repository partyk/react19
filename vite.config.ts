import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
/**
 * @DOC https://www.npmjs.com/package/vite-plugin-checker
 */
import { checker } from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./**/*.{ts,tsx}"',
      },
    }),
  ],
});
