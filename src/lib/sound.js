/**
 * Tiny synthesised UI sounds (no audio files).
 * Browsers block audio until the user interacts, so the context is created
 * lazily on the first gesture and stays suspended otherwise.
 */
let ctx = null
let enabled = false
const listeners = new Set()

function getCtx() {
  if (typeof window === 'undefined') return null
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return null
    ctx = new AC()
  }
  if (ctx.state === 'suspended') ctx.resume().catch(() => {})
  return ctx
}

export function isSoundEnabled() {
  return enabled
}

export function setSoundEnabled(value) {
  enabled = value
  if (value) getCtx()
  try {
    localStorage.setItem('sw:sound', value ? '1' : '0')
  } catch {
    /* storage may be unavailable */
  }
  listeners.forEach((fn) => fn(value))
}

export function subscribeSound(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

export function restoreSoundPreference() {
  try {
    enabled = localStorage.getItem('sw:sound') === '1'
  } catch {
    enabled = false
  }
  return enabled
}

/** Soft, short tick — used on nav hover. */
export function playTick({ freq = 1180, gain = 0.025, duration = 0.045 } = {}) {
  if (!enabled) return
  const audio = getCtx()
  if (!audio) return
  const osc = audio.createOscillator()
  const amp = audio.createGain()
  osc.type = 'triangle'
  osc.frequency.setValueAtTime(freq, audio.currentTime)
  amp.gain.setValueAtTime(0, audio.currentTime)
  amp.gain.linearRampToValueAtTime(gain, audio.currentTime + 0.006)
  amp.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + duration)
  osc.connect(amp).connect(audio.destination)
  osc.start()
  osc.stop(audio.currentTime + duration + 0.02)
}

/** Slightly lower, rounder click — used on activation. */
export function playSelect() {
  playTick({ freq: 720, gain: 0.03, duration: 0.07 })
}
