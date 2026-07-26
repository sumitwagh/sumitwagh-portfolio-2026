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

## v8 updates
- Container widened to 1440px (max-w-site) and applied consistently.
- Hero title set to 72px / 71px line-height (responsive down), stronger and more premium.
- Work listing (Home, Selected Work, "More work") now shows a **brand logo lockup** per project (glyph + wordmark on a brand gradient) instead of a UI screenshot — kept separate from the hero image.
- Project detail: featured hero image stays at the top and is independent of the listing logo; category label removed (title leads); metadata at 16px with improved hierarchy; section headings raised from 15px to 30px with more breathing room.
- Selected Work: "Case Studies" label removed.
- Shots: rebuilt as a two-row infinite marquee (opposite directions, pause on hover, seamless loop, edge fade, rounded + shadowed cards with hover-scale, lazy-loaded, reduced-motion friendly).

### Managing project media
Each project in `src/data/projects.js` now has two independent assets:
- `brand` — the logo lockup shown on listing/grid pages (edit `name`, `accent`, `glyph`, `bg`, `fg`, `accentColor`; glyphs live in `src/components/BrandThumb.jsx`). Swap in a real client logo by rendering an `<img>` there.
- `cover` — the featured hero image shown only on the project detail page.

## v9 updates
- Hero: added the animated profile illustration on the right (responsive two-column, stacks on mobile), an "Open to Freelance & Full-Time Opportunities" availability badge with a live status dot, and worked "Pune, India" into the headline.
- Buttons + navigation now use the supplied Halyard regular font (only there), with UPPERCASE button/nav labels.
- Navigation backdrop blur reduced to 7px (subtle glassmorphism).
- Work cards: removed the shadow; hover is now a clean lift + gentle image scale.
- Work detail: removed the narrow content cap (content uses the full available width) and rebuilt the vertical section nav in the reference's line-marker style (a rule that grows and darkens for the active section, with the label alongside).
- Experience: replaced the old timeline with an interactive expandable-card section, placed on the Home page right after Selected Work.
- About: added a full-bleed horizontal "Off screen" travel gallery — polaroid-style cards with slight rotation, drag/scroll, snap, and hover straighten.

### Placement note (Experience section)
Recommended and implemented on the **Home page, after Selected Work** — it continues the narrative right after the strongest proof (the work itself), so a first-time visitor reads: what I make → where I've done it, without a click. About keeps the personal story + travel gallery, avoiding duplicate journey content.

## v10 updates
- Global: kept a slight letter-spacing on nav items and button text (everything else remains untracked).
- Hero: relocated the availability badge beside the profile illustration with an animated curly connector arrow; renamed the primary button to "Selected Work", which now smooth-scrolls to the Selected Work section on the same page; using the latest profile illustration.
- Experience: redesigned into "the journey so far" — an alternating timeline (reference-inspired) with stamp-style company logos, date pills, location pins, achievement bullets, a progressive line-draw and scroll-triggered card/node reveals.
- Footer: full redesign — oversized email CTA with animated underline, live Pune/IST availability status, sitemap/social/back-to-top columns, and a giant gradient "Sumit Wagh" wordmark, all with subtle motion.
- Uses: delightful hover interactions — item lift + soft shadow, icon chip scale/rotate, and a gentle content shift.
- Off-screen: the travel gallery is now a full-bleed continuous marquee that loops seamlessly and pauses on hover.
- About: stronger storytelling hierarchy (eyebrow → headline → lead → quick facts), and the new illustrated B&W portrait blended onto a soft gradient panel.

## v11 updates
- Reverted the Footer to its previous simple version (closing line + social row), and confirmed the Work Detail section navigation is back to the original left-border style.
- Featured Work cards now use the actual project thumbnails (16:10, object-cover, consistent hover scale) instead of the brand-logo lockups; Prime Care falls back to its cover image.
- Hero: fixed the availability-badge arrow (clean curl + arrowhead) and set the layout to 70% content / 30% profile image, responsive down to a single column.
- Experience: redesigned as "where I have worked" with a list ⇄ timeline toggle — an expandable list view (logos with a connecting line, mono date ranges, asterisk achievement bullets) and a draggable horizontal timeline with year gridlines and a "now" marker. All existing content preserved.

## v12 updates
- Container narrowed to 1312px (82rem) for more whitespace and easier reading.
- Hero: new headline — "Product designer making complex things feel obvious." — with a supporting line; the availability note is now a handwritten annotation with a curved arrow (not a badge); the portrait is larger (58/42 split).
- Experience: timeline/list toggle removed. Rebuilt as a quiet typographic list — hovering a role brings it forward and eases the others back, revealing the summary and tags.
- **New "Right now" section:** an interactive dotted globe (real Natural Earth landmass data, drag to spin, momentum) that pins the visitor's approximate location next to mine, with live temperatures for both. Location via ipapi.co (no permission prompt), weather via Open-Meteo. Both are keyless, and the section degrades gracefully if either call fails.
- Work detail: ktz.dk-inspired navigation — a "Return" link, story-first header with Role/Scope/Year/Live metadata, a numbered sticky index whose siblings dim on hover, and a fixed bottom bar showing reading progress, the project you're viewing, a jump to the end, and a sound toggle. Hover/selection play a synthesised tick (Web Audio, no audio files).
- About: portrait removed. The intro is now purely typographic with a four-column facts row, and the story is signed off with a hand-drawn signature.

### Sound
Interface sound is **off by default** and toggled from the bottom bar on case-study pages; the choice persists in localStorage. Browsers block audio before a user gesture, so the audio context is created lazily on first interaction.

