import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_URL?.trim() || 'https://chandragiritop.com';

export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare({ configPath: 'wrangler.jsonc', prerenderEnvironment: 'node' }),
  integrations: site ? [sitemap({ customPages: ['https://chandragiritop.com/'], filter: (page) => !/(?:privacy|terms|404|api)(?:\/|\.html|$)/.test(page) })] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
