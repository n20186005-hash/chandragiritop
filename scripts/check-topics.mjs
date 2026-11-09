import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (p) => readFile(new URL(p, root), "utf8");
const slugs = JSON.parse(await read("src/data/topic-slugs.json"));
const files = ["src/data/topics.p0.ts", "src/data/topics.p1.ts", "src/data/topics.p2.ts"];

const sections = [];
for (const file of files) {
  const source = await read(file);
  if (/[\u4e00-\u9fff]/.test(source)) throw new Error(`CJK text leaked into English topic content: ${file}`);
  const chunks = source.split(/^    slug: "/m).slice(1);
  for (const chunk of chunks) {
    const field = (key) => {
      const m = chunk.match(new RegExp(`^    ${key}: "((?:[^"\\\\]|\\\\.)*)"`, "m"));
      return m ? m[1] : null;
    };
    const highlightsMatch = chunk.match(/^    highlights: \[([\s\S]*?)^    \],/m);
    const relatedMatch = chunk.match(/^    related: \[([^\]]*)\]/m);
    const stringsIn = (m) => (m ? [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]) : []);
    const slug = (chunk.match(/^([a-z0-9-]+)"/) || [])[1];
    sections.push({
      file,
      slug,
      title: field("title"),
      description: field("description"),
      h1: field("h1"),
      lead: field("lead"),
      intro: field("intro"),
      group: field("group"),
      priority: field("priority"),
      highlights: stringsIn(highlightsMatch),
      related: stringsIn(relatedMatch),
      sectionCount: (chunk.match(/^        heading: "/gm) || []).length,
      faqCount: (chunk.match(/^      \{ q: "/gm) || []).length
    });
  }
}

const fail = (msg) => { throw new Error(msg); };
if (sections.length !== slugs.length) fail(`Expected ${slugs.length} topics, parsed ${sections.length}`);
const known = new Set(slugs);
sections.forEach((t, i) => {
  if (t.slug !== slugs[i]) fail(`Slug order mismatch at ${i}: ${t.slug} vs ${slugs[i]}`);
  for (const key of ["title", "description", "h1", "lead", "intro", "group", "priority"]) {
    if (!t[key]) fail(`${t.slug}: missing ${key}`);
  }
  if (t.title.length > 75) fail(`${t.slug}: title too long (${t.title.length})`);
  if (t.description.length < 90 || t.description.length > 175) fail(`${t.slug}: description length ${t.description.length}`);
  if (t.sectionCount < 2) fail(`${t.slug}: thin sections`);
  if (t.faqCount < 3) fail(`${t.slug}: thin FAQ`);
  if (t.highlights.length < 3) fail(`${t.slug}: thin highlights`);
  if (t.related.length < 2) fail(`${t.slug}: too few related links`);
  if (t.related.includes(t.slug)) fail(`${t.slug}: self link`);
  for (const r of t.related) if (!known.has(r)) fail(`${t.slug}: broken related link ${r}`);
  if (!["P0", "P1", "P2"].includes(t.priority)) fail(`${t.slug}: bad priority`);
  if (!["tickets", "transport", "hilltop", "planning", "nearby"].includes(t.group)) fail(`${t.slug}: bad group`);
});

const counts = { P0: 0, P1: 0, P2: 0 };
for (const t of sections) counts[t.priority] += 1;
console.log(`Verified ${sections.length} topics (P0 ${counts.P0} / P1 ${counts.P1} / P2 ${counts.P2}); slugs, metadata lengths, sections, FAQ, highlights, related links and English text purity all pass.`);
