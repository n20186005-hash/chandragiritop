import {readFile,access}from'node:fs/promises';import assert from'node:assert/strict';
const root=new URL('../',import.meta.url),get=p=>readFile(new URL(p,root),'utf8');
await access(new URL('src/pages/index.astro',root));
const config=JSON.parse(await get('dist/server/wrangler.json')),entry=await get('dist/server/entry.mjs');
assert.equal(config.name,'chandragiritop');assert.equal(config.assets.binding,'ASSETS');assert.equal(config.assets.run_worker_first,true);assert.equal(config.images.binding,'IMAGES');assert.ok(config.kv_namespaces.some(x=>x.binding==='SESSION'));assert.ok(entry.includes('APEX_HOST')&&entry.includes('canonicalHost'));assert.ok(/fetch\(request, env, ctx\)/.test(entry));
const sitemap=await get('dist/client/sitemap-0.xml');assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(x=>x[1]),['https://chandragiritop.com/']);
for(const page of['privacy','terms']){const html=await get(`dist/client/${page}/index.html`);assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1);assert.ok(html.includes('noindex,follow'));assert.ok(html.includes(`https://chandragiritop.com/${page}/`));}
for(const asset of['chandragiri-concept.svg','chandragiri-social.jpg'])await access(new URL('dist/client/images/'+asset,root));
console.log('Verified native generated wrapper, originalSESSION/IMAGES/ASSETS, one-home sitemap, both legal pages and local image inventory. Runtime/browser checks remain separate.');
