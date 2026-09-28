// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // TODO: set this to your real domain once you buy it (used for canonical URLs).
  // site: 'https://example.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
