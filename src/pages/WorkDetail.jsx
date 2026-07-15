import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, ArrowRight } from '@phosphor-icons/react'
import { getProject, getAdjacent, projects } from '../data/projects'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import BrandThumb from '../components/BrandThumb'
import { scrollToTarget } from '../lib/scroll'

// Responsive body copy: 20px/30px desktop, scaled down for tablet/mobile
const prose = 'text-[16px] leading-[24px] sm:text-[18px] sm:leading-[27px] lg:text-[20px] lg:leading-[30px]'

function Paras({ items, tone = 'text-ink/85 dark:text-white/80' }) {
  const list = Array.isArray(items) ? items : [items]
  return (
    <div className={`space-y-5 ${prose} ${tone}`}>
      {list.map((p) => (
        <p key={p.slice(0, 32)}>{p}</p>
      ))}
    </div>
  )
}

function Points({ items }) {
  return (
    <ul className="mt-8 space-y-4">
      {items.map((pt) => (
        <li key={pt.slice(0, 30)} className="flex gap-4">
          <span className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink/40 dark:bg-white/40" aria-hidden="true" />
          <span className={`${prose} text-ink/85 dark:text-white/80`}>{pt}</span>
        </li>
      ))}
    </ul>
  )
}

function Gallery({ layout, items }) {
  if (layout === 'phone') {
    return (
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
        {items.map((g, i) => (
          <Reveal key={i} delay={(i % 3) * 0.05}>
            <img src={g.img} alt={g.caption || 'App screen'} loading="lazy" className="w-full rounded-[1.75rem] border border-black/5 shadow-sm dark:border-white/10" />
          </Reveal>
        ))}
      </div>
    )
  }
  if (layout === 'tablet') {
    return (
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((g, i) => (
          <Reveal key={i} delay={(i % 2) * 0.06}>
            <img src={g.img} alt={g.caption || 'Kiosk screen'} loading="lazy" className="w-full rounded-2xl border border-black/5 shadow-sm dark:border-white/10" />
            {g.caption && <p className="mt-3 text-[15px] text-ink/55 dark:text-white/55">{g.caption}</p>}
          </Reveal>
        ))}
      </div>
    )
  }
  return (
    <div className="mt-10 space-y-12">
      {items.map((g, i) => (
        <Reveal key={i}>
          <figure>
            <img src={g.img} alt={g.caption || 'Screen'} loading="lazy" className="w-full rounded-2xl border border-black/5 dark:border-white/10" />
            {g.caption && <figcaption className="mt-4 text-[15px] text-ink/55 dark:text-white/55 md:text-center">{g.caption}</figcaption>}
          </figure>
        </Reveal>
      ))}
    </div>
  )
}

