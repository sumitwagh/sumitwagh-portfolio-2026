import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { journey } from '../data/content'
import Reveal from './Reveal'

/**
 * Experience — a quiet, typographic list.
 * No timeline, no toggle: hovering a role brings it forward and eases the rest
 * back, revealing what actually happened there.
 */
export default function Experience() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(null)

  return (
    <section className="container-site pt-28 md:pt-36">
      <Reveal>
        <p className="text-[16px] uppercase text-ink/70 dark:text-white/40" style={{ letterSpacing: '0.10em' }}>
          Experience
        </p>
        <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.05]">
          Seven years, three chapters.
        </h2>
      </Reveal>

      <ul className="mt-14 border-t border-line dark:border-white/10 md:mt-20" onMouseLeave={() => setActive(null)}>
        {journey.map((j, i) => {
          const dimmed = active !== null && active !== i
          return (
            <Reveal as="li" key={j.company} delay={i * 0.07}>
              <a
                href={j.href}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group block border-b border-line py-9 transition-opacity duration-500 ease-smooth dark:border-white/10 md:py-12"
                style={{ opacity: dimmed ? 0.35 : 1 }}
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:gap-10">
                  <div className="flex items-baseline gap-4 md:gap-6">
                    {/* <span className="text-[13px] tabular-nums text-ink/30 dark:text-white/25">0{i + 1}</span> */}
                    <div>
                      <h3 className="text-[clamp(1.5rem,3.4vw,2.25rem)] leading-tight">{j.role}</h3>
                      <p className="mt-2 text-[20px] text-ink/70 dark:text-white/45">
                        {j.company}
                        <span className="mx-2 text-ink/25 dark:text-white/20">·</span>
                        {j.location}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 pl-10 text-[18px] tabular-nums text-ink/70 dark:text-white/35 md:pl-0">
                    {j.dateShort}
                  </span>
                </div>

                {/* Detail — revealed on hover / focus */}
                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.div
                      key="detail"
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-4 pt-7">
                        <p className="max-w-2xl text-[18px] leading-relaxed text-ink/65 dark:text-white/60">{j.summary}</p>
                        {j.tags?.length > 0 && (
                          <ul className="flex flex-wrap gap-2">
                            {j.tags.map((t) => (
                              <li
                                key={t}
                                className="rounded-full border border-line px-4 py-2 text-[14px] text-ink/70 dark:border-white/12 dark:text-white/45"
                              >
                                {t}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </a>
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}
