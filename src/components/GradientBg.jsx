import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'
import gradient from '../assets/img/gradient.png'

// The gradient belongs to the hero: fully visible on load, then it smoothly
// fades out as you scroll, gone by ~one viewport (the Selected Work section).
// Underneath is a clean near-white background.
export default function GradientBg() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const [vh, setVh] = useState(800)

  useEffect(() => {
    const onResize = () => setVh(window.innerHeight)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Fade across the first ~90% of the viewport height
  const raw = useTransform(scrollY, [0, vh * 0.9], [1, 0])
  const opacity = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 })

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[460px] overflow-hidden md:h-[540px]">
      <motion.img
        src={gradient}
        alt=""
        style={{ opacity: reduce ? 1 : opacity, willChange: 'opacity' }}
        className="h-full w-full object-cover object-top"
      />
      {/* Fade the gradient into the page background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-[#0b0b0c]/50 dark:to-[#0b0b0c]" />
    </div>
  )
}
