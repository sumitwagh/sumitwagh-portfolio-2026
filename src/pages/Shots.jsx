import Reveal from '../components/Reveal'
import Seo from '../components/Seo'

// Dashboard / desktop UI screenshots for the marquee.
const wf = import.meta.glob('../assets/work/**/*.jpg', { eager: true, import: 'default' })
const pick = (p) => wf[`../assets/work/${p}`]

const rowA = [
  { src: pick('legalyze/home.jpg'), alt: 'Legalyze — case dashboard' },
  { src: pick('legalyze/templates.jpg'), alt: 'Legalyze — question templates' },
  { src: pick('exceleron/screen-1.jpg'), alt: 'Exceleron — landing' },
  { src: pick('spine/colors.jpg'), alt: 'Spine UI — colour system' },
  { src: pick('legalyze/addcase.jpg'), alt: 'Legalyze — add case' },
  { src: pick('exceleron/screen-3.jpg'), alt: 'Exceleron — section' },
  { src: pick('legalyze/subscription.jpg'), alt: 'Legalyze — billing' },
  { src: pick('spine/grid.jpg'), alt: 'Spine UI — grid' },
]

const rowB = [
  { src: pick('legalyze/feature.jpg'), alt: 'Legalyze — features' },
  { src: pick('exceleron/screen-2.jpg'), alt: 'Exceleron — customers' },
  { src: pick('spine/alerts.jpg'), alt: 'Spine UI — alerts & toasts' },
  { src: pick('legalyze/addtemplate.jpg'), alt: 'Legalyze — build template' },
  { src: pick('exceleron/screen-4.jpg'), alt: 'Exceleron — footer' },
  { src: pick('legalyze/hover.jpg'), alt: 'Legalyze — interaction' },
  { src: pick('spine/radius.jpg'), alt: 'Spine UI — radius' },
  { src: pick('exceleron/screen-5.jpg'), alt: 'Exceleron — hero' },
]

function Row({ items, reverse = false, duration = 60 }) {
  // Duplicate the set so the -50% translate loops seamlessly
  const doubled = [...items, ...items]
  return (
    <div className="marquee overflow-hidden">
      <div
        className={`marquee-track gap-5 md:gap-6 ${reverse ? 'is-reverse' : ''}`}
        style={{ '--dur': `${duration}s` }}
      >
        {doubled.map((item, i) => (
          <figure
            key={i}
            className="group relative h-40 shrink-0 overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/5 transition-transform duration-500 ease-smooth hover:z-10 hover:scale-[1.04] dark:ring-white/10 sm:h-48 md:h-56 lg:h-64"
            aria-hidden={i >= items.length}
          >
            <img
              src={item.src}
              alt={i < items.length ? item.alt : ''}
              loading="lazy"
              decoding="async"
              className="h-full w-auto max-w-none object-cover"
            />
          </figure>
        ))}
      </div>
    </div>
  )
}

export default function Shots() {
  return (
    <main className="pt-16 md:pt-24">
      <Seo
        title="Shots"
        description="A gallery of dashboard and UI design shots by Sumit Wagh — healthcare SaaS, fintech, and product interfaces."
        path="/shots"
      />
      <div className="container-site">
        <Reveal>
          <p className="eyebrow">Gallery</p>
          <h1 className="mt-3 text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.08]">Shots</h1>
          <p className="mt-6 max-w-2xl text-[20px] leading-[30px] text-ink/65 dark:text-white/65">
            A rolling look at dashboards, interfaces, and product details — much of it from healthcare and SaaS work.
          </p>
        </Reveal>
      </div>

      {/* Two infinite rows, opposite directions, pause on hover */}
      <div className="mt-14 flex flex-col gap-5 md:mt-20 md:gap-6">
        <Reveal>
          <Row items={rowA} duration={64} />
        </Reveal>
        <Reveal delay={0.1}>
          <Row items={rowB} reverse duration={72} />
        </Reveal>
      </div>

      <div className="container-site">
        <p className="mt-14 text-center text-sm text-ink/45 dark:text-white/40">
          More shots on{' '}
          <a href="https://dribbble.com/sumitwagh" target="_blank" rel="noreferrer" className="link-underline text-ink/70 dark:text-white/70">
            Dribbble
          </a>
          .
        </p>
      </div>
    </main>
  )
}
