// Work assets are resolved from src/assets/work/** via Vite glob (eager).
const files = import.meta.glob('../assets/work/**/*.webp', { eager: true, import: 'default' })
const img = (p) => files[`../assets/work/${p}`]

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
    overview:
      'Legalyze AI helps attorneys and legal teams turn mountains of case documents into instant answers. I designed both the product — the web application lawyers work in every day — and the marketing website that explains the promise and converts visitors into trials. The challenge was to make something genuinely powerful feel calm and trustworthy in a profession where accuracy is everything.',
    problem: [
      'Legal work buries people in paperwork. Reviewing discovery, depositions, and case files by hand costs hours per matter and invites human error exactly where it is most expensive.',
      'AI tools in this space often feel like a black box — attorneys will not trust an answer they cannot trace back to the source document. The interface had to earn confidence, not just deliver output.',
    ],
    goal: 'Design a product that lets legal teams upload a case, ask questions in plain language, and get sourced answers — while a marketing site communicates that value clearly enough to drive sign-ups.',
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
      'A cohesive experience where the marketing site and product speak the same visual language.',
      'A traceable answer model that addresses the core trust barrier in legal AI.',
      'A template system that turns one-off expertise into repeatable, scalable value.',
    ],
    tools: ['Figma', 'Framer', 'Illustrator', 'Notion'],
    reflection:
      'In legal tech, trust is the product. The most important design decisions were the quiet ones — sourcing every answer, making states legible, and never letting the interface overpromise.',
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
    overview:
      'Recovery Companion is a mobile app designed to support people through eating-disorder recovery with warmth rather than pressure. I led the complete UI/UX — from onboarding to daily check-ins — with one guiding principle: every screen should feel like a gentle, non-judgemental hand to hold. This is a sensitive space, so the design prioritises safety, encouragement, and connection to real support over metrics and numbers.',
    problem: [
      'Recovery is hard, and it rarely happens in a clinician’s office alone — the difficult moments happen at home, late at night, between appointments.',
      'Many health apps lean on tracking and numbers that can feel clinical or even triggering. This project needed the opposite: a calm companion that reassures, encourages, and connects people to help.',
    ],
    goal: 'Create a supportive daily companion that helps people feel less alone in recovery, encourages healthy reflection, and makes reaching real support feel easy and safe.',
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
      'A complete, cohesive mobile experience designed around safety and encouragement.',
      'An emotional tone that feels like a companion rather than a tracker.',
      'A recovery-first approach that keeps human support at the centre.',
    ],
    tools: ['Figma', 'Illustrator', 'Procreate'],
    reflection:
      'This was the project where restraint mattered most. Designing for a vulnerable moment meant removing anything that could add pressure, and letting warmth, clarity, and kindness lead every decision.',
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
    overview:
      'Exceleron builds prepaid payment technology that helps utilities and their customers manage energy on their own terms. Their existing landing page worked hard but felt dated and dense. I redesigned it into a modern, benefit-led experience that communicates the platform’s value quickly and guides visitors toward action.',
    problem: [
      'The original page packed a lot of capability into a layout that made it difficult to grasp what Exceleron actually offered — or why it mattered.',
      'Visual hierarchy and pacing were flat, so key products and outcomes did not stand out.',
    ],
    goal: 'Redesign the landing page to lead with clear benefits, establish a modern visual system, and move visitors smoothly from “what is this?” to “I want this”.',
    process: {
      intro:
        'I rebuilt the page around a benefit-first narrative and a confident modern layout, then prototyped the full flow in Figma to validate pacing and hierarchy before handoff.',
      points: [
        'A strong hero that states the value proposition in a single, confident line.',
        'Clear, sectioned storytelling that introduces products and outcomes at a comfortable rhythm.',
        'A refreshed visual language — modern type, generous spacing, and purposeful colour.',
        'A conversion path that keeps the next step obvious throughout the scroll.',
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
      'A modern landing experience that communicates value at a glance.',
      'A clearer hierarchy that lets key products and outcomes stand out.',
      'A validated, prototype-tested flow ready for development.',
    ],
    tools: ['Figma', 'Illustrator', 'Photoshop'],
    reflection:
      'The win here was subtraction. By removing density and pacing the story, the same capability suddenly felt understandable — and desirable.',
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
    overview:
      'MyUsage lets utility customers track their energy usage, monitor balance, and top up on the go. The existing app was functional but visually dated and hard to parse at a glance. I redesigned the core experience into a clear, modern app that makes managing a prepaid account feel simple and even reassuring.',
    problem: [
      'The original app surfaced important information — balance, usage, payments — in a cluttered, low-contrast layout that made quick checks feel like work.',
      'Prepaid customers check their balance often and under real stakes; the interface needed to answer “Am I OK?” instantly.',
    ],
    goal: 'Redesign the app so the most important answers — balance, usage, and next payment — are immediate, clear, and calm, with a modern visual system that builds trust.',
    process: {
      intro:
        'I started from the moments that matter most — the quick balance check and the top-up — and rebuilt the hierarchy around them. A modern component system replaced the dated UI while keeping every familiar function in reach.',
      points: [
        'A redesigned home that leads with balance and usage at a glance.',
        'A streamlined payment and top-up flow with fewer steps and clearer feedback.',
        'A modern, accessible visual system with strong contrast and clear typography.',
        'Consistent components and patterns for effortless navigation.',
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
      'A dramatically clearer home screen that answers “Am I OK?” instantly.',
      'A faster, more legible top-up flow.',
      'A modern, accessible system that modernises the entire product.',
    ],
    tools: ['Figma', 'Illustrator'],
    reflection:
      'Redesigns live or die on respect for the existing user. I kept every function people relied on and simply made the important things impossible to miss.',
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
    overview:
      'Spine UI is a comprehensive Figma design system built to give product teams a reliable backbone — hence the name. It pairs a rigorous token foundation with a full component library so teams can move from idea to polished screen without reinventing the basics. I designed the system to be consistent, scalable, and genuinely fast to build with.',
    problem: [
      'Without a shared system, teams drift: colours multiply, spacing gets inconsistent, and every new screen re-solves problems that were already solved.',
      'Many systems look good but fall apart under scale because their foundations — tokens, variables, structure — are an afterthought.',
    ],
    goal: 'Create a design system that enforces consistency, scales cleanly across products, and measurably speeds up how teams design and ship.',
    process: {
      intro:
        'I built Spine UI from the foundation up — starting with variables and tokens, then layering components on top. Every decision was made to be systematic: define it once, reuse it everywhere.',
      points: [
        'A tokenised colour system with semantic variables that adapt across themes.',
        'A structured type scale and grid that keep every layout on rhythm.',
        'A consistent corner-radius and spacing language for a unified feel.',
        'A component library — alerts, notifications, toasts, and more — built for real product use.',
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
      'A consistent foundation that eliminates re-solving the basics.',
      'A scalable token architecture that holds up as products grow.',
      'A library that measurably accelerates design-to-development.',
    ],
    tools: ['Figma', 'Framer'],
    reflection:
      'Great design systems are invisible in the best way — they let teams stop thinking about buttons and start thinking about problems. Building the foundation first is what makes that possible.',
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
    overview:
      'Nerd News is a mobile news app built for people who want to follow the topics they genuinely care about — tech, science, and everything in between — without the noise. I designed an onboarding and reading experience that learns a reader’s interests up front and turns them into a feed worth opening every day.',
    problem: [
      'Generic news apps overwhelm readers with everything, making it hard to find the stories that actually matter to them.',
      'Onboarding is often skipped or rushed, so the app never learns what a reader wants — and the feed feels random from day one.',
    ],
    goal: 'Design a welcoming onboarding that captures real interests and a clean reading experience that turns those interests into a feed readers love.',
    process: {
      intro:
        'I made interest selection the heart of onboarding — friendly, visual, and quick — so the app feels personal before the first article. The reading experience is then kept clean and focused, with room for community through comments.',
      points: [
        'A warm, multi-step welcome that introduces the app’s personality.',
        'A visual interest-picker that makes personalisation feel fun, not like a form.',
        'A focused reading experience that keeps the story front and centre.',
        'Comments that let readers join the conversation around each story.',
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
      'An onboarding that captures interests without feeling like work.',
      'A personalised feed that gives readers a reason to return.',
      'A clean reading and comment experience that respects attention.',
    ],
    tools: ['Figma', 'Illustrator'],
    reflection:
      'The interest-picker taught me that onboarding is not a hurdle before the product — done right, it is the first delightful moment of it.',
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
    overview:
      'Prime Care Kiosk is a self-service check-in experience for a healthcare setting, designed to guide patients of every age and ability through intake without stress. I designed the full touch experience with accessibility at its core — large targets, plain language, and a calm, step-by-step flow that anyone can follow.',
    problem: [
      'Clinic check-in is a pain point: paper forms, queues, and interfaces that assume tech-savvy, able users.',
      'A healthcare kiosk serves an enormously diverse public — including older adults and people with visual or motor differences — so it must be usable by everyone, on the first try.',
    ],
    goal: 'Design a kiosk intake experience that is effortless, accessible, and reassuring for every patient, while capturing the information the clinic needs accurately.',
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
      'An intake experience usable by patients of every age and ability.',
      'A calm, linear flow that reduces check-in stress.',
      'An accessible design that captures accurate information reliably.',
    ],
    tools: ['Figma', 'Illustrator'],
    reflection:
      'Designing for a public kiosk is a masterclass in inclusive design. When you build for the person who finds tech hardest, you build something better for everyone.',
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
