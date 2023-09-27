import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './.test/setup.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
      provider: 'istanbul',
      all: true,
      include: ['lib/**/*.tsx', 'lib/**/*.ts'],
      exclude: ['lib/**/*.stories.tsx']
    }
  },
  resolve: {
    alias: {
      '@lib': path.resolve(__dirname, './lib')
    }
  }
});
