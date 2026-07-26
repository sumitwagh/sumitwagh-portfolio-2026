import Reveal from '../components/Reveal'
import Seo from '../components/Seo'

// Every shot is pre-normalised to a uniform frame, so the rows stay even.
const files = import.meta.glob('../assets/shots/*.webp', { eager: true, import: 'default' })
const shots = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)

// Split as evenly as possible across three rows.
const per = Math.ceil(shots.length / 3)
const rows = [shots.slice(0, per), shots.slice(per, per * 2), shots.slice(per * 2)]

function Row({ items, reverse = false, duration = 100 }) {
  // Duplicate the set so the -50% translate loops seamlessly
  const doubled = [...items, ...items]
  return (
    <div className="marquee-plain overflow-hidden">
      <div
        className={`marquee-track gap-4 md:gap-5 ${reverse ? 'is-reverse' : ''}`}
        style={{ '--dur': `${duration}s` }}
      >
        {doubled.map((src, i) => (
          <figure
            key={i}
            aria-hidden={i >= items.length}
            className="group relative aspect-[1920/1024] h-36 shrink-0 overflow-hidden rounded-lg border border-line shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-transform duration-500 ease-smooth hover:z-10 hover:scale-[1.03] dark:border-white/10 sm:h-44 md:h-52 lg:h-56"
          >
            <img
              src={src}
              alt={i < items.length ? 'Interface design shot' : ''}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
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
        description="A gallery of healthcare dashboard and product interface design by Sumit Wagh."
        path="/shots"
      />
      <div className="container-site">
        <Reveal>
          <h1 className="mt-3 text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.08]">Shots</h1>
          <p className="mt-2 text-[20px] leading-[30px] text-ink/65 dark:text-white/65">
            A rolling look at dashboards, interfaces, and product details — much of it from healthcare and SaaS
            work.
          </p>
        </Reveal>
      </div>

      {/* Three infinite rows, alternating direction, pause on hover */}
      <div className="mt-14 flex flex-col gap-4 md:mt-20 md:gap-5">
        <Reveal>
          <Row items={rows[0]} duration={104} />
        </Reveal>
        <Reveal delay={0.08}>
          <Row items={rows[1]} reverse duration={116} />
        </Reveal>
        <Reveal delay={0.16}>
          <Row items={rows[2]} duration={98} />
        </Reveal>
      </div>

      <div className="container-site">
        <p className="mt-14 text-center text-sm text-ink/45 dark:text-white/40">
          More shots on{' '}
          <a
            href="https://dribbble.com/sumitwagh"
            target="_blank"
            rel="noreferrer"
            className="link-underline text-ink/70 dark:text-white/70"
          >
            Dribbble
          </a>
          .
        </p>
      </div>
    </main>
  )
}
