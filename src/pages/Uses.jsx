import { siWebflow, siNotion, siSpotify } from 'simple-icons'
import { uses } from '../data/content'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import workstation from '../assets/img/workstation.webp'

// Resolve device/tool assets from src/assets/uses/**
const assets = import.meta.glob('../assets/uses/**/*.{png,svg}', { eager: true, import: 'default' })
const asset = (p) => assets[`../assets/uses/${p}`]

// Remaining brand marks not supplied as image assets
const brand = { webflow: siWebflow, notion: siNotion, spotify: siSpotify }

function Chip({ children }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-line bg-white p-2 transition-transform duration-300 ease-smooth group-hover:-rotate-6 group-hover:scale-110 dark:border-white/10">
      {children}
    </span>
  )
}

function ToolIcon({ item }) {
  const src = item.logo || (item.img && asset(item.img))
  if (src) {
    return (
      <Chip>
        <img src={src} alt={`${item.name} logo`} className="max-h-full max-w-full object-contain" />
      </Chip>
    )
  }
  const si = brand[item.icon]
  if (si) {
    return (
      <Chip>
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill={`#${si.hex}`} aria-hidden="true">
          <path d={si.path} />
        </svg>
      </Chip>
    )
  }
  if (item.name === 'v0 by Vercel') {
    return (
      <Chip>
        <span className="text-[15px]">v0</span>
      </Chip>
    )
  }
  return null
}

export default function Uses() {
  return (
    <main className="container-site pt-16 md:pt-24">
      <Seo
        title="Uses"
        description="The AI stack, hardware, and software Sumit Wagh uses every day to design and ship products."
        path="/uses"
      />
      <Reveal>
        <h1 className="mt-3 text-[clamp(2.2rem,4.8vw,3.6rem)] leading-[1.08]">Uses</h1>
        <p className="mt-2 text-[20px] leading-[30px] text-ink/65 dark:text-white/65">
          The tools I reach for every day — from the AI copilots in my process to the hardware on my desk.
        </p>
      </Reveal>

      {/* The desk itself */}
      <Reveal delay={0.1}>
        <figure className="mt-14 md:mt-16">
          <div className="overflow-hidden rounded-3xl border border-line dark:border-white/10">
            <img
              src={workstation}
              alt="Sumit's desk — LG 4K monitor on an arm, MacBook, iPad with wireframes, mechanical keyboard, MX Master mouse, and Sony headphones"
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
          <figcaption className="mt-4 text-center font-mono text-[13px] text-ink/45 dark:text-white/40">
            Where all of it happens — Pune, India.
          </figcaption>
        </figure>
      </Reveal>

      <div className="mt-16">
        {uses.map((group, gi) => (
          <section
            key={group.category}
            className="grid gap-8 border-t border-line py-12 dark:border-white/10 md:grid-cols-[260px_1fr] md:gap-12 md:py-16"
          >
            <Reveal>
              <div className="md:sticky md:top-28">
                <div className="flex items-center gap-3">
                  <span className="text-sm tabular-nums text-ink/35 dark:text-white/30">
                    {String(gi + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-2xl">{group.category}</h2>
                </div>
                <p className="mt-3 max-w-[240px] text-[17px] leading-relaxed text-ink/55 dark:text-white/55">
                  {group.blurb}
                </p>
              </div>
            </Reveal>

            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {group.items.map((item, i) => (
                <Reveal key={item.name} delay={Math.min(i * 0.04, 0.24)}>
                  <div className="group flex gap-4 rounded-2xl border border-transparent p-4 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-line hover:bg-white hover:shadow-[0_12px_30px_-16px_rgba(0,0,0,0.25)] dark:hover:border-white/10 dark:hover:bg-white/[0.04]">
                    <ToolIcon item={item} />
                    <div className="transition-transform duration-300 ease-smooth group-hover:translate-x-0.5">
                      <h3 className="text-[20px]">{item.name}</h3>
                      <p className="mt-1 text-[16px] leading-[1.6] text-ink/70 dark:text-white/60">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