### Previewing
`npm run build:preview` produces `dist-preview/index.html` — the entire real app inlined into one shareable file (hash routing so it works from `file://`).

## v13 updates
- Hero: longer, more specific subheading.
- Right now: rewritten copy — the heading reports the real distance between you and me, and the closing line reacts to the temperature gap ("You're 4° warmer — I'd trade"). In dark mode the globe is now a near-black sphere with light dots and a soft atmospheric rim, matching the reference.
- Case studies: title, subtitle and Return link are centre-aligned; metadata sits in a centred rule-bounded row; section headings are numbered with hairline rules; figure captions are monospace and centred.
- Uses: added the workstation photo below the intro.
- About: rewritten around a sharper opening ("I design the screens people use on their worst day") and restructured into four titled chapters in a two-column layout, still signed off by hand.
- Off screen: new line — "I collect flight stubs, questionable street food, and photos of doors."
- Shots: rebuilt from scratch. Filterable (Everything / Dashboards / Mobile / Design systems) with an animated pill, a masonry grid that preserves each screen's natural aspect ratio, per-shot captions, and a full lightbox with arrow-key and click navigation.

## v14 updates
- Right now: each location is now a real pin with a label popover (city + temperature) that tracks the sphere as it turns and fades out as the point rotates away. Distance uses the visitor's local convention — miles for the US, UK, Liberia and Myanmar, kilometres everywhere else ("11 miles apart, give or take." / "18 km apart, give or take."). Removed the "give it a spin" note and arrow.
- Case studies: removed the label above the title; metadata now spans the full container with centred cells; the last field is Live *or* Prototype, linking to whichever the project has.
- Shots: restored the previous two-row marquee, now using all 19 dashboard/desktop shots.
- About: the chaptered story is replaced by a single "My Story" paragraph with the signature directly beneath it; the Based in / Experience / Focus / Currently block is gone; the photo strip is full-viewport-width with the edge fade removed (hover still pauses it).

## v15 updates
- Hero: new profile illustration; the availability note now uses a softer curved arrow that sweeps up toward the illustration, with the arrow leading the text and proper spacing.
- Earth: reworked the dark-mode shading — a subtle body gradient, a terminator shadow hugging the lower-right limb, a directional rim light and a faint outer atmosphere, so the sphere reads as mass rather than a bright disc pasted on the background.
- Case studies: new featured/cover images for all seven projects, each normalised to a uniform 16:10 frame (padded with edge-sampled colour rather than cropped, so no mockup is cut). Live/Prototype now links to the Figma prototype for the six projects that have one, and the live site for Spine UI.
- Shots: 31 new dashboard screenshots, all normalised to an identical 16:9 frame so the two marquee rows stay perfectly even.
- About: new signature; the "Off screen" section now breaks out of the page container and spans the full viewport width, heading included.

## v16 updates
- Project images: `cover` is now the single source for a project's imagery — the listing thumbnail derives from it automatically (`thumb: p.thumb ?? p.cover`), so dropping in a new featured image updates the detail page and the cards together. The old duplicate `featured.jpg` files were removed.
- Shots: removed the edge fade on the marquee rows.
- About: smaller signature, and the "Pune, India" label is gone.
- Off screen: the heading sits back inside the page container while the photo strip stays full-bleed.

## v17 updates
- New featured images for Legalyze AI and Recovery Companion, normalised to the same 16:10 frame as the rest. Because the cover now drives the thumbnail, the listing cards updated with them automatically.
- New visual designs applied across Legalyze AI (6), Recovery Companion (4), Nerd News (3) and MyUsage (2 screens + 2 before/after). All are composed 3:2 presentation frames, so those case studies now use the full-width `wide` gallery layout instead of the phone grid.
- `BeforeAfter` now accepts a single `combined` image as well as a `before`/`after` pair, which suits MyUsage's new pre-composed comparisons.
- Housekeeping: removed a dead `shots` export in content.js and pruned 52 superseded screenshots (the work assets are eagerly globbed, so unused files were still being bundled).

## v17 updates
- Hero: sharper title ("I design healthcare software people can trust."), a richer subheading, and the availability indicator redesigned as a modern status chip (pulsing dot + monospace label) that links to email. Added a subtle, continuous float to the illustration.
- Experience: subtitle 16→20px, duration text 13→16px, paragraph 16→18px.
- Right now: paragraph bumped to 19/22px for stronger hierarchy.
- Shots: replaced with the 31 new screenshots, now shown in three infinite rows (11 / 11 / 9), alternating direction, no edge fade.
- About: removed the old title and intro paragraph; the story now runs in a full-width, immersive two-column layout with the new photo and a compelling title ("The long way to obvious."), and the signature sits directly beneath the photo.

## v18 updates
- About: the Story and Profile now sit inside the standard site container (82rem), aligned with the nav and every other section instead of breaking full-width. Heading spans the measure; below it a balanced photo (fixed ~340px column, sticky) sits beside the story, which is broken into four paragraphs with a lead emphasis for better rhythm, spacing, and use of white space. Consistent padding and alignment across breakpoints.

## Image format: WebP
All raster images the app references are now WebP. The two `import.meta.glob` patterns (`work/**/*.webp`, `shots/*.webp`), the `img('…')` lookups in `src/data/projects.js`, and the direct imports (portrait, workstation, book covers) were all updated from `.jpg` to `.webp`. Vite handles `.webp` natively — no config change needed.

Note: `src/assets/img/work/*.jpg` and `src/assets/img/profile.jpg` are unused legacy files (nothing imports them) and were left untouched; they can be safely deleted.
