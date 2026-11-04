// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],
  server: {
    // Lets the dev server answer on your Codespace URL (*.app.github.dev)
    allowedHosts: ['.app.github.dev'],
  },
  adapter: cloudflare(),
  vite: {
    ssr: {
      optimizeDeps: {
        // Pre-bundle Keystatic's CommonJS dependencies for the Cloudflare dev runtime.
        // Without this, /api/keystatic fails in `npm run dev` with "exports is not defined".
        include: ['@keystatic/core', '@keystatic/core/api/generic'],
      },
    },
  },
});
