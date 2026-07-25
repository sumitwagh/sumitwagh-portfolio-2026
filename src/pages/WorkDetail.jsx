import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, ArrowRight } from '@phosphor-icons/react'
import { getProject, getAdjacent, projects } from '../data/projects'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { scrollToTarget } from '../lib/scroll'
import { playTick, playSelect } from '../lib/sound'
import ViewingBar from '../components/ViewingBar'

// Responsive body copy: 20px/30px desktop, scaled down for tablet/mobile
const prose = 'text-[16px] leading-[24px] sm:text-[18px] sm:leading-[27px] lg:text-[20px] lg:leading-[30px]'

function Paras({ items, tone = 'text-ink/85 dark:text-white/80' }) {
  const list = Array.isArray(items) ? items : [items]
  return (
    <div className={`max-w-4xl space-y-5 ${prose} ${tone}`}>
      {list.map((p) => (
        <p key={p.slice(0, 32)}>{p}</p>
      ))}
    </div>
  )
}

function Points({ items }) {
  return (
    <ul className="mt-8 max-w-4xl space-y-4">
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
            {g.caption && <p className="mt-3 text-[13px] text-ink/45 dark:text-white/40">{g.caption}</p>}
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
            <img src={g.img} alt={g.caption || 'Screen'} loading="lazy" className="w-full rounded-2xl border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:border-white/10" />
            {g.caption && <figcaption className="mt-4 text-center text-[13px] text-ink/45 dark:text-white/40">{g.caption}</figcaption>}
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

          {/* A single composed comparison, or a side-by-side pair */}
          {pair.combined ? (
            <figure>
              <img
                src={pair.combined}
                alt="Before and after the redesign"
                loading="lazy"
                className="w-full rounded-2xl border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:border-white/10"
              />
            </figure>
          ) : (
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
          )}
        </Reveal>
      ))}
    </div>
  )
}

function SectionHead({ label, index }) {
  return (
    <div className="mb-8 flex items-baseline gap-4 border-t border-line pt-6 dark:border-white/10">
      {index != null && (
        <span className="text-[12px] tabular-nums text-ink/30 dark:text-white/25">
          {String(index).padStart(2, '0')}
        </span>
      )}
      <h2 className="text-[26px] leading-tight md:text-[30px]">{label}</h2>
    </div>
  )
}

