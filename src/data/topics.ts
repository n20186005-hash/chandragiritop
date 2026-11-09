import slugList from "./topic-slugs.json";
import { P0_TOPICS } from "./topics.p0";
import { P1_TOPICS } from "./topics.p1";
import { P2_TOPICS } from "./topics.p2";

export type GroupId = "tickets" | "transport" | "hilltop" | "planning" | "nearby";
export type Priority = "P0" | "P1" | "P2";

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}
export interface TopicFaq { q: string; a: string }
export interface TopicImage { src: string; alt: string; caption: string }
export interface Topic {
  slug: string;
  group: GroupId;
  priority: Priority;
  title: string;
  description: string;
  h1: string;
  lead: string;
  intro: string;
  highlights: string[];
  sections: TopicSection[];
  faqs: TopicFaq[];
  related: string[];
  image?: TopicImage;
}

export const CHECKED = "2026-10-29";
export const SITE_URL = "https://chandragiritop.com";
export const OPERATOR_PHONE = "+977-9802069900";
export const MAPS_URL = "https://maps.app.goo.gl/Rgg86Zios8XGvSxV7";

export const OPERATOR_LINKS: { label: string; url: string }[] = [
  { label: "Chandragiri Hills — Cable Car (fares, timings, ride)", url: "https://www.chandragirihills.com/cable-car-ride/" },
  { label: "Chandragiri Hills — FAQ (hours, cabin and age rules)", url: "https://www.chandragirihills.com/faq/" },
  { label: "Chandragiri Hills — Contact (cable car line)", url: "https://www.chandragirihills.com/contact/" },
  { label: "Chandragiri Hills — Route to the Hills", url: "https://www.chandragirihills.com/map/" },
  { label: "Chandragiri Hills — Bhaleshwor Mahadev Temple", url: "https://www.chandragirihills.com/bhaleshwor-mahadev-temple/" },
  { label: "Google Maps — Top Station reference point", url: MAPS_URL }
];

export const TOPIC_GROUPS: { id: GroupId; label: string; labelNe: string; blurb: string }[] = [
  { id: "tickets", label: "Cable car & tickets", labelNe: "केबल कार र टिकट", blurb: "Fares, buying, hours, last ride and the two stations." },
  { id: "transport", label: "Getting there", labelNe: "कसरी पुग्ने", blurb: "Reaching the Thankot-side boarding station by road." },
  { id: "hilltop", label: "On the hill", labelNe: "माथिल्लो परिसर", blurb: "Temple, views, viewpoint facilities and hilltop activities." },
  { id: "planning", label: "Trip planning", labelNe: "यात्रा योजना", blurb: "Itineraries, seasons, weather and visitor needs." },
  { id: "nearby", label: "Nearby, food & stays", labelNe: "वरपर, खानपान र बास", blurb: "Surroundings, walks, meals and accommodation decisions." }
];

export function groupLabel(id: GroupId): string {
  return TOPIC_GROUPS.find((g) => g.id === id)?.label ?? id;
}
export function groupLabelNe(id: GroupId): string {
  return TOPIC_GROUPS.find((g) => g.id === id)?.labelNe ?? id;
}

export const TOPICS: Topic[] = [...P0_TOPICS, ...P1_TOPICS, ...P2_TOPICS];
export const TOPIC_SLUGS: string[] = slugList;
export const PUBLISHED_PRIORITIES: Priority[] = ["P0", "P1", "P2"];
export const PRIORITY_LABEL: Record<Priority, string> = {
  P0: "Essential visit questions",
  P1: "On-the-hill and route guides",
  P2: "Seasonal, nearby and stay guides"
};

const unique = new Set(TOPICS.map((t) => t.slug));
if (unique.size !== TOPICS.length) throw new Error("Duplicate topic slug in TOPICS");
if (TOPICS.length !== TOPIC_SLUGS.length || TOPICS.some((t, i) => t.slug !== TOPIC_SLUGS[i])) {
  throw new Error("TOPICS must match src/data/topic-slugs.json in the same order");
}
for (const t of TOPICS) {
  if (!t.title || !t.description || !t.h1 || !t.lead || !t.intro) throw new Error(`Incomplete metadata: ${t.slug}`);
  if (t.sections.length < 2) throw new Error(`Thin content (sections): ${t.slug}`);
  if (t.faqs.length < 3) throw new Error(`Thin content (FAQ): ${t.slug}`);
  if (t.related.length < 2) throw new Error(`Missing internal links: ${t.slug}`);
  if (t.highlights.length < 3) throw new Error(`Missing quick facts: ${t.slug}`);
  if (t.related.includes(t.slug)) throw new Error(`Self link: ${t.slug}`);
  for (const r of t.related) if (!unique.has(r)) throw new Error(`Broken related link ${r} in ${t.slug}`);
}

export const PUBLISHED_TOPICS: Topic[] = TOPICS.filter((t) => PUBLISHED_PRIORITIES.includes(t.priority));

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}
export function isPublished(slug: string): boolean {
  return PUBLISHED_TOPICS.some((t) => t.slug === slug);
}
export function topicsByGroup(id: GroupId): Topic[] {
  return TOPICS.filter((t) => t.group === id);
}
export function publishedByGroup(id: GroupId): Topic[] {
  return PUBLISHED_TOPICS.filter((t) => t.group === id);
}
export function topicsByPriority(p: Priority): Topic[] {
  return TOPICS.filter((t) => t.priority === p);
}
export function topicPath(slug: string): string {
  return `/${slug}/`;
}
export function topicUrl(slug: string): string {
  return SITE_URL + topicPath(slug);
}
