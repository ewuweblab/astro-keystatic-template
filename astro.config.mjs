// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

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
        // Pre-bundle these for the Cloudflare dev runtime (workerd) at startup.
        // Keystatic: without this, /api/keystatic fails with "exports is not defined".
        // Markdoc: otherwise Vite finds them on the first post view and reloads mid-request,
        // which can fail with "The file does not exist ... in the optimize deps directory".
        include: [
          '@keystatic/core',
          '@keystatic/core/api/generic',
          '@astrojs/markdoc/components',
          '@astrojs/markdoc/runtime',
          '@astrojs/markdoc/runtime-assets-config',
        ],
      },
    },

    plugins: [tailwindcss()],
  },
});