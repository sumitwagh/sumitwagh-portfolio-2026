// Shared Lenis instance + helpers for Framer-like smooth scrolling.
let lenis = null

export function setLenis(instance) {
  lenis = instance
}

export function scrollToTarget(target, { offset = -104, immediate = false } = {}) {
  if (lenis) {
    lenis.scrollTo(target, { offset, immediate, duration: immediate ? 0 : 1.1 })
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: immediate ? 'instant' : 'smooth' })
  } else if (target?.getBoundingClientRect) {
    const top = target.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({ top, behavior: immediate ? 'instant' : 'smooth' })
  }
}
