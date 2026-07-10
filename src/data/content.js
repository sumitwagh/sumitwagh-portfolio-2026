import ospLogo from '../assets/logos/osp.svg'
import chitranuLogo from '../assets/logos/chitranu.svg'
import upworkLogo from '../assets/logos/upwork.svg'

// AI tool logos
import claudeLogo from '../assets/ai/claude.svg'
import lovableLogo from '../assets/ai/lovable.svg'
import figmaMakeLogo from '../assets/ai/figma-make.svg'
import geminiLogo from '../assets/ai/gemini.svg'
import boltLogo from '../assets/ai/bolt.png'
import framerLogo from '../assets/ai/framer.svg'
import chatgptLogo from '../assets/ai/chatgpt.png'
import relumeLogo from '../assets/ai/relume.png'
import bookSteveJobs from '../assets/img/book-stevejobs.jpg'
import bookAtomic from '../assets/img/book-atomic.jpg'
import bookYogi from '../assets/img/book-yogi.jpg'
import bookDeepWork from '../assets/img/book-deepwork.jpg'
import bookIkigai from '../assets/img/book-ikigai.jpg'
import bookRichDad from '../assets/img/book-richdad.jpg'
import bookFirst20 from '../assets/img/book-first20.jpg'
import bookMiracle from '../assets/img/book-miracle.jpg'
import bookSmashing from '../assets/img/book-smashing.jpg'
import bookPortfolio from '../assets/img/book-portfolio.jpg'
import bookDoet from '../assets/img/book-doet.jpg'
import bookRefactoring from '../assets/img/book-refactoring.jpg'

