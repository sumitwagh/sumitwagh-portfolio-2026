import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import { ArrowDown, SpeakerSimpleHigh, SpeakerSimpleSlash } from '@phosphor-icons/react'
import { scrollToTarget } from '../lib/scroll'
import { isSoundEnabled, setSoundEnabled, subscribeSound, restoreSoundPreference, playTick, playSelect } from '../lib/sound'

/**
 * Fixed bottom bar for case studies — reading progress, what you're viewing,
 * a jump to the end, and the sound toggle.
 */
export default function ViewingBar({ title }) {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })
  const [sound, setSound] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setSound(restoreSoundPreference())
    return subscribeSound(setSound)
  }, [])

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toEnd = () => {
    playSelect()
    scrollToTarget(document.body.scrollHeight)
  }

  return (
    <motion.div
      initial={false}
      animate={{ y: visible ? 0 : 80, opacity: visible ? 1 : 0 }}
      transition={reduce ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 print:hidden"
    >
      <div className="pointer-events-auto relative w-full max-w-xl overflow-hidden rounded-full border border-white/50 bg-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.10)] backdrop-blur-[7px] backdrop-saturate-150 dark:border-white/12 dark:bg-white/[0.08]">
        {/* reading progress */}
        <motion.span
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="absolute inset-x-0 top-0 h-[2px] origin-left bg-ink/60 dark:bg-white/60"
        />

        <div className="flex items-center justify-between gap-4 py-2.5 pl-5 pr-2.5">
          <p className="min-w-0 truncate font-mono text-[12px] uppercase text-ink/50 dark:text-white/45" style={{ letterSpacing: '0.1em' }}>
            <span className="text-ink/30 dark:text-white/25">Viewing</span> {title}
          </p>

          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={toEnd}
              onMouseEnter={() => playTick()}
              className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[12px] uppercase text-ink/60 transition-colors duration-300 hover:bg-black/5 hover:text-ink dark:text-white/55 dark:hover:bg-white/10 dark:hover:text-white"
              style={{ letterSpacing: '0.08em' }}
            >
              End
              <ArrowDown size={13} weight="bold" className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>

            <button
              type="button"
              onClick={() => setSoundEnabled(!isSoundEnabled())}
              onMouseEnter={() => playTick()}
              aria-pressed={sound}
              aria-label={sound ? 'Turn interface sound off' : 'Turn interface sound on'}
              title={sound ? 'Sound on' : 'Sound off'}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink/50 transition-colors duration-300 hover:bg-black/5 hover:text-ink dark:text-white/45 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {sound ? <SpeakerSimpleHigh size={15} weight="light" /> : <SpeakerSimpleSlash size={15} weight="light" />}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
