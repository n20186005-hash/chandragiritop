import {readFile,access,readdir}from'node:fs/promises';import assert from'node:assert/strict';
const root=new URL('../',import.meta.url),get=p=>readFile(new URL(p,root),'utf8');
const slugs=JSON.parse(await get('src/data/topic-slugs.json'));
await access(new URL('src/pages/index.astro',root));
const config=JSON.parse(await get('dist/server/wrangler.json')),entry=await get('dist/server/entry.mjs');
assert.equal(config.name,'chandragiritop');assert.equal(config.assets.binding,'ASSETS');assert.equal(config.assets.run_worker_first,true);assert.equal(config.images.binding,'IMAGES');assert.ok(config.kv_namespaces.some(x=>x.binding==='SESSION'));assert.ok(entry.includes('APEX_HOST')&&entry.includes('canonicalHost'));assert.ok(/fetch\(request, env, ctx\)/.test(entry));
const published=(await readdir(new URL('dist/client/',root),{withFileTypes:true})).filter(e=>e.isDirectory()&&slugs.includes(e.name)).map(e=>e.name).sort();
assert.ok(published.length>0,'at least one topic page must be published');
const sitemap=await get('dist/client/sitemap-0.xml');
const locs=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(x=>x[1]);
const expected=['https://chandragiritop.com/',...published.map(s=>`https://chandragiritop.com/${s}/`)];
assert.deepEqual([...locs].sort(),[...expected].sort(),'sitemap must contain the homepage and every published topic page exactly once');
for(const slug of published){
 const html=await get(`dist/client/${slug}/index.html`);
 const url=`https://chandragiritop.com/${slug}/`;
 assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`one H1: ${slug}`);
 const canonical=html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1]??html.match(/<link[^>]*href="([^"]+)"[^>]*rel="canonical"/)?.[1];
 assert.equal(canonical,url,`self canonical: ${slug}`);
 assert.ok(html.includes('<html lang="en">'),`English lang: ${slug}`);
 assert.ok(html.includes('BreadcrumbList')&&html.includes('FAQPage')&&html.includes('WebPage'),`structured data: ${slug}`);
 assert.ok(!html.includes('noindex,follow'),`indexable: ${slug}`);
}
for(const page of['privacy','terms']){const html=await get(`dist/client/${page}/index.html`);assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1);assert.ok(html.includes('noindex,follow'));assert.ok(html.includes(`https://chandragiritop.com/${page}/`));}
for(const asset of['chandragiri-concept.svg','chandragiri-social.jpg'])await access(new URL('dist/client/images/'+asset,root));
console.log(`Verified native generated wrapper, original bindings, ${locs.length}-URL sitemap, ${published.length} English topic pages (H1/canonical/lang/JSON-LD/indexable), both legal pages and local image inventory. Runtime/browser checks remain separate.`);
