import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_URL?.trim() || 'https://chandragiritop.com';

export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare({ prerenderEnvironment: 'node' }),
  integrations: site ? [sitemap({ filter: (page) => !['/privacy/', '/terms/'].includes(page) })] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
