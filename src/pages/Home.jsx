import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { contact } from '../data/site'

const words =
  'Seven years turning complex healthcare & SaaS products into experiences that feel effortless.'.split(
    ' ',
  )

export default function Home() {
  const reduce = useReducedMotion()

  return (
    <main>
      <Seo
        title="Product Designer"
        description="Sumit Wagh is a product designer with 7+ years turning complex healthcare and SaaS products into experiences that feel effortless."
        path="/"
      />

      {/* Hero — purely typographic, no portrait */}
      <section className="container-site pt-20 md:pt-28 lg:pt-32">
        <h1 className="w-full max-w-[18ch] text-[clamp(1.9rem,5vw,4.5rem)] leading-[1.08]">
          {words.map((w, i) => (
            <motion.span
              key={w + i}
              initial={reduce ? false : { opacity: 0, y: '0.5em' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.03 * i, ease: [0.22, 1, 0.36, 1] }}
              className="mr-[0.22em] inline-block"
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <Reveal delay={0.5} className="mt-10 flex flex-wrap items-center gap-4">
          <Link to="/work" className="btn-dark">
            Explore Work <ArrowRight size={16} weight="light" />
          </Link>
          <a href={`mailto:${contact.email}`} className="btn-outline">
            Let&rsquo;s Talk
          </a>
        </Reveal>
      </section>

      {/* Selected Works */}
      <section className="container-site pt-28 md:pt-36">
        <Reveal className="flex items-end justify-between">
          <h2 className="text-[clamp(1.75rem,3.4vw,2.5rem)]">Selected Work</h2>
          <Link
            to="/work"
            className="group inline-flex items-center gap-1.5 text-base text-ink/70 transition-colors hover:text-ink dark:text-white/60 dark:hover:text-white md:text-lg"
          >
            View all
            <ArrowRight size={17} weight="light" className="transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.slice(0, 4).map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={(i % 2) * 0.1} />
          ))}
        </div>
      </section>
    </main>
  )
}
