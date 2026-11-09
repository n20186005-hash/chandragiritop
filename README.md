# Chandragiri Cable Car Top Station independent guide

Existing architecture: Nepali-led Astro SSR homepage with English FAQ/summary, 36 prerendered English topic guides at `/<slug>/`, prerendered privacy/terms, Cloudflare adapter and original SESSION/IMAGES/ASSETS bindings. Each topic page declares lang="en" and a self canonical. No false hreflang is invented: there is one URL set, not paired ne/en routes.

Use Node24.21.0 and pnpm12.4.2. App/deployment dependency versions and pnpm lock remain the original exact versions. `pnpm-workspace.yaml` permits only the four existing locked esbuild/workerd versions and retains existing minimum-release-age exceptions.

Run `bash self-check.sh`, then default `npx wrangler deploy --dry-run` (the existing local Wrangler4.133.0). Preview the native generated output with `npx wrangler dev --port 8943`; no deployment is part of dev/dry-run. The actual project name is chandragiritop and compatibility date2026-09-17 is unchanged. No domain binding was added.

The configured custom source entry imports the existing adapter handler, performs public HTTP/www canonical guards before it, and is compiled by the adapter into dist/server/entry.mjs. Default Wrangler follows generated .wrangler/deploy/config.json to that entry. Keep the generated SESSION/IMAGES/ASSETS configuration intact. Build sanitization removes local source paths only from compiled text, not generated Wrangler configuration needed by deployment.

Reviewed facts are in src/data/guide.ts with operator URLs and2026-10-29review date. Operator FAQ and CableCar page times/lunch breaks conflict; visible tables attribute both rather than selecting a current last service. Last ticket/ascent/descent remain confirmation questions. Operator fares preserve category, currency and direction; no final checkout or same-day service is claimed. Maps is a dated manual snapshot, not site-collected or automatically synchronized reviews. Top Station is distinct from Thankot-side boarding and the resort/temple.

The three previous unverified external photo uses have been replaced by original CC0 conceptual SVG/JPEG, visibly labelled as not a photograph/map/current condition. Their removal does not clear former subject or photography rights.

Regional weather remains server-fetched SSR data with a same-origin JSON refresh endpoint, strict time/finite/range checks, fifteen-minute cache and explicit error clearing. The browser does not directly contact the weather provider or request device location. Model hazards are separate from probability and do not assert cable operations or safe shelter.

The original optional GA4 consent key/yes-no choices are preserved, with storage-failure protection and withdrawal disable/cookie cleanup/reload. Historical data already transmitted cannot be recalled. Hosting Cloudflare connection/security and possible independent Web Analytics are disclosed separately with no fictitious switch. Local tests cannot establish legal compliance or production browser behaviour.

Local candidate status is not formal production acceptance. Independent browser layouts/interactions and official exact-commit Cloudflare/live-domain/runtime checks remain required.

Topic guides: `src/data/topics.ts` is the registry (36 slugs, content in `topics.p0.ts` / `topics.p1.ts` / `topics.p2.ts`, slug order in `src/data/topic-slugs.json`). Topic routes are `prerender=true` and join the sitemap automatically; the SSR homepage is listed through sitemap `customPages`. `trailingSlash: 'always'` plus the worker's slash redirect keep one canonical per page. Run `node scripts/check-topics.mjs` for content and internal-link integrity, and `scripts/check-output.mjs` after build for sitemap and per-page SEO checks. P0 covers fares, hours, last ride, the two stations and Kathmandu/Thankot access; P1 covers the ride, accessibility, transport options, hilltop facilities and the half-day route; P2 covers seasonal, family, nearby, food and stay decisions. To publish in stages, set `PUBLISHED_PRIORITIES` in `src/data/topics.ts` to `["P0"]` or `["P0", "P1"]`; routes, homepage links, related links, the guide directory and sitemap expectations follow that list.