function BeforeAfter({ items }) {
  return (
    <div className="mt-6 space-y-12">
      {items.map((pair, i) => (
        <Reveal key={i}>
          {pair.label && <p className="mb-4 text-[15px] text-ink/60 dark:text-white/60">{pair.label}</p>}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <figure>
              <img src={pair.before} alt="Before redesign" loading="lazy" className="w-full rounded-[1.5rem] border border-black/5 opacity-90 grayscale dark:border-white/10" />
              <figcaption className="mt-3 text-center text-[13px] uppercase text-ink/40 dark:text-white/40">Before</figcaption>
            </figure>
            <figure>
              <img src={pair.after} alt="After redesign" loading="lazy" className="w-full rounded-[1.5rem] border border-black/5 shadow-sm dark:border-white/10" />
              <figcaption className="mt-3 text-center text-[13px] uppercase text-ink/60 dark:text-white/60">After</figcaption>
            </figure>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

function SectionHead({ label }) {
  return <h2 className="mb-7 text-[26px] leading-tight md:text-[30px]">{label}</h2>
}

export default function WorkDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  const [active, setActive] = useState('')
  const sectionRefs = useRef({})

  // Build the ordered list of sections that this project actually has
  const sections = useMemo(() => {
    if (!project) return []
    const s = [
      { id: 'overview', label: 'Overview', has: true },
      { id: 'problem', label: 'Problem', has: !!project.problem?.length },
      { id: 'goal', label: 'Goal', has: !!project.goal },
      { id: 'research', label: 'Research', has: !!project.research?.length },
      { id: 'process', label: 'Process', has: !!project.process?.points?.length },
      { id: 'before-after', label: 'Before / After', has: !!project.beforeAfter?.length },
      { id: 'features', label: 'Key Features', has: !!project.features?.length },
      { id: 'visual', label: 'Visual Design', has: !!project.gallery?.length },
      { id: 'outcome', label: 'Outcome', has: !!project.outcome?.length },
      { id: 'reflection', label: 'Reflection', has: !!project.reflection },
    ]
    return s.filter((x) => x.has)
  }, [project])

  useEffect(() => {
    setActive(sections[0]?.id || '')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => {
      const el = sectionRefs.current[s.id]
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [sections])

  if (!project) return <Navigate to="/work" replace />

  const { next } = getAdjacent(slug)
  const others = projects.filter((p) => p.slug !== slug).slice(0, 3)
  const setRef = (id) => (el) => { sectionRefs.current[id] = el }

  const scrollTo = (id) => {
    const el = sectionRefs.current[id]
    if (el) scrollToTarget(el, { offset: -110 })
  }

  return (
    <main className="pt-14 md:pt-20">
      <Seo title={project.title} description={project.overview.slice(0, 155)} path={`/work/${project.slug}`} image={project.cover} />

      {/* Back link */}
      <div className="container-site">
        <Link to="/work" className="inline-flex items-center gap-2 text-[15px] text-ink/60 transition-colors hover:text-ink dark:text-white/60 dark:hover:text-white">
          <ArrowLeft size={16} weight="light" /> All work
        </Link>
      </div>

      {/* Featured image — top of the page */}
      <Reveal className="container-site mt-8">
        <img src={project.cover} alt={project.title} fetchPriority="high" className="aspect-[16/10] w-full rounded-3xl object-cover md:aspect-[16/9]" />
      </Reveal>

      {/* Title + meta */}
      <header className="container-site mt-12 md:mt-14">
        <Reveal>
          <h1 className="max-w-4xl text-[clamp(2.4rem,5vw,4rem)] leading-[1.05]">{project.title}</h1>
          <p className="mt-5 max-w-2xl text-xl text-ink/60 dark:text-white/60">{project.subtitle}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-10 flex flex-wrap gap-x-14 gap-y-7 border-t border-line pt-8 dark:border-white/10">
            {project.meta
              .filter((m) => m.label.toLowerCase() !== 'year')
              .map((m) => (
                <div key={m.label}>
                  <dt className="text-[13px] uppercase text-ink/45 dark:text-white/40">{m.label}</dt>
                  <dd className="mt-2 text-[16px] text-ink dark:text-white">{m.value}</dd>
                </div>
              ))}
          </dl>
        </Reveal>
      </header>

      {/* Two-column: left sticky scrollspy nav + right content */}
      <div className="container-site mt-14 md:mt-20">
        <div className="grid gap-8 lg:grid-cols-[180px_1fr] lg:gap-10">
          {/* Left sticky nav (desktop) */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28" aria-label="Case study sections">
              <ul className="space-y-1 border-l border-line dark:border-white/10">
                {sections.map((s) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => scrollTo(s.id)}
                      className={`-ml-px block border-l-2 py-1.5 pl-4 text-left text-[18px] transition-colors duration-300 ${
                        active === s.id
                          ? 'border-ink text-ink dark:border-white dark:text-white'
                          : 'border-transparent text-ink/45 hover:text-ink/70 dark:text-white/40 dark:hover:text-white/70'
                      }`}
                    >
                      {s.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Right content */}
          <div className="max-w-[46rem]">
            <section id="overview" ref={setRef('overview')} className="scroll-mt-28">
              <SectionHead label="Overview" />
              <p className={`${prose} text-ink dark:text-white`}>{project.overview}</p>
              {project.team?.length > 0 && (
                <div className="mt-8">
                  <p className="eyebrow !text-[13px]">Team</p>
                  <p className="mt-2 text-[17px] text-ink/75 dark:text-white/70">{project.team.join(' · ')}</p>
                </div>
              )}
            </section>

            {project.problem?.length > 0 && (
              <section id="problem" ref={setRef('problem')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead label="Problem" />
                <Paras items={project.problem} />
              </section>
            )}

            {project.goal && (
              <section id="goal" ref={setRef('goal')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead label="Goal" />
                <Paras items={project.goal} />
              </section>
            )}

            {project.research?.length > 0 && (
              <section id="research" ref={setRef('research')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead label="Research" />
                <Points items={project.research} />
              </section>
            )}

            {project.process?.points?.length > 0 && (
              <section id="process" ref={setRef('process')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead label="Design Process" />
                <Paras items={project.process.intro} />
                <Points items={project.process.points} />
              </section>
            )}

            {project.beforeAfter?.length > 0 && (
              <section id="before-after" ref={setRef('before-after')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead label="Before / After" />
                <BeforeAfter items={project.beforeAfter} />
              </section>
            )}

            {project.features?.length > 0 && (
              <section id="features" ref={setRef('features')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead label="Key Features" />
                <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                  {project.features.map((ft, i) => (
                    <Reveal key={ft.title} delay={(i % 2) * 0.06}>
                      <h3 className="text-lg">{ft.title}</h3>
                      <p className="mt-1.5 text-[16px] leading-[1.6] text-ink/60 dark:text-white/60">{ft.desc}</p>
                    </Reveal>
                  ))}
                </div>
              </section>
            )}

            {project.gallery?.length > 0 && (
              <section id="visual" ref={setRef('visual')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead label="Visual Design" />
                {project.visual && <Paras items={project.visual} />}
                <Gallery layout={project.layout} items={project.gallery} />
              </section>
            )}

            {project.outcome?.length > 0 && (
              <section id="outcome" ref={setRef('outcome')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead label="Outcome" />
                <ul className="space-y-6">
                  {project.outcome.map((line, i) => (
                    <Reveal as="li" key={line.slice(0, 30)} delay={i * 0.06} className="flex items-baseline gap-5">
                      <span className="text-sm tabular-nums text-ink/40 dark:text-white/35">{String(i + 1).padStart(2, '0')}</span>
                      <span className={`${prose} text-ink dark:text-white`}>{line}</span>
                    </Reveal>
                  ))}
                </ul>
              </section>
            )}

            {project.reflection && (
              <section id="reflection" ref={setRef('reflection')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead label="Reflection" />
                <Paras items={project.reflection} />
              </section>
            )}

            {/* Prototype button — placed below Reflection */}
            {project.prototype && (
              <div className="mt-12">
                <a href={project.prototype} target="_blank" rel="noreferrer" className="btn-dark">
                  View Prototype <ArrowUpRight size={16} weight="light" />
                </a>
              </div>
            )}

            {/* Caring resource note for the sensitive project */}
            {project.sensitive && (
              <p className="mt-12 border-t border-line pt-8 text-[14px] leading-relaxed text-ink/55 dark:border-white/10 dark:text-white/55">
                This case study covers a sensitive topic. If you or someone you know is struggling with an eating
                disorder, support is available — the{' '}
                <a href="https://www.allianceforeatingdisorders.com/find-help/" target="_blank" rel="noreferrer" className="link-underline text-ink/75 dark:text-white/75">
                  National Alliance for Eating Disorders
                </a>{' '}
                offers a helpline and resources.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Next project CTA */}
      {next && (
        <Link to={`/work/${next.slug}`} className="group mt-16 block border-t border-line py-14 dark:border-white/10 md:mt-24 md:py-20">
          <div className="container-site flex items-center justify-between gap-6">
            <div>
              <p className="eyebrow">Next project</p>
              <p className="mt-3 text-[clamp(1.5rem,3.4vw,2.5rem)] transition-colors group-hover:text-ink/60 dark:group-hover:text-white/70">{next.title}</p>
            </div>
            <ArrowRight size={40} weight="light" className="shrink-0 transition-transform duration-300 ease-smooth group-hover:translate-x-2" />
          </div>
        </Link>
      )}

      {/* More work */}
      <section className="container-site mt-20 md:mt-24">
        <h2 className="text-[clamp(1.5rem,3vw,2rem)]">More work</h2>
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p) => (
            <Link key={p.slug} to={`/work/${p.slug}`} className="group block">
              <div className="overflow-hidden rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-500 ease-smooth group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_-18px_rgba(0,0,0,0.35)]">
                <div className="aspect-[16/10] w-full transition-transform duration-700 ease-smooth group-hover:scale-[1.04]">
                  <BrandThumb brand={p.brand} />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-lg transition-colors group-hover:text-ink/60 dark:group-hover:text-white/70">{p.title}</h3>
                <ArrowUpRight size={18} weight="light" className="text-ink/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-white/40" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