export default function WorkDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  const [hovered, setHovered] = useState(null)
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

      {/* Return */}
      <div className="container-site flex justify-center">
        <Link
          to="/work"
          onMouseEnter={() => playTick()}
          onClick={() => playSelect()}
          className="group inline-flex items-center gap-2 text-[12px] uppercase text-ink/50 transition-colors duration-300 hover:text-ink dark:text-white/45 dark:hover:text-white"
          style={{ letterSpacing: '0.12em' }}
        >
          <ArrowLeft size={14} weight="bold" className="transition-transform duration-300 ease-smooth group-hover:-translate-x-1" />
          Return
        </Link>
      </div>

      {/* Title + meta — story first, image after (ktz-style opening) */}
      <header className="container-site mt-10 text-center md:mt-14">
        <Reveal>
          <h1 className="mx-auto max-w-[18ch] text-[clamp(2.2rem,5.4vw,4.25rem)] leading-[1.02]">{project.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-[19px] leading-relaxed text-ink/55 dark:text-white/50 md:text-[21px]">
            {project.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-y border-line py-10 text-center dark:border-white/10 md:grid-cols-4">
            {project.meta.map((m) => (
              <div key={m.label}>
                <dt className="text-[14px] uppercase text-ink/60 dark:text-white/35" style={{ letterSpacing: '0.12em' }}>
                  {m.label}
                </dt>
                <dd className="mt-2 text-[18px] text-ink dark:text-white">{m.value}</dd>
              </div>
            ))}
            {(project.links?.[0] || project.prototype) && (
              <div>
                <dt className="text-[14px] uppercase text-ink/60 dark:text-white/35" style={{ letterSpacing: '0.12em' }}>
                  {project.prototype ? 'Prototype' : 'Live'}
                </dt>
                <dd className="mt-2 text-[18px]">
                  <a
                    href={project.prototype ?? project.links?.[0]?.href}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => playTick()}
                    className="group inline-flex items-center gap-1 text-ink underline-offset-4 hover:underline dark:text-white"
                  >
                    {project.prototype ? 'View prototype' : 'Visit site'}
                    <ArrowUpRight size={14} weight="light" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </Reveal>
      </header>

      {/* Featured image */}
      <Reveal className="container-site mt-14 md:mt-20">
        <img src={project.cover} alt={project.title} fetchPriority="high" className="aspect-[16/10] w-full rounded-3xl object-cover md:aspect-[16/9]" />
      </Reveal>

      {/* Two-column: left sticky scrollspy nav + right content */}
      <div className="container-site mt-14 md:mt-20">
        <div className="grid gap-8 lg:grid-cols-[180px_1fr] lg:gap-10">
          {/* Left sticky nav (desktop) — numbered index, sibling rows ease back */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28" aria-label="Case study sections" onMouseLeave={() => setHovered(null)}>
              <p className="mb-5 text-[11px] uppercase text-ink/30 dark:text-white/25" style={{ letterSpacing: '0.14em' }}>
                Index
              </p>
              <ul>
                {sections.map((s, i) => {
                  const isActive = active === s.id
                  const dimmed = hovered !== null && hovered !== i
                  return (
                    <li key={s.id}>
                      <button
                        type="button"
                        onClick={() => {
                          playSelect()
                          scrollTo(s.id)
                        }}
                        onMouseEnter={() => {
                          setHovered(i)
                          playTick()
                        }}
                        className={`group flex w-full items-baseline gap-3 py-2 text-left transition-all duration-500 ease-smooth ${
                          isActive ? 'text-ink dark:text-white' : 'text-ink/40 dark:text-white/35'
                        }`}
                        style={{ opacity: dimmed ? 0.4 : 1 }}
                      >
                        <span className="text-[11px] tabular-nums text-ink/25 dark:text-white/20">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="relative text-[17px] leading-snug">
                          {s.label}
                          <span
                            className={`absolute -bottom-0.5 left-0 h-px bg-current transition-all duration-500 ease-smooth ${
                              isActive ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}
                          />
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </aside>

          {/* Right content — full available width */}
          <div className="min-w-0">
            <section id="overview" ref={setRef('overview')} className="scroll-mt-28">
              <SectionHead index={1} label="Overview" />
              <p className={`${prose} max-w-4xl text-ink dark:text-white`}>{project.overview}</p>
              {project.team?.length > 0 && (
                <div className="mt-8">
                  <p className="eyebrow !text-[13px]">Team</p>
                  <p className="mt-2 text-[17px] text-ink/75 dark:text-white/70">{project.team.join(' · ')}</p>
                </div>
              )}
            </section>

            {project.problem?.length > 0 && (
              <section id="problem" ref={setRef('problem')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead index={2} label="Problem" />
                <Paras items={project.problem} />
              </section>
            )}

            {project.goal && (
              <section id="goal" ref={setRef('goal')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead index={3} label="Goal" />
                <Paras items={project.goal} />
              </section>
            )}

            {project.research?.length > 0 && (
              <section id="research" ref={setRef('research')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead index={4} label="Research" />
                <Points items={project.research} />
              </section>
            )}

            {project.process?.points?.length > 0 && (
              <section id="process" ref={setRef('process')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead index={5} label="Design Process" />
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
                <SectionHead index={6} label="Key Features" />
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
                <SectionHead index={7} label="Visual Design" />
                {project.visual && <Paras items={project.visual} />}
                <Gallery layout={project.layout} items={project.gallery} />
              </section>
            )}

            {project.outcome?.length > 0 && (
              <section id="outcome" ref={setRef('outcome')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead index={8} label="Outcome" />
                <ul className="max-w-4xl space-y-6">
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
                <SectionHead index={9} label="Reflection" />
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
              <div className="overflow-hidden rounded-2xl transition-transform duration-500 ease-smooth group-hover:-translate-y-1.5">
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#f4f4f4] dark:bg-white/5">
                  <img src={p.thumb} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.04]" />
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
      <ViewingBar title={project.title} />
    </main>
  )
}
