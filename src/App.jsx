import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GradientBg from './components/GradientBg'
import Home from './pages/Home'
import { setLenis, scrollToTarget } from './lib/scroll'

// Route-level code splitting for faster first load
const Work = lazy(() => import('./pages/Work'))
const WorkDetail = lazy(() => import('./pages/WorkDetail'))
const Shots = lazy(() => import('./pages/Shots'))
const Uses = lazy(() => import('./pages/Uses'))
const About = lazy(() => import('./pages/About'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    scrollToTarget(0, { immediate: true })
  }, [pathname])
  return null
}

function SmoothScroll() {
  const reduce = useReducedMotion()
  useEffect(() => {
    if (reduce) return undefined
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })
    setLenis(lenis)
    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      setLenis(null)
    }
  }, [reduce])
  return null
}

function PageTransition({ children }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

const wrap = (el) => <PageTransition>{el}</PageTransition>

// Shown while a lazy route chunk loads, so navigating directly to a page
// (e.g. /work) never flashes an empty screen. Mirrors the page layout with
// a calm pulse instead of a blank gap.
function RouteSkeleton() {
  return (
    <div className="container-site pt-16 md:pt-24" aria-hidden="true">
      <div className="animate-pulse">
        <div className="h-12 w-2/3 max-w-md rounded-xl bg-ink/[0.06] dark:bg-white/[0.06] md:h-16" />
        <div className="mt-4 h-5 w-1/2 max-w-sm rounded-lg bg-ink/[0.05] dark:bg-white/[0.05]" />
        <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}>
              <div className="aspect-[16/10] w-full rounded-2xl bg-ink/[0.06] dark:bg-white/[0.06]" />
              <div className="mt-4 h-5 w-1/3 rounded-lg bg-ink/[0.05] dark:bg-white/[0.05]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      <SmoothScroll />
      <GradientBg />
      <Navbar />
      <div className="relative z-10 flex-1">
        <Suspense fallback={<RouteSkeleton />}>
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={wrap(<Home />)} />
              <Route path="/work" element={wrap(<Work />)} />
              <Route path="/work/:slug" element={wrap(<WorkDetail />)} />
              <Route path="/shots" element={wrap(<Shots />)} />
              <Route path="/uses" element={wrap(<Uses />)} />
              <Route path="/about" element={wrap(<About />)} />
              <Route path="*" element={wrap(<Home />)} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
