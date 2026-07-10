# Sumit Wagh — Portfolio (v3)

Production-ready **React + Vite + Tailwind CSS** portfolio.

## What's new in v3
- **Seven real case studies** built from your project assets: Legalyze AI, Recovery Companion (eating-disorder support app), Exceleron Landing Page redesign, MyUsage Mobile App, Spine UI Design System, Nerd News, and Prime Care Kiosk.
- **Consistent case-study structure** — every project follows: Overview · Problem · Goal · Research (where applicable) · Design Process · Key Features · Before/After (redesigns) · Visual Design + gallery · Outcome · Tools Used · Reflection.
- **Layout-aware galleries** — phone screens render in a rounded phone grid, desktop/board screens render full-width, kiosk/tablet screens in a two-up grid.
- **Typography tuned to alicelee.design** — clean and highly readable, with **no letter-spacing in body text** (headings keep a subtle tightness only).
- **Selected Work arrows** are now consistent Phosphor icons, with a hover arrow badge on each project card.
- **Shots** gallery and homepage now use real UI from the projects.

## Getting started
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Where your content lives
- **Case studies:** `src/data/projects.js` — one schema per project. Copy is original and SEO-friendly; edit any field freely.
- **Images:** `src/assets/work/<project>/` — covers were composed for mobile apps; screens are optimised. Drop replacements with the same filenames.
- **Shots:** `src/data/content.js` (`shots`).
- **Contact / résumé link:** `src/data/site.js`. Add your PDF at `/public/resume.pdf`.
- **Company logos:** set `logoSrc` on each entry in `journey` (`src/data/content.js`).

## Notes
- The Recovery Companion case study handles a sensitive topic responsibly — it focuses on recovery, encouragement, and connection to support, with no diet/metric specifics, and links to the National Alliance for Eating Disorders helpline.
- Reference links (legalyze.ai, exceleron.com, spineui.framer.website) are cited on the relevant case studies; all written content is original, not copied.

## Structure
```
src/
  assets/work/<project>/   Covers + optimised screens for each case study
  components/              Navbar, Footer, GradientBg, ProjectCard, Reveal, Seo
  data/                    projects.js (7 case studies), content.js, site.js
  pages/                   Home, Work, WorkDetail, Shots, Uses, About
```

## Deploy
Vercel (`vercel.json`) or Netlify (`public/_redirects`). Build `npm run build`, output `dist/`.

## v4 updates
- Project cards no longer show the year; Featured Work subtitles stay on one line (desktop).
- Content container widened to 1280px max with 64px desktop gutters (~1150px content).
- Hero title renders in a single consistent colour.
- CTA now uses a prominent "Let's Talk" button.
- Project detail: details values at 22px, project-reference link removed, a "View Prototype" button added where a Figma prototype exists, and the Tools Used section removed.
- Journey: "Read my CV" button removed; real OSP / Chitranu / Upwork logos in place.
- Three Halyard Display weights self-hosted (Regular 400 body/buttons, Medium 500 headings).
- AI Stack replaced with Claude AI, Lovable, Figma Make, Gemini, Bolt.new, Framer AI, ChatGPT, Relume, and v0 by Vercel — each with its official logo (v0 uses a text badge until its SVG is supplied).

## v5 updates
- Hero: label + subtitle removed; new statement title; renders in a single colour.
- Typography: **Book weight only** across the entire site (Regular/Medium removed); no body letter-spacing.
- Nav: Apple-style glassmorphism that intensifies on scroll (blur + saturate + shadow).
- Selected Work cards: hover arrow removed.
- Work detail: redesigned with a **left sticky scrollspy nav** (keerthanasanjay-style); year removed; body copy set to 20px/30px (responsive down for tablet/mobile); Prototype button moved below Reflection.
- About: tighter spacing after the title; section headings at 36px; Journey spans the full content width; premium book-hover (lift + tilt + sheen + title reveal).

## v6 updates
- Global: Framer-like smooth scrolling via Lenis (respects reduced-motion); nav uses a stronger Apple-style glassmorphism matching the reference; hero title spans the full layout width and is fully responsive.
- Work detail: proper scroll offset when jumping to sections (Lenis + scroll-margin); side-nav links at 18px; Key Features copy at 16px with no letter-spacing; reduced gap between the side nav and content.
- Uses: added iPhone 17; official brand icons for every design tool and productivity app (via simple-icons, with Adobe/Procreate fallbacks); page title and body enlarged to match the Work Detail scale.
- About: title and body enlarged to match Work Detail; richer "Journey so far" with role summaries, skill tags, and clearer hierarchy.
- Selected Work: card subtitle now matches the title size but stays secondary (muted colour, concise, single line).

## v7 updates
- Hero: rewritten headline ("Seven years turning complex healthcare & SaaS products into experiences that feel effortless."), reduced size, no letter-spacing.
- Global: letter-spacing removed across the entire app.
- Hero gradient is now scoped to the hero — fully visible on load, then smoothly fades out on scroll (spring-eased, transform/opacity only) and is gone by the Selected Work section, revealing a clean background. Nav keeps its glassmorphism throughout.
- Work detail: featured image moved to the very top, above the title and content.
- Uses: Workstation, Design Tools, and Productivity now use the supplied device photos and tool logos, all normalised into uniform chips (Webflow/Notion/Spotify keep brand marks).
- About: "Journey so far" rebuilt to the reference layout — role on the left, company + date on the right, current role emphasised and past roles muted, company logos retained as timeline markers.
