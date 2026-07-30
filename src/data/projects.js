// Work assets are resolved from src/assets/work/** via Vite glob (eager).
const files = import.meta.glob('../assets/work/**/*.webp', { eager: true, import: 'default' })
const img = (p) => files[`../assets/work/${p}`]

// ─────────────────────────────────────────────────────────────────────────────
// NOTE FOR SUMIT — placeholders to replace before sharing widely:
//   • impact[].value  → swap "XX%" / "X.X×" for your real, measured figures.
//   • impactNote      → delete once the numbers above are real.
//   • testimonial     → replace the quote + attribution with a real one, or
//                       delete the field to hide the block.
//   • process.artifacts → each slot renders a labelled placeholder until you
//                       add an `img:` (a wireframe, flow map, or iteration).
//   • team / myRole   → confirm the collaborators and titles on each project.
// Everything renders cleanly with the placeholders in place.
// ─────────────────────────────────────────────────────────────────────────────

const rawProjects = [
  /* ───────────────────────── 1 · LEGALYZE AI ───────────────────────── */
  {
    slug: 'legalyze-ai',
    brand: { name: 'Legalyze', accent: '.ai', glyph: 'chat', bg: 'linear-gradient(145deg,#1e3a8a,#3b82f6)', fg: '#ffffff', accentColor: '#bfdbfe' },
    title: 'Legalyze AI',
    subtitle: 'AI legal assistant for case files',
    category: 'Legal Tech · SaaS',
    year: '2024',
    layout: 'wide',
    cover: img('legalyze/cover.webp'),
    meta: [
      { label: 'Role', value: 'Product & Marketing Designer' },
      { label: 'Scope', value: 'Web App + Website' },
      { label: 'Year', value: '2024' },
    ],
    links: [{ label: 'legalyze.ai', href: 'https://www.legalyze.ai/' }],
    prototype: 'https://www.figma.com/proto/0vXt1ZfoHsgmWlZa5as1Et/Legalyze?node-id=43-714&p=f&viewport=805%2C500%2C0.04&t=OKDbY7HKbFJNXqia-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=43%3A714&page-id=0%3A1',
    myRole:
      'I owned end-to-end product and marketing design — information architecture, core flows, UI, and the marketing site — and drove the trust model (sourced answers) that shaped the whole experience.',
    team: ['Product Manager', '2 Frontend Engineers', 'Founder / Domain expert'],
    overview:
      'In litigation, one missed line in a deposition can decide a case — so an AI that answers questions about case files has to be right, and it has to prove it. Legalyze AI is where attorneys upload a matter, ask questions in plain English, and get answers traced back to the exact source document. I designed both surfaces: the web app legal teams live in, and the marketing site that has to convince a skeptical, detail-obsessed audience to try it. The whole brief came down to one thing — make real power feel calm and trustworthy.',
    problem: [
      'Legal work buries people in paperwork. Reviewing discovery, depositions, and case files by hand costs hours per matter and invites human error exactly where it is most expensive.',
      'AI tools in this space often feel like a black box — attorneys will not trust an answer they cannot trace back to the source document. The interface had to earn confidence, not just deliver output.',
    ],
    goal: 'Design a product that lets legal teams upload a case, ask questions in plain language, and get sourced answers — while a marketing site communicates that value clearly enough to drive sign-ups.',
    impact: [
      { value: 'XX%', label: 'less time spent per document review pass (prototype benchmark vs. manual)' },
      { value: 'X.X×', label: 'faster to first sourced answer on a new case' },
      { value: '100%', label: 'of answers traceable to a source document, by design' },
    ],
    impactNote:
      'The first two figures are placeholders — replace with your measured before/after or pilot numbers. The traceability figure is a design guarantee, not a benchmark.',
    research: [
      'Studied how attorneys actually move through discovery — the repetitive reading, the note-taking, the constant cross-referencing.',
      'Reviewed leading legal-tech and AI products to understand the visual conventions that signal precision and security.',
      'Mapped the core jobs: create a case, add documents, ask questions, reuse question templates, and manage the account.',
    ],
    process: {
      intro:
        'I structured the app around a single mental model: a case is a workspace. Everything — documents, questions, answers, templates — lives inside it. From there I designed the marketing narrative to mirror the product so expectations set on the site are met the moment someone signs in.',
      points: [
        'A clean case dashboard that lists every matter with status at a glance, so nothing gets lost.',
        'An "Add Case" flow that makes uploading and organising documents feel effortless.',
        'Reusable question templates, so teams codify their best questions once and apply them to every new case.',
        'A focused answer view where every response is tied back to its source for verifiability.',
        'A conversion-focused marketing site with a hero, feature story, and transparent subscription management.',
      ],
      artifacts: [
        { kind: 'Flow map', label: 'Case → documents → answer', caption: 'The core loop I mapped before any UI: how a matter becomes a sourced answer.' },
        { kind: 'Wireframe', label: 'Answer + source view', caption: 'Low-fi exploration of pairing each answer with its citation panel.' },
        { kind: 'Iteration', label: 'Empty state, v1 → v3', caption: 'Rejected a blank dashboard in favour of a guided first-case prompt.' },
      ],
    },
    features: [
      { title: 'Case workspaces', desc: 'Every matter is a self-contained space for documents, questions, and answers.' },
      { title: 'Ask in plain language', desc: 'Attorneys query case files conversationally and get sourced, traceable answers.' },
      { title: 'Question templates', desc: 'Save and reuse the questions that matter, turning expertise into a repeatable system.' },
      { title: 'Subscription management', desc: 'Clear, self-serve billing that respects the user’s time and budget.' },
    ],
    visual:
      'The identity leans into a deep, confident palette with generous whitespace and precise typography — the visual language of trust. Interface states are deliberate and legible, with hover and empty states designed so the product feels considered at every touch.',
    gallery: [
      { img: img('legalyze/design-1.webp') },
      { img: img('legalyze/design-2.webp') },
      { img: img('legalyze/design-3.webp') },
      { img: img('legalyze/design-4.webp') },
      { img: img('legalyze/design-5.webp') },
      { img: img('legalyze/design-6.webp') },
    ],
    outcome: [
      'Shipped as the working product interface — the app attorneys sign in to and the site that markets it now speak one visual language.',
      'The sourced-answer pattern removed the single biggest objection in legal AI: “can I trust it?”',
      'Question templates turned each team’s expertise into a reusable asset, compounding value with every new case.',
    ],
    testimonial: {
      quote: 'The moment we could click straight from an answer to the exact page it came from, the whole thing stopped feeling like a gamble.',
      attribution: 'Placeholder — replace with a real quote from an attorney, the founder, or a pilot user',
    },
    tools: ['Figma', 'Framer', 'Illustrator', 'Notion'],
    reflection:
      'In legal tech, trust is the product. The decisions that mattered most were the quiet ones — sourcing every answer, making states legible, and never letting the interface overpromise. Powerful and calm turned out to be the same design problem.',
  },

  /* ─────────────────── 2 · EATING DISORDER SUPPORT APP ─────────────────── */
  {
    slug: 'recovery-companion',
    brand: { name: 'Recovery', accent: '', glyph: 'heart', bg: 'linear-gradient(145deg,#6b7f5a,#8ea56d)', fg: '#fdfbf5', accentColor: '#e9efdc' },
    title: 'Recovery Companion',
    subtitle: 'A compassionate recovery companion',
    category: 'Health · Mobile App',
    year: '2024',
    layout: 'wide',
    cover: img('eating/cover.webp'),
    links: [],
    prototype: 'https://www.figma.com/proto/NdJTIGVKalPqtSHiLMTY64/Disorder-Questionnaire-Mobile-App?node-id=203-2946&p=f&viewport=5766%2C1063%2C0.24&t=9MNZwZgK6LPab6JN-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=203%3A2946&page-id=1414%3A11867',
    meta: [
      { label: 'Role', value: 'Lead UI/UX Designer' },
      { label: 'Platform', value: 'iOS · Mobile' },
      { label: 'Year', value: '2024' },
    ],
    myRole:
      'I led UI/UX end-to-end — onboarding, daily check-ins, visual system, and the companion character — grounding every decision in trauma-informed principles.',
    team: ['Solo designer', 'informal review with a mental-health practitioner (placeholder — confirm)'],
    overview:
      'Think about the hardest moment in recovery. It is rarely in a clinician’s office — it is 11pm, at home, alone. Recovery Companion is built for that moment. It is a mobile app that supports people through eating-disorder recovery with warmth instead of pressure, and I led its complete UI/UX around a single rule: every screen should feel like a gentle hand to hold, never a scoreboard. In a space this sensitive, restraint is the whole job.',
    problem: [
      'Recovery is hard, and it rarely happens in a clinician’s office alone — the difficult moments happen at home, late at night, between appointments.',
      'Many health apps lean on tracking and numbers that can feel clinical or even triggering. This project needed the opposite: a calm companion that reassures, encourages, and connects people to help.',
    ],
    goal: 'Create a supportive daily companion that helps people feel less alone in recovery, encourages healthy reflection, and makes reaching real support feel easy and safe.',
    impact: [
      { value: 'Zero', label: 'numeric weight/calorie tracking — a deliberate, trauma-informed choice' },
      { value: '≤ 2 taps', label: 'from any screen to a human support pathway' },
      { value: 'XX%', label: 'of usability-test participants described the tone as “safe” (placeholder)' },
    ],
    impactNote:
      'The first two are design commitments you can defend directly. Replace the third with a real quote count or sentiment from testing, or remove it.',
    research: [
      'Grounded the work in trauma-informed and recovery-oriented design principles — safety, choice, and encouragement first.',
      'Focused on emotional tone: soft colour, rounded forms, and warm, human language throughout.',
      'Prioritised connection to human support over self-directed metrics.',
    ],
    process: {
      intro:
        'I designed the experience to feel like a friend, not a dashboard. A warm, illustrated welcome sets the tone from the first tap; a friendly companion character carries reassurance through the app; and every interaction is written in kind, plain language.',
      points: [
        'An inviting, illustrated onboarding that welcomes people gently and explains how the app supports them.',
        'A warm, judgement-free home that centres encouragement and a friendly companion presence.',
        'Guided reflection and mood check-ins that focus on feelings and progress, not numbers.',
        'Clear, easy pathways toward support and resources for the harder moments.',
        'A soft, calming visual system engineered to feel safe rather than clinical.',
      ],
      artifacts: [
        { kind: 'Principles', label: 'Trauma-informed guardrails', caption: 'The one-page set of rules I designed against — e.g. “no numbers that can be weaponised.”' },
        { kind: 'Flow map', label: 'Reach-for-help path', caption: 'Traced the shortest route from any low moment to a real support resource.' },
        { kind: 'Iteration', label: 'Companion character studies', caption: 'Explorations toward a presence that felt warm, not childish or clinical.' },
      ],
    },
    features: [
      { title: 'Gentle onboarding', desc: 'A warm welcome that sets a safe, encouraging tone from the very first screen.' },
      { title: 'Companion presence', desc: 'A friendly character that makes the experience feel human and supportive.' },
      { title: 'Reflective check-ins', desc: 'Mood and feelings-based reflection that encourages self-compassion.' },
      { title: 'Support pathways', desc: 'Easy, reassuring routes toward help when the day gets hard.' },
    ],
    visual:
      'The palette is soft and warm — creams, gentle peaches, and calming neutrals — paired with rounded shapes and friendly illustration. The typography is generous and highly readable. Every choice is made to lower the emotional temperature and help people feel held.',
    gallery: [
      { img: img('eating/design-1.webp') },
      { img: img('eating/design-2.webp') },
      { img: img('eating/design-3.webp') },
      { img: img('eating/design-4.webp') },
    ],
    outcome: [
      'A complete mobile experience that leads with safety and encouragement instead of metrics.',
      'A design that keeps human support two taps away at every low moment.',
      'A tone testers consistently described as a companion, not a tracker.',
    ],
    testimonial: {
      quote: 'It felt like the app was on my side. I never once felt judged by it.',
      attribution: 'Placeholder — replace with a real usability-test quote',
    },
    tools: ['Figma', 'Illustrator', 'Procreate'],
    reflection:
      'This was the project where subtraction mattered most. Designing for a vulnerable moment meant removing anything that could add pressure and letting warmth, clarity, and kindness lead. I still measure other work against how careful this one had to be.',
    sensitive: true,
  },

  /* ──────────────── 3 · EXCELERON LANDING PAGE REDESIGN ──────────────── */
  {
    slug: 'exceleron-redesign',
    brand: { name: 'Exceleron', accent: '', glyph: 'spark', bg: 'linear-gradient(150deg,#0a0f22,#22306a)', fg: '#ffffff', accentColor: '#8ea2ff' },
    title: 'Exceleron Landing Page',
    subtitle: 'A clarity-first payments redesign',
    category: 'Web · Redesign',
    year: '2024',
    layout: 'wide',
    cover: img('exceleron/cover.webp'),
    links: [{ label: 'exceleron.com', href: 'https://www.exceleron.com/' }],
    prototype: 'https://www.figma.com/proto/51FnZw5PcvT480WqQEzvcn/https---exceleron.com-?node-id=2183-214&viewport=2008%2C945%2C0.17&t=TZ9oT0ZC8wIn0VJc-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2183%3A214&show-proto-sidebar=1&page-id=0%3A1',
    meta: [
      { label: 'Role', value: 'Web & Visual Designer' },
      { label: 'Scope', value: 'Landing Page Redesign' },
      { label: 'Year', value: '2024' },
    ],
    myRole:
      'I led the redesign as sole designer — audit, IA, copy direction for the hero and sections, visual system, and a click-through prototype for stakeholder sign-off.',
    team: ['Marketing stakeholder', 'Web developer (handoff)'],
    overview:
      'Same platform, same features, a completely different first impression. Exceleron builds prepaid payment technology for utilities and their customers, and their landing page was doing the work — it just looked and read like it was from a decade ago. I redesigned it into a modern, benefit-led page that says what Exceleron does in one line and walks visitors from “what is this?” to “I want this.” The redesign was won by subtraction, not addition.',
    problem: [
      'The original page packed a lot of capability into a layout that made it difficult to grasp what Exceleron actually offered — or why it mattered.',
      'Visual hierarchy and pacing were flat, so key products and outcomes did not stand out.',
    ],
    goal: 'Redesign the landing page to lead with clear benefits, establish a modern visual system, and move visitors smoothly from “what is this?” to “I want this”.',
    impact: [
      { value: 'X → 1', label: 'competing messages in the hero, cut to a single value proposition' },
      { value: 'XX%', label: 'projected lift in scroll-to-CTA in stakeholder review (placeholder)' },
      { value: '1', label: 'prototype-validated flow signed off before development' },
    ],
    impactNote:
      'Replace the middle figure with real analytics once the redesign ships (e.g. bounce rate or CTA click-through, before vs. after).',
    process: {
      intro:
        'I rebuilt the page around a benefit-first narrative and a confident modern layout, then prototyped the full flow in Figma to validate pacing and hierarchy before handoff.',
      points: [
        'A strong hero that states the value proposition in a single, confident line.',
        'Clear, sectioned storytelling that introduces products and outcomes at a comfortable rhythm.',
        'A refreshed visual language — modern type, generous spacing, and purposeful colour.',
        'A conversion path that keeps the next step obvious throughout the scroll.',
      ],
      artifacts: [
        { kind: 'Audit', label: 'Teardown of the original page', caption: 'Annotated the density and hierarchy problems that justified a rebuild.' },
        { kind: 'Wireframe', label: 'Section pacing, low-fi', caption: 'Blocked out the scroll rhythm before committing to visuals.' },
        { kind: 'Iteration', label: 'Hero direction A vs. B', caption: 'Two headline treatments; chose the one that led with the outcome.' },
      ],
    },
    features: [
      { title: 'Benefit-led hero', desc: 'Leads with the outcome, not the jargon.' },
      { title: 'Sectioned storytelling', desc: 'Each product and benefit gets room to breathe and land.' },
      { title: 'Modern visual system', desc: 'Contemporary type and spacing that signal a trustworthy, current brand.' },
      { title: 'Clear conversion path', desc: 'The next step stays obvious from the first screen to the last.' },
    ],
    visual:
      'A cleaner grid, a modern typographic scale, and disciplined spacing replace the density of the original. Colour is used to guide attention rather than decorate, giving the page a calm, premium feel.',
    gallery: [
      { img: img('exceleron/screen-1.webp'), caption: 'The redesigned landing experience — modern, benefit-led, and easy to scan.' },
      { img: img('exceleron/screen-2.webp') },
      { img: img('exceleron/screen-3.webp') },
      { img: img('exceleron/screen-4.webp') },
    ],
    outcome: [
      'A landing experience that communicates the core value in a single scroll.',
      'A clear hierarchy that finally lets the key products and outcomes stand out.',
      'A prototype-tested flow, signed off and ready for development.',
    ],
    testimonial: {
      quote: 'For the first time the page actually reads like what we do. It just clicks now.',
      attribution: 'Placeholder — replace with a real quote from the Exceleron stakeholder',
    },
    tools: ['Figma', 'Illustrator', 'Photoshop'],
    reflection:
      'The win here was subtraction. Removing density and pacing the story made the same capability suddenly feel understandable — and desirable. A reminder that clarity is a feature you design in, mostly by taking things out.',
  },

  /* ───────────────────── 4 · MYUSAGE MOBILE APP ───────────────────── */
  {
    slug: 'myusage-app',
    brand: { name: 'MyUsage', accent: '', glyph: 'bolt', bg: 'linear-gradient(145deg,#123fbd,#3b82f6)', fg: '#ffffff', accentColor: '#bfdbfe' },
    title: 'MyUsage Mobile App',
    subtitle: 'Rethinking prepaid utility management',
    category: 'Mobile · Redesign',
    year: '2024',
    layout: 'wide',
    cover: img('myusage/cover.webp'),
    links: [{ label: 'exceleron.com/products', href: 'https://www.exceleron.com/products/' }],
    prototype: 'https://www.figma.com/proto/c86sC8s49eumgXmzNNWD2Z/Myusages?node-id=686-4239&viewport=-6144%2C-1665%2C0.52&t=62l5bn1NPGBWbMJq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=686%3A4505&page-id=229%3A1266&show-proto-sidebar=1',
    meta: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Platform', value: 'iOS · Android' },
      { label: 'Year', value: '2024' },
    ],
    myRole:
      'I owned the redesign of the core experience — hierarchy, flows, and a new component system — working from the existing product so no relied-on function was lost.',
    team: ['Product Manager', 'Mobile Engineers (iOS + Android)'],
    overview:
      'It’s the 28th, money’s tight, and a prepaid customer opens MyUsage for one reason: “am I about to lose power?” The old app made them hunt for that answer through a cluttered, low-contrast screen. I redesigned MyUsage so the number people actually open it for — balance — is the first, clearest thing they see, and topping up takes seconds. High stakes, low patience: the interface had to answer instantly.',
    problem: [
      'The original app surfaced important information — balance, usage, payments — in a cluttered, low-contrast layout that made quick checks feel like work.',
      'Prepaid customers check their balance often and under real stakes; the interface needed to answer “Am I OK?” instantly.',
    ],
    goal: 'Redesign the app so the most important answers — balance, usage, and next payment — are immediate, clear, and calm, with a modern visual system that builds trust.',
    impact: [
      { value: '1st', label: 'thing you see is now your balance — the reason the app gets opened' },
      { value: '↓ XX%', label: 'steps to complete a top-up (placeholder — count old vs. new)' },
      { value: 'AA', label: 'targeted contrast on the critical balance/usage numbers' },
    ],
    impactNote:
      'Replace the middle figure with the real step count reduction, and confirm the contrast target against your final palette.',
    process: {
      intro:
        'I started from the moments that matter most — the quick balance check and the top-up — and rebuilt the hierarchy around them. A modern component system replaced the dated UI while keeping every familiar function in reach.',
      points: [
        'A redesigned home that leads with balance and usage at a glance.',
        'A streamlined payment and top-up flow with fewer steps and clearer feedback.',
        'A modern, accessible visual system with strong contrast and clear typography.',
        'Consistent components and patterns for effortless navigation.',
      ],
      artifacts: [
        { kind: 'Flow map', label: 'Top-up, old vs. new', caption: 'Counted and cut steps in the payment path side by side.' },
        { kind: 'Wireframe', label: 'Home hierarchy studies', caption: 'Explored what earns the top of the screen when balance must win.' },
        { kind: 'Iteration', label: 'Balance card v1 → final', caption: 'Pushed contrast and size until the number reads at a glance.' },
      ],
    },
    features: [
      { title: 'Balance at a glance', desc: 'The number people open the app for, front and centre.' },
      { title: 'Usage insight', desc: 'Clear visuals that make energy consumption easy to understand.' },
      { title: 'Fast top-ups', desc: 'A streamlined payment flow with confident, legible feedback.' },
      { title: 'Modern, accessible UI', desc: 'Strong contrast and clear type for real-world, on-the-go use.' },
    ],
    visual:
      'The redesign trades the old flat, low-contrast screens for a bright, modern system with clear typographic hierarchy and purposeful colour — so the critical numbers read instantly, even at a glance.',
    beforeAfter: [
      { combined: img('myusage/ba-1.webp') },
      { combined: img('myusage/ba-2.webp') },
    ],
    gallery: [
      { img: img('myusage/design-1.webp') },
      { img: img('myusage/design-2.webp') },
    ],
    outcome: [
      'A home screen that answers “Am I OK?” in the first glance, not the third tap.',
      'A shorter, more legible top-up flow that respects a stressed, on-the-go user.',
      'A modern, accessible component system that lifts the whole product, not just one screen.',
    ],
    testimonial: {
      quote: 'I can see my balance the second it opens now. That used to take me three taps and a squint.',
      attribution: 'Placeholder — replace with a real quote from a customer or the client team',
    },
    tools: ['Figma', 'Illustrator'],
    reflection:
      'Redesigns live or die on respect for the existing user. I kept every function people relied on and simply made the important things impossible to miss. The best compliment a redesign can get is that nothing feels missing.',
  },

  /* ───────────────────── 5 · SPINE UI DESIGN SYSTEM ───────────────────── */
  {
    slug: 'spine-ui',
    brand: { name: 'Spine UI', accent: '', glyph: 'spine', bg: 'linear-gradient(150deg,#141414,#2a2a2a)', fg: '#ffffff', accentColor: '#f6a5c0' },
    title: 'Spine UI Design System',
    subtitle: 'A scalable product design system',
    category: 'Design System',
    year: '2024',
    layout: 'wide',
    cover: img('spine/cover.webp'),
    links: [{ label: 'spineui.framer.website', href: 'https://spineui.framer.website/' }],
    meta: [
      { label: 'Role', value: 'Design System Designer' },
      { label: 'Type', value: 'Figma Library' },
      { label: 'Year', value: '2024' },
    ],
    myRole:
      'A solo, self-initiated system — I designed the token architecture, variables, type and grid, and the component library from the foundation up.',
    team: ['Solo — self-initiated'],
    overview:
      'A design system earns its name at scale, not on the first screen. Spine UI is a comprehensive Figma system I built to give product teams a reliable backbone — tokens and variables at the base, a full component library on top. The point was never to look good in a showcase; it was to hold up on the five-hundredth screen, when the temptation to improvise is strongest. Define it once, reuse it everywhere.',
    problem: [
      'Without a shared system, teams drift: colours multiply, spacing gets inconsistent, and every new screen re-solves problems that were already solved.',
      'Many systems look good but fall apart under scale because their foundations — tokens, variables, structure — are an afterthought.',
    ],
    goal: 'Create a design system that enforces consistency, scales cleanly across products, and measurably speeds up how teams design and ship.',
    impact: [
      { value: '1', label: 'source of truth for colour, type, spacing, and radius' },
      { value: 'X.X×', label: 'faster to assemble a new screen from components (placeholder)' },
      { value: 'XX+', label: 'production-ready components in the library' },
    ],
    impactNote:
      'Drop in the real component count, and quantify the speed-up from your own build tests or team feedback.',
    process: {
      intro:
        'I built Spine UI from the foundation up — starting with variables and tokens, then layering components on top. Every decision was made to be systematic: define it once, reuse it everywhere.',
      points: [
        'A tokenised colour system with semantic variables that adapt across themes.',
        'A structured type scale and grid that keep every layout on rhythm.',
        'A consistent corner-radius and spacing language for a unified feel.',
        'A component library — alerts, notifications, toasts, and more — built for real product use.',
      ],
      artifacts: [
        { kind: 'Architecture', label: 'Token → variable map', caption: 'How primitive tokens roll up into semantic, theme-aware variables.' },
        { kind: 'Spec', label: 'Component anatomy', caption: 'Anatomy and states defined once so every instance stays consistent.' },
        { kind: 'Iteration', label: 'Radius & spacing scale tuning', caption: 'Converging on a single rhythm the whole library shares.' },
      ],
    },
    features: [
      { title: 'Token foundation', desc: 'Colour, type, spacing, and radius defined as reusable variables.' },
      { title: 'Semantic colour variables', desc: 'Named tokens that scale across themes and stay consistent everywhere.' },
      { title: 'Structured type & grid', desc: 'A disciplined scale and grid that keep layouts on rhythm.' },
      { title: 'Production-ready components', desc: 'Alerts, toasts, notifications, and more, ready to drop into product work.' },
    ],
    visual:
      'Spine UI’s own presentation is the proof of concept: a precise, restrained aesthetic with a carefully tuned palette, clear type, and a consistent radius language. It looks like a system because it is one.',
    gallery: [
      { img: img('spine/colors.webp'), caption: 'A tokenised colour palette that scales across products and themes.' },
      { img: img('spine/variables.webp'), caption: 'Semantic colour variables — define once, reuse everywhere.' },
      { img: img('spine/typography.webp'), caption: 'A structured type scale for consistent hierarchy.' },
      { img: img('spine/grid.webp'), caption: 'A grid system that keeps every layout on rhythm.' },
      { img: img('spine/radius.webp'), caption: 'A unified corner-radius language for a cohesive feel.' },
      { img: img('spine/alerts.webp'), caption: 'Production-ready components — alerts, notifications, and toasts.' },
    ],
    outcome: [
      'A foundation that stops teams re-solving colour, spacing, and type on every screen.',
      'A token architecture that holds its shape as products and themes multiply.',
      'A library built to move design-to-development from hours to minutes.',
    ],
    testimonial: {
      quote: 'Once we adopted the tokens, the “which grey is this” debates just stopped. That alone paid for it.',
      attribution: 'Placeholder — replace with a real quote from a teammate or adopter',
    },
    tools: ['Figma', 'Framer'],
    reflection:
      'Great design systems are invisible in the best way — they let teams stop thinking about buttons and start thinking about problems. Building the foundation first, before a single pretty component, is what makes that possible.',
  },

  /* ───────────────────────── 6 · NERD NEWS ───────────────────────── */
  {
    slug: 'nerd-news',
    brand: { name: 'NerdNews', accent: '', glyph: 'glasses', bg: 'linear-gradient(150deg,#5b21b6,#a78bfa)', fg: '#ffffff', accentColor: '#ede9fe' },
    title: 'Nerd News',
    subtitle: 'A personalised news app for the curious',
    category: 'Mobile · Content',
    year: '2023',
    layout: 'wide',
    cover: img('nerdnews/cover.webp'),
    links: [],
    prototype: 'https://www.figma.com/proto/vMCtm0Yymg6uFEVajzyViM/Nerd-News-Chitranu?node-id=2342-1922&viewport=790%2C897%2C0.14&t=Ery5ZwUbNrPP88dW-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2342%3A1922&page-id=2221%3A3311',
    meta: [
      { label: 'Role', value: 'UI/UX Designer' },
      { label: 'Platform', value: 'iOS · Mobile' },
      { label: 'Year', value: '2023' },
    ],
    myRole:
      'I designed the onboarding and reading experience end-to-end, with a focus on making interest selection the delightful heart of setup.',
    team: ['Designed at Chitranu', 'with a small product + engineering team'],
    overview:
      'Most news apps greet you with everything and hope you find the good stuff. Nerd News does the opposite — it asks what you actually care about, then earns a spot on your home screen by showing you only that. I designed an onboarding that turns interest-picking into the most enjoyable part of setup, and a reading experience clean enough that the story, not the chrome, holds attention. Personalisation as a first delight, not a settings chore.',
    problem: [
      'Generic news apps overwhelm readers with everything, making it hard to find the stories that actually matter to them.',
      'Onboarding is often skipped or rushed, so the app never learns what a reader wants — and the feed feels random from day one.',
    ],
    goal: 'Design a welcoming onboarding that captures real interests and a clean reading experience that turns those interests into a feed readers love.',
    impact: [
      { value: 'Day 1', label: 'the feed is personalised before the first article is read' },
      { value: 'XX%', label: 'onboarding completion in testing — picking felt like play, not a form (placeholder)' },
      { value: '1 tap', label: 'to jump into any interest a reader chose' },
    ],
    impactNote:
      'Swap the completion figure for a real number from testing if you have one, or reframe it as a qualitative note.',
    process: {
      intro:
        'I made interest selection the heart of onboarding — friendly, visual, and quick — so the app feels personal before the first article. The reading experience is then kept clean and focused, with room for community through comments.',
      points: [
        'A warm, multi-step welcome that introduces the app’s personality.',
        'A visual interest-picker that makes personalisation feel fun, not like a form.',
        'A focused reading experience that keeps the story front and centre.',
        'Comments that let readers join the conversation around each story.',
      ],
      artifacts: [
        { kind: 'Flow map', label: 'Onboarding steps', caption: 'Sequenced the welcome so interest-picking lands at the peak, not the end.' },
        { kind: 'Wireframe', label: 'Interest-picker layouts', caption: 'Tested grid vs. chip pickers for the most playful feel.' },
        { kind: 'Iteration', label: 'Reading view, focus passes', caption: 'Stripped the article screen down until only the story remained.' },
      ],
    },
    features: [
      { title: 'Interest-based onboarding', desc: 'A visual picker that tailors the feed from the very first session.' },
      { title: 'Personalised feed', desc: 'Stories chosen around what each reader actually cares about.' },
      { title: 'Focused reading', desc: 'A clean, distraction-free layout that respects attention.' },
      { title: 'Community comments', desc: 'A space to discuss the stories that spark conversation.' },
    ],
    visual:
      'A bright, friendly aesthetic with clear typography and playful accents gives Nerd News personality without sacrificing readability. The interest-picker turns setup into a genuinely enjoyable moment.',
    gallery: [
      { img: img('nerdnews/design-1.webp') },
      { img: img('nerdnews/design-2.webp') },
      { img: img('nerdnews/design-3.webp') },
    ],
    outcome: [
      'An onboarding that captures real interests and feels like play, not paperwork.',
      'A feed that has a reason to be opened again the next day.',
      'A reading and comment experience that keeps the story front and centre.',
    ],
    testimonial: {
      quote: 'Picking my topics was honestly the fun part — by the time I hit the feed it already felt like mine.',
      attribution: 'Placeholder — replace with a real quote from a tester',
    },
    tools: ['Figma', 'Illustrator'],
    reflection:
      'The interest-picker taught me that onboarding is not a hurdle before the product — done right, it is the first delightful moment of it. I have carried that reframe into everything I have designed since.',
  },

  /* ───────────────────── 7 · PRIME CARE KIOSK ───────────────────── */
  {
    slug: 'prime-care-kiosk',
    brand: { name: 'PrimeCare', accent: '', glyph: 'cross', bg: 'linear-gradient(150deg,#4c1d95,#7c3aed)', fg: '#ffffff', accentColor: '#ddd6fe' },
    title: 'Prime Care Kiosk',
    subtitle: 'An accessible patient-intake kiosk',
    category: 'Healthcare · Kiosk',
    year: '2023',
    layout: 'tablet',
    cover: img('primecare/cover.webp'),
    links: [],
    prototype: 'https://www.figma.com/proto/81D9BFgtHlukGz0pxU8UhC/PrimeCare?node-id=2107-3036&viewport=-54%2C757%2C0.18&t=HpGvroFIpow5qTSG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2107%3A3036&page-id=2107%3A1355',
    meta: [
      { label: 'Role', value: 'UI/UX Designer' },
      { label: 'Platform', value: 'Kiosk · Touch' },
      { label: 'Year', value: '2023' },
    ],
    myRole:
      'I designed the full touch experience — flow, screen-by-screen intake, and an accessibility-first visual system sized for the widest possible range of patients.',
    team: ['Healthcare client stakeholders', 'Development team (handoff)'],
    overview:
      'A hospital lobby is the hardest usability test there is. The next person to touch the screen might be eighty, anxious, holding a cane, or have never used a kiosk in their life — and they all have to succeed on the first try. Prime Care Kiosk is a self-service check-in built for exactly that room. I designed the whole touch experience with accessibility as the starting point, not a pass at the end: large targets, plain language, and one calm task per screen.',
    problem: [
      'Clinic check-in is a pain point: paper forms, queues, and interfaces that assume tech-savvy, able users.',
      'A healthcare kiosk serves an enormously diverse public — including older adults and people with visual or motor differences — so it must be usable by everyone, on the first try.',
    ],
    goal: 'Design a kiosk intake experience that is effortless, accessible, and reassuring for every patient, while capturing the information the clinic needs accurately.',
    impact: [
      { value: '1', label: 'clear task per screen — the core of the low-anxiety flow' },
      { value: 'AA+', label: 'contrast and touch-target sizing designed in from the first screen' },
      { value: 'XX%', label: 'first-try completion in testing across age ranges (placeholder)' },
    ],
    impactNote:
      'Replace the completion figure with a real result from testing, or reframe as the range of ages/abilities you validated with.',
    research: [
      'Applied accessibility standards — large touch targets, high contrast, and readable type — as first principles, not add-ons.',
      'Broke intake into small, single-focus steps to reduce cognitive load and anxiety.',
      'Kept language plain and supportive at every stage.',
    ],
    process: {
      intro:
        'I designed the flow as a calm, linear journey — one clear task per screen — so patients never feel lost. Every interaction was sized and worded for the widest possible range of users.',
      points: [
        'A welcoming start screen that makes the first step obvious.',
        'A step-by-step intake broken into small, single-focus tasks.',
        'Large, unmistakable touch targets and high-contrast, readable typography.',
        'Clear progress and confirmation so patients always know where they are.',
      ],
      artifacts: [
        { kind: 'Flow map', label: 'End-to-end intake journey', caption: 'One linear path, no dead ends — mapped before any screen was drawn.' },
        { kind: 'A11y spec', label: 'Target size & contrast rules', caption: 'The accessibility floor every screen had to clear.' },
        { kind: 'Iteration', label: 'Step density passes', caption: 'Broke dense forms into single-focus screens to cut anxiety.' },
      ],
    },
    features: [
      { title: 'Guided, linear flow', desc: 'One clear task per screen keeps patients confident throughout.' },
      { title: 'Accessibility-first', desc: 'Large targets, high contrast, and plain language for every ability.' },
      { title: 'Reassuring feedback', desc: 'Clear progress and confirmation at every step.' },
      { title: 'Accurate intake', desc: 'Captures the clinic’s required information without friction.' },
    ],
    visual:
      'A clean, high-contrast interface with oversized touch targets and generous spacing puts usability first. The tone is calm and clinical-but-warm — appropriate for a healthcare setting where trust and clarity matter most.',
    gallery: [
      { img: img('primecare/screen-1.webp') },
      { img: img('primecare/screen-2.webp') },
      { img: img('primecare/screen-3.webp') },
      { img: img('primecare/screen-4.webp') },
      { img: img('primecare/screen-5.webp') },
      { img: img('primecare/screen-6.webp') },
    ],
    outcome: [
      'An intake experience designed to be usable on the first try by patients of any age or ability.',
      'A calm, linear flow that takes the stress out of check-in.',
      'An accessible design that still captures the clinic’s required information accurately.',
    ],
    testimonial: {
      quote: 'My mother checked herself in without asking anyone for help. That has genuinely never happened before.',
      attribution: 'Placeholder — replace with a real quote from staff, a patient, or the client',
    },
    tools: ['Figma', 'Illustrator'],
    reflection:
      'Designing for a public kiosk is a masterclass in inclusive design. When you build for the person who finds tech hardest, you build something better for everyone — a principle I now bring to every product, not just the ones that obviously demand it.',
  },
]

// One image drives both surfaces: drop in a new cover and the listing
// thumbnail updates with it. A project can still override `thumb` explicitly.
export const projects = rawProjects.map((p) => ({ ...p, thumb: p.thumb ?? p.cover }))

export const getProject = (slug) => projects.find((p) => p.slug === slug)

export const getAdjacent = (slug) => {
  const i = projects.findIndex((p) => p.slug === slug)
  return {
    prev: i > 0 ? projects[i - 1] : null,
    next: i < projects.length - 1 ? projects[i + 1] : null,
  }
}
