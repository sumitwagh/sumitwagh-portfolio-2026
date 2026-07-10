import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from '@phosphor-icons/react'
import { shots } from '../data/content'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'

const spanClass = {
  wide: 'sm:col-span-2',
  tall: 'row-span-2',
  normal: '',
}

export default function Shots() {
  const [active, setActive] = useState(null)

  return (
    <main className="container-site pt-16 md:pt-24">
      <Seo
        title="Shots"
        description="A gallery of UI design shots and visual explorations by Sumit Wagh — interfaces, brand systems, and product details."
        path="/shots"
      />
      <Reveal>
        <p className="text-[15px] uppercase text-ink/50 dark:text-white/50">Gallery</p>
        <h1 className="mt-3 text-[clamp(2.4rem,5vw,3.75rem)]">Shots</h1>
        <p className="mt-5 max-w-xl text-lg text-ink/60 dark:text-white/60">
          Interface explorations, brand details, and the small moments that make a product feel right.
        </p>
      </Reveal>

      <div className="mt-12 grid auto-rows-[minmax(200px,auto)] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
        {shots.map((s, i) => (
          <Reveal
            key={s.title + i}
            delay={(i % 3) * 0.06}
            className={`${spanClass[s.span] || ''}`}
          >
            <button
              type="button"
              onClick={() => setActive(s)}
              className="group relative block h-full w-full overflow-hidden rounded-2xl bg-[#f4f4f4] text-left dark:bg-white/5"
            >
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.05]"
              />
              <span className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/55 via-black/0 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-[15px] text-white">{s.title}</span>
                <span className="text-[13px] text-white/70">{s.tag}</span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-ink/45 dark:text-white/40">
        More shots coming soon — also on{' '}
        <a href="https://dribbble.com/sumitwagh" target="_blank" rel="noreferrer" className="link-underline text-ink/70 dark:text-white/70">
          Dribbble
        </a>
        .
      </p>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-10"
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X size={22} weight="light" />
            </button>
            <motion.figure
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-4xl"
            >
              <img src={active.image} alt={active.title} className="max-h-[78vh] w-full rounded-2xl object-contain" />
              <figcaption className="mt-4 text-center text-white/80">
                <span className="text-base">{active.title}</span>
                <span className="mx-2 text-white/40">·</span>
                <span className="text-sm text-white/60">{active.tag}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
