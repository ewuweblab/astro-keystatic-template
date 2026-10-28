// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

// Keystatic's admin only runs during `npm run dev`.
// The build script sets SKIP_KEYSTATIC=true, so the live site is fully static.
const skipKeystatic = process.env.SKIP_KEYSTATIC === 'true';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), ...(skipKeystatic ? [] : [keystatic()])],
  server: {
    // Lets the dev server answer on your Codespace URL (*.app.github.dev)
    allowedHosts: ['.app.github.dev'],
  },
});