export const books = [
  { title: 'Steve Jobs', author: 'Walter Isaacson', image: bookSteveJobs },
  { title: 'Atomic Habits', author: 'James Clear', image: bookAtomic },
  { title: 'Autobiography of a Yogi', author: 'Paramahansa Yogananda', image: bookYogi },
  { title: 'Deep Work', author: 'Cal Newport', image: bookDeepWork },
  { title: 'IKIGAI', author: 'Francesc Miralles & Hector Garcia', image: bookIkigai },
  { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', image: bookRichDad },
  { title: 'The First 20 Hours', author: 'Josh Kaufman', image: bookFirst20 },
  { title: 'The Miracle Morning', author: 'Hal Elrod', image: bookMiracle },
  { title: 'Smashing Book 6', author: 'Smashing Magazine', image: bookSmashing },
  { title: 'The Portfolio Book', author: 'Dann Petty', image: bookPortfolio },
  { title: 'The Design of Everyday Things', author: 'Don Norman', image: bookDoet },
  { title: 'Refactoring UI', author: 'Wathan & Schoger', image: bookRefactoring },
]

// Company logos will be provided by Sumit; `logo` is a text-badge fallback,
// `logoSrc` can be filled in with an imported image when available.
export const journey = [
  {
    company: 'OSP Labs',
    role: 'Senior UI Designer',
    period: '2021 — Present',
    href: 'https://osplabs.com',
    logo: 'OSP',
    logoSrc: ospLogo,
    logoClass: 'text-[#1d4ed8]',
    summary:
      'Leading design for AI-first healthcare products across Revenue Cycle Management, remote patient monitoring, and EHR workflows — turning dense clinical and billing processes into interfaces teams actually enjoy using.',
    tags: ['Healthcare SaaS', 'Design Systems', 'AI Products'],
  },
  {
    company: 'Chitranu',
    role: 'UI/UX Designer',
    period: '2018 — 2021',
    href: 'https://chitranu.com',
    logo: 'C',
    logoSrc: chitranuLogo,
    logoClass: 'text-[#2563eb]',
    summary:
      'Shipped next-generation web and mobile apps for a roster of SaaS and consumer clients, owning flows end to end from research and wireframes to polished, developer-ready UI.',
    tags: ['Web & Mobile', 'Prototyping', 'Client Work'],
  },
  {
    company: 'Freelance — Upwork',
    role: 'UI/UX Designer',
    period: '2017 — 2018',
    href: 'https://www.upwork.com/freelancers/~01e21e5b85315b31d6?viewMode=1',
    logo: 'up',
    logoSrc: upworkLogo,
    logoClass: 'text-[#14a800]',
    summary:
      'Where it started — designing for startups and small businesses around the world, learning to translate real business goals into clean, usable interfaces on tight timelines.',
    tags: ['Startups', 'End-to-end UX'],
  },
]

// Placement decision: the AI Stack leads the Uses page as a first-class
// section, so the "AI Tools Stack" lives with the rest of the toolkit
// instead of adding a fourth item to the primary nav.
export const uses = [
  {
    category: 'AI Stack',
    blurb: 'The models and copilots that sit inside my everyday design process — from first draft to final handoff.',
    items: [
      { name: 'Claude AI', logo: claudeLogo, desc: 'My primary thinking partner for research synthesis, UX writing, and turning messy notes into structured specs.' },
      { name: 'Lovable', logo: lovableLogo, desc: 'Turning ideas into working full-stack prototypes at conversation speed.' },
      { name: 'Figma Make', logo: figmaMakeLogo, desc: 'Generating and iterating on UI straight inside the design canvas.' },
      { name: 'Gemini', logo: geminiLogo, desc: 'Fast research, summaries, and multimodal exploration.' },
      { name: 'Bolt.new', logo: boltLogo, desc: 'Spinning up and testing production-ready front-ends in the browser.' },
      { name: 'Framer AI', logo: framerLogo, desc: 'Interactive prototypes and shippable sites with real motion.' },
      { name: 'ChatGPT', logo: chatgptLogo, desc: 'Quick ideation, competitive teardowns, and drafting product copy.' },
      { name: 'Relume', logo: relumeLogo, desc: 'AI-assisted sitemaps and wireframes to accelerate the structure phase.' },
      { name: 'v0 by Vercel', logo: null, desc: 'Fast, throwaway UI prototypes to pressure-test a layout before committing.' },
    ],
  },
  {
    category: 'Workstation',
    blurb: 'A quiet, reliable setup tuned for long design sprints and pixel-accurate work.',
    items: [
      { name: 'MacBook Air M1, 16GB', img: 'devices/macbook.png', desc: 'Silent and dependable — runs Figma, Framer, and a browser full of tabs without a stutter.' },
      { name: 'LG 27UP850N-W 4K', img: 'devices/monitor.png', desc: '27-inch HDR panel over USB-C. The color accuracy I trust for final UI polish.' },
      { name: 'iPad Air M3', img: 'devices/ipad.png', desc: 'Sketching, Sidecar, and on-device testing of mobile flows.' },
      { name: 'Apple Pencil 2 Pro', img: 'devices/pencil.png', desc: 'Wireframes, lettering, and quick illustration passes.' },
      { name: 'Logitech MX Master 3', img: 'devices/mouse.png', desc: 'The most comfortable precision mouse I have ever used.' },
      { name: 'Sony WH-1000XM5', img: 'devices/headphone.png', desc: 'Noise-cancelling that turns any room into a focus room.' },
      { name: 'iPhone 17', img: 'devices/iphone17.png', desc: 'My daily driver and primary device for testing the latest iOS interactions.' },
      { name: 'iPhone SE (3rd Gen)', img: 'devices/iphonese.png', desc: 'My small-screen truth-teller for responsive testing.' },
      { name: 'Apple Watch Series 9', img: 'devices/watch.png', desc: 'Gentle nudges and health tracking through deep-work blocks.' },
    ],
  },
  {
    category: 'Design Tools',
    blurb: 'The craft layer — where interfaces, systems, and motion actually get built.',
    items: [
      { name: 'Figma', img: 'tools/figma.png', desc: 'My home base for UI, prototyping, and design systems.' },
      { name: 'Framer', img: 'tools/framer.svg', desc: 'Interactive prototypes and shippable marketing sites with real motion.' },
      { name: 'Adobe Illustrator', img: 'tools/illustrator.svg', desc: 'Logos, iconography, and precise vector work.' },
      { name: 'Adobe Photoshop', img: 'tools/photoshop.svg', desc: 'Heavy image editing when Figma reaches its limits.' },
      { name: 'Procreate', img: 'tools/procreate.png', desc: 'Loose sketching of UI concepts and illustration on iPad.' },
      { name: 'Webflow', icon: 'webflow', desc: 'No-code development when a project calls for a CMS-driven build.' },
    ],
  },
  {
    category: 'Productivity',
    blurb: 'The systems that keep projects, ideas, and clients moving.',
    items: [
      { name: 'Notion', icon: 'notion', desc: 'One workspace for tasks, docs, project wikis, and half-formed ideas.' },
      { name: 'TickTick', img: 'tools/ticktick.svg', desc: 'Fast, minimal to-dos with recurring tasks that never slip.' },
      { name: '1Password', img: 'tools/onepassword.svg', desc: 'Secure and synced across every device.' },
      { name: 'Raycast', img: 'tools/raycast.svg', desc: 'Launcher, clipboard history, and snippets — a hundred tiny seconds saved daily.' },
      { name: 'Spotify', icon: 'spotify', desc: 'Lo-fi, ambient, and synthwave to hold a flow state.' },
    ],
  },
]

// Gallery of real UI shots, resolved from the work assets.
const shotFiles = import.meta.glob('../assets/work/**/*.jpg', { eager: true, import: 'default' })
const sh = (p) => shotFiles[`../assets/work/${p}`]

export const shots = [
  { title: 'Legalyze — case dashboard', tag: 'Legal Tech', image: sh('legalyze/home.jpg'), span: 'wide' },
  { title: 'Recovery Companion', tag: 'Health App', image: sh('eating/screen-3.jpg'), span: 'tall' },
  { title: 'MyUsage — home', tag: 'Fintech', image: sh('myusage/after-1.jpg'), span: 'normal' },
  { title: 'Nerd News — interests', tag: 'Content', image: sh('nerdnews/screen-10.jpg'), span: 'normal' },
  { title: 'Spine UI — colour', tag: 'Design System', image: sh('spine/colors.jpg'), span: 'wide' },
  { title: 'Prime Care Kiosk', tag: 'Healthcare', image: sh('primecare/screen-2.jpg'), span: 'tall' },
  { title: 'Exceleron — landing', tag: 'Web', image: sh('exceleron/screen-1.jpg'), span: 'normal' },
  { title: 'Legalyze — templates', tag: 'Legal Tech', image: sh('legalyze/templates.jpg'), span: 'normal' },
  { title: 'MyUsage — usage', tag: 'Fintech', image: sh('myusage/after-3.jpg'), span: 'normal' },
  { title: 'Nerd News — reading', tag: 'Content', image: sh('nerdnews/screen-5.jpg'), span: 'normal' },
]
