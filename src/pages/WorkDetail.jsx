import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, ArrowRight, X, MagnifyingGlassPlus } from '@phosphor-icons/react'
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

// A tap/click-to-zoom image. On mobile especially, dense product screenshots
// are unreadable at grid size — this opens them full-screen in a lightbox.
function ZoomImage({ src, alt, className, onZoom }) {
  return (
    <button
      type="button"
      onClick={() => onZoom({ src, alt })}
      aria-label={`View ${alt} full screen`}
      className="group/zoom relative block w-full cursor-zoom-in overflow-hidden rounded-2xl"
    >
      <img src={src} alt={alt} loading="lazy" className={className} />
      <span className="pointer-events-none absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/zoom:opacity-100 md:opacity-0">
        <MagnifyingGlassPlus size={16} weight="bold" />
      </span>
    </button>
  )
}

function Gallery({ layout, items, onZoom }) {
  if (layout === 'phone') {
    return (
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
        {items.map((g, i) => (
          <Reveal key={i} delay={(i % 3) * 0.05}>
            <ZoomImage src={g.img} alt={g.caption || 'App screen'} onZoom={onZoom} className="w-full rounded-[1.75rem] border border-black/5 shadow-sm dark:border-white/10" />
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
            <ZoomImage src={g.img} alt={g.caption || 'Kiosk screen'} onZoom={onZoom} className="w-full rounded-2xl border border-black/5 shadow-sm dark:border-white/10" />
            {g.caption && <p className="mt-3 text-[13px] text-ink/55 dark:text-white/50">{g.caption}</p>}
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
            <ZoomImage src={g.img} alt={g.caption || 'Screen'} onZoom={onZoom} className="w-full rounded-2xl border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:border-white/10" />
            {g.caption && <figcaption className="mt-4 text-center text-[13px] text-ink/55 dark:text-white/50">{g.caption}</figcaption>}
          </figure>
        </Reveal>
      ))}
    </div>
  )
}

// Full-screen image viewer. Closes on backdrop click, close button, or Escape.
function Lightbox({ item, onClose }) {
  const reduce = useReducedMotion()
  useEffect(() => {
    if (!item) return undefined
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [item, onClose])

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-10"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6 md:top-6"
          >
            <X size={20} weight="bold" />
          </button>
          <motion.img
            src={item.src}
            alt={item.alt}
            initial={reduce ? false : { scale: 0.96 }}
            animate={{ scale: 1 }}
            exit={reduce ? undefined : { scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Headline results band. Values may be placeholders (e.g. "XX%") until real
// figures are measured — the layout reads as an intentional template.
function Impact({ items, note }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line dark:border-white/10 dark:bg-white/10 sm:grid-cols-3">
        {items.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="bg-white p-6 dark:bg-[#0b0b0c] md:p-8">
            <div className="text-[clamp(2rem,4vw,2.9rem)] leading-none tracking-tight text-ink dark:text-white">{s.value}</div>
            <div className="mt-3 text-[14px] leading-snug text-ink/60 dark:text-white/55">{s.label}</div>
          </Reveal>
        ))}
      </div>
      {note && <p className="mt-4 text-[13px] text-ink/45 dark:text-white/40">{note}</p>}
    </>
  )
}

// Process artifacts — wireframes, flows, iterations. If an image is supplied it
// renders; otherwise a labelled placeholder frame marks the slot to drop art in.
function ProcessArtifacts({ items, onZoom }) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((a, i) => (
        <Reveal key={a.label} delay={(i % 3) * 0.06}>
          <figure>
            {a.img ? (
              <ZoomImage src={a.img} alt={a.label} onZoom={onZoom} className="aspect-[4/3] w-full rounded-xl border border-black/5 object-cover shadow-sm dark:border-white/10" />
            ) : (
              <div className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-xl border border-dashed border-ink/20 bg-ink/[0.02] p-5 text-center dark:border-white/20 dark:bg-white/[0.02]">
                <span className="text-[11px] uppercase tracking-[0.14em] text-ink/40 dark:text-white/35">{a.kind || 'Artifact'}</span>
                <span className="mt-2 text-[15px] text-ink/70 dark:text-white/70">{a.label}</span>
                <span className="mt-3 text-[12px] text-ink/35 dark:text-white/30">Image coming soon</span>
              </div>
            )}
            <figcaption className="mt-3 text-[13px] leading-snug text-ink/55 dark:text-white/50">{a.caption}</figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  )
}

// A short qualitative pull-quote — feedback from a teammate, stakeholder, or user.
function Testimonial({ quote, attribution }) {
  return (
    <Reveal>
      <figure className="mt-12 max-w-4xl border-l-2 border-ink/25 pl-6 dark:border-white/25">
        <blockquote className="text-[clamp(1.15rem,2.4vw,1.6rem)] leading-snug text-ink dark:text-white">
          “{quote}”
        </blockquote>
        {attribution && <figcaption className="mt-4 text-[14px] text-ink/55 dark:text-white/50">— {attribution}</figcaption>}
      </figure>
    </Reveal>
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
  const [zoom, setZoom] = useState(null)
  const sectionRefs = useRef({})

  // Build the ordered list of sections that this project actually has
  const sections = useMemo(() => {
    if (!project) return []
    const s = [
      { id: 'overview', label: 'Overview', has: true },
      { id: 'impact', label: 'Impact', has: !!project.impact?.length },
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

  // Section number for the heading, kept in sync with the sidebar index.
  const numFor = (id) => {
    const i = sections.findIndex((s) => s.id === id)
    return i >= 0 ? i + 1 : null
  }

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
    <main className="pt-14 pb-28 md:pt-20 md:pb-16">
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
                <dt className="text-[14px] uppercase text-ink/75 dark:text-white/60" style={{ letterSpacing: '0.12em' }}>
                  {m.label}
                </dt>
                <dd className="mt-2 text-[18px] text-ink dark:text-white">{m.value}</dd>
              </div>
            ))}
            {(project.links?.[0] || project.prototype) && (
              <div>
                <dt className="text-[14px] uppercase text-ink/75 dark:text-white/60" style={{ letterSpacing: '0.12em' }}>
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
              <SectionHead index={numFor('overview')} label="Overview" />
              <p className={`${prose} max-w-4xl text-ink dark:text-white`}>{project.overview}</p>
              {(project.team?.length > 0 || project.myRole) && (
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {project.myRole && (
                    <div>
                      <p className="eyebrow !text-[13px]">My role</p>
                      <p className="mt-2 text-[17px] text-ink/75 dark:text-white/70">{project.myRole}</p>
                    </div>
                  )}
                  {project.team?.length > 0 && (
                    <div>
                      <p className="eyebrow !text-[13px]">Team</p>
                      <p className="mt-2 text-[17px] text-ink/75 dark:text-white/70">{project.team.join(' · ')}</p>
                    </div>
                  )}
                </div>
              )}
            </section>

            {project.impact?.length > 0 && (
              <section id="impact" ref={setRef('impact')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead index={numFor('impact')} label="Impact" />
                <Impact items={project.impact} note={project.impactNote} />
              </section>
            )}

            {project.problem?.length > 0 && (
              <section id="problem" ref={setRef('problem')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead index={numFor('problem')} label="Problem" />
                <Paras items={project.problem} />
              </section>
            )}

            {project.goal && (
              <section id="goal" ref={setRef('goal')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead index={numFor('goal')} label="Goal" />
                <Paras items={project.goal} />
              </section>
            )}

            {project.research?.length > 0 && (
              <section id="research" ref={setRef('research')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead index={numFor('research')} label="Research" />
                <Points items={project.research} />
              </section>
            )}

            {project.process?.points?.length > 0 && (
              <section id="process" ref={setRef('process')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead index={numFor('process')} label="Design Process" />
                <Paras items={project.process.intro} />
                <Points items={project.process.points} />
                {project.process.artifacts?.length > 0 && (
                  <ProcessArtifacts items={project.process.artifacts} onZoom={setZoom} />
                )}
              </section>
            )}

            {project.beforeAfter?.length > 0 && (
              <section id="before-after" ref={setRef('before-after')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead index={numFor('before-after')} label="Before / After" />
                <BeforeAfter items={project.beforeAfter} />
              </section>
            )}

            {project.features?.length > 0 && (
              <section id="features" ref={setRef('features')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead index={numFor('features')} label="Key Features" />
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
                <SectionHead index={numFor('visual')} label="Visual Design" />
                {project.visual && <Paras items={project.visual} />}
                <Gallery layout={project.layout} items={project.gallery} onZoom={setZoom} />
              </section>
            )}

            {project.outcome?.length > 0 && (
              <section id="outcome" ref={setRef('outcome')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead index={numFor('outcome')} label="Outcome" />
                <ul className="max-w-4xl space-y-6">
                  {project.outcome.map((line, i) => (
                    <Reveal as="li" key={line.slice(0, 30)} delay={i * 0.06} className="flex items-baseline gap-5">
                      <span className="text-sm tabular-nums text-ink/50 dark:text-white/45">{String(i + 1).padStart(2, '0')}</span>
                      <span className={`${prose} text-ink dark:text-white`}>{line}</span>
                    </Reveal>
                  ))}
                </ul>
                {project.testimonial && (
                  <Testimonial quote={project.testimonial.quote} attribution={project.testimonial.attribution} />
                )}
              </section>
            )}

            {project.reflection && (
              <section id="reflection" ref={setRef('reflection')} className="mt-16 scroll-mt-28 md:mt-24">
                <SectionHead index={numFor('reflection')} label="Reflection" />
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
      <Lightbox item={zoom} onClose={() => setZoom(null)} />
    </main>
  )
}
