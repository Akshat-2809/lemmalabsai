/** All page copy, ported word for word from design/project/Main.dc.html. */

/* sections, in page order: the nav counter, the index overlay and the anchors all read from this */
export const SECTIONS = [
  { id: "top", name: "Introduction" },
  { id: "principles", name: "Principles" },
  { id: "problem", name: "The problem" },
  { id: "loop", name: "The loop" },
  { id: "night", name: "Overnight" },
  { id: "memory", name: "Memory" },
  { id: "private", name: "Privacy" },
  { id: "start", name: "Roadmap" },
  { id: "access", name: "Early access" },
  { id: "founder", name: "Founder" },
  { id: "faq", name: "Questions" },
  { id: "talk", name: "Let's talk" },
] as const;

/* hero */
export const HERO_STATS: [value: string, text: string][] = [
  ["Inside", "runs in your own cloud or on-site"],
  ["Asks first", "approval for risky actions"],
  ["Learns", "gets better with every loop"],
];

export const STAGES = [
  { label: "01 · Idea", text: "Stage 1: the idea, as a model" },
  { label: "02 · Architecture", text: "Stage 2: the architecture around it" },
  { label: "03 · Running", text: "Stage 3: the system running" },
];

/* §1 */
export const LEMMAS: { title: string; em: string; text: string }[] = [
  { title: "Mathematics", em: "first.", text: "Every system starts as something you can reason about precisely, before it becomes code." },
  { title: "Built to", em: "scale.", text: "Architecture planned for growth from the first commit, not patched in later." },
  { title: "High", em: "performance.", text: "Speed and efficiency are part of the product, engineered on purpose." },
  { title: "Ambitious, then", em: "real.", text: "Take the hard technical idea seriously, and carry it all the way to a product." },
];

/* §2 */
export const BUSYWORK: [n: string, task: string, note: string][] = [
  ["(i)", "Syncing in standups", "Time spent repeating what the tools already know."],
  ["(ii)", "Updating tickets by hand", "Status that lives in five places at once."],
  ["(iii)", "Chasing reviews for context", "Pull requests waiting on someone to explain."],
  ["(iv)", "Scrolling old threads before a call", "Prep that should take seconds, not an hour."],
];

/* §3 */
export const LOOP: { t: string; x: string; tags: string[] }[] = [
  { t: "Observe", x: "It watches the work happening in the tools your team already uses: commits, tickets, threads, meetings and inboxes, all inside your own environment.", tags: ["Commits", "Tickets", "Threads", "Meetings"] },
  { t: "Decide", x: "It works out what matters now, what can wait, and who needs to know.", tags: ["Priorities", "What can wait", "Who to tell"] },
  { t: "Act", x: "It does the safe work on its own and reports back. Anything risky, like a payment or a client email, waits for a one-tap approval.", tags: ["Safe work: automatic", "Risky work: approval", "Always reports back"] },
  { t: "Learn", x: "It turns results and feedback into better behaviour, so each loop is a little sharper than the last.", tags: ["Outcomes", "Feedback", "Better next time"] },
];

/* §4 */
export const NIGHT_LOG: { tm: string; text: string; ask?: boolean }[] = [
  { tm: "01:20", text: "Resolved a merge conflict and opened it for review" },
  { tm: "02:45", text: "Flagged a milestone that is slipping and noted why" },
  { tm: "04:10", text: "Drafted release notes from merged work" },
  { tm: "05:30", text: "Wrote a client update; holding it for approval", ask: true },
  { tm: "07:00", text: "Prepared standup notes and a morning brief" },
];

/* §5 */
export const MEMORY: { fact: string; source: string; conf: number }[] = [
  { fact: "Releases go out on Thursdays", source: "team channel", conf: 92 },
  { fact: "Client prefers a weekly summary", source: "meeting notes", conf: 78 },
  { fact: "Reviews for payments code need two people", source: "project wiki", conf: 85 },
  { fact: "Design reviews happen on Mondays", source: "calendar", conf: 61 },
];

/* §6 */
export const DEPLOY: [option: string, title: string, text: string][] = [
  ["Option A", "Your private cloud", "Runs in your own cloud account, under your own encryption keys."],
  ["Option B", "On-site device", "A box that sits on your premises, for teams that want everything on site."],
];

export const GUARANTEES: [sym: string, title: string, text: string][] = [
  ["⊢", "Asks before risky actions", "Payments, client emails and access changes need a one-tap approval."],
  ["∅", "Work accounts only", "No personal accounts, no screen watching, no keystrokes."],
  ["≡", "Every action logged", "A full record of what it did, and why."],
  ["⌫", "Erase anything", "Delete what it learned, whenever you want."],
];

/* §7 */
export const ROADMAP = {
  first: {
    teams: ["Engineering", "Managers"],
    items: ["Merge conflicts, stale pull requests and release notes", "Incident triage and cloud cost spikes", "Milestone risk, meeting follow-ups, weekly status and a morning brief"],
  },
  next: {
    teams: ["Finance", "Sales & clients", "People & IT", "Security", "Leadership"],
    items: ["The same loop, brought to more teams over time"],
  },
};

/* §8: widths of the redacted bars, in px */
export const STATUS: { label: string; redacted?: number[]; value?: string }[] = [
  { label: "Product name", redacted: [150] },
  { label: "Launch date", redacted: [120, 60] },
  { label: "First teams", value: "Engineering · Managers" },
  { label: "Status", value: "Building · in stealth" },
];

/* §9 */
export const FOUNDER_QUOTE = "I focus on turning ambitious technical ideas into high performance products.";

export const FOUNDER_FACTS: [label: string, value: string][] = [
  ["Role", "Founder · AI System Engineer"],
  ["Background", "AI software engineering, mathematics and scalable systems"],
  ["Studied", "The University of Manchester"],
  ["Based", "Manchester, United Kingdom"],
  ["Skills", "Problem solving · Computer science · Mathematics · AI"],
  ["Route", "UK Innovator Founder visa, valid until 2029"],
];

/* §10 */
export const FAQS: { q: string; a: string }[] = [
  { q: "Is it available yet?", a: "Not yet. Lemma Labs is in stealth and the product is in development. We are opening early access to a small number of teams first." },
  { q: "Where does it run?", a: "Inside your company: either in your own private cloud account or on a device on your premises. Your data does not leave." },
  { q: "Will it act without asking?", a: "Only on safe, routine work, and it reports back on everything. Risky actions such as payments, client emails and access changes always need approval." },
  { q: "Can we see and delete what it learns?", a: "Yes. Every fact in its memory shows its source and confidence, and you can edit or erase any of it." },
  { q: "Who is building it?", a: "Lemma Labs was founded by Geetinder Singh in Manchester, UK, with a background in AI software engineering, mathematics and scalable systems." },
];

/* §11 */
export const DOORS: { sym: string; title: string; text: string; subject: string }[] = [
  { sym: "∇", title: "Engineers", text: "Talk AI systems, maths and performance with us.", subject: "Engineer" },
  { sym: "∑", title: "Founders", text: "Compare notes on building from first principles.", subject: "Founder" },
  { sym: "∫", title: "Investors", text: "Hear more about what we're building when the time is right.", subject: "Investor" },
];
