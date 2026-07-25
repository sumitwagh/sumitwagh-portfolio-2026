import { useEffect, useRef } from 'react'
import { LAND_MASK_B64, MASK_W, MASK_H } from '../data/landmask'

/* Decode the packed land bitmask once per module load. */
let LAND = null
function landMask() {
  if (LAND) return LAND
  const bin = atob(LAND_MASK_B64)
  const bytes = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i += 1) bytes[i] = bin.charCodeAt(i)
  LAND = bytes
  return LAND
}

function isLand(lat, lon) {
  const bytes = landMask()
  let row = Math.floor((90 - lat) / (180 / MASK_H))
  let col = Math.floor((lon + 180) / (360 / MASK_W))
  row = Math.min(Math.max(row, 0), MASK_H - 1)
  col = Math.min(Math.max(col, 0), MASK_W - 1)
  const idx = row * MASK_W + col
  return (bytes[idx >> 3] >> (7 - (idx & 7))) & 1
}

/* Evenly distributed points on a sphere, keeping only those over land. */
function buildDots(count) {
  const dots = []
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / (count - 1)) * 2
    const radius = Math.sqrt(Math.max(0, 1 - y * y))
    const theta = golden * i
    const lat = Math.asin(y) * (180 / Math.PI)
    let lon = Math.atan2(Math.sin(theta) * radius, Math.cos(theta) * radius) * (180 / Math.PI)
    if (lon > 180) lon -= 360
    if (isLand(lat, lon)) dots.push([lat, lon])
  }
  return dots
}

const toRad = (d) => (d * Math.PI) / 180

/**
 * Interactive dotted globe. Rotates slowly on its own, can be dragged,
 * and pins the visitor's location alongside mine.
 */
export default function Globe({ markers = [], className = '', reduce = false, dark = false }) {
  const canvasRef = useRef(null)
  const wrapRef = useRef(null)
  const labelRefs = useRef([])
  const stateRef = useRef({ rot: 0, tilt: -0.32, dragging: false, lastX: 0, lastY: 0, vel: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    const dots = buildDots(6500)
    const st = stateRef.current
    let raf
    let w = 0
    let h = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    // Project lat/lon to screen; returns null when the point faces away.
    const project = (lat, lon, R, cx, cy) => {
      const phi = toRad(lat)
      const lambda = toRad(lon) + st.rot
      let x = Math.cos(phi) * Math.sin(lambda)
      let y = Math.sin(phi)
      let z = Math.cos(phi) * Math.cos(lambda)
      // tilt around X axis
      const ct = Math.cos(st.tilt)
      const stt = Math.sin(st.tilt)
      const y2 = y * ct - z * stt
      const z2 = y * stt + z * ct
      if (z2 < 0) return null
      return { x: cx + x * R, y: cy - y2 * R, z: z2 }
    }

    const draw = () => {
      const R = Math.min(w, h) / 2 - 6
      const cx = w / 2
      const cy = h / 2
      ctx.clearRect(0, 0, w, h)

      if (dark) {
        // Sphere body — barely lighter than the page, so it reads as mass, not a disc
        const grad = ctx.createRadialGradient(cx - R * 0.32, cy - R * 0.36, R * 0.04, cx, cy, R)
        grad.addColorStop(0, 'rgba(26,26,30,1)')
        grad.addColorStop(0.55, 'rgba(17,17,20,1)')
        grad.addColorStop(0.88, 'rgba(12,12,14,1)')
        grad.addColorStop(1, 'rgba(10,10,12,1)')
        ctx.beginPath()
        ctx.arc(cx, cy, R, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        // Terminator: a soft shadow hugging the lower-right limb
        const shade = ctx.createRadialGradient(cx - R * 0.45, cy - R * 0.5, R * 0.2, cx, cy, R * 1.02)
        shade.addColorStop(0, 'rgba(0,0,0,0)')
        shade.addColorStop(0.62, 'rgba(0,0,0,0.18)')
        shade.addColorStop(1, 'rgba(0,0,0,0.55)')
        ctx.beginPath()
        ctx.arc(cx, cy, R, 0, Math.PI * 2)
        ctx.fillStyle = shade
        ctx.fill()

        // Rim light along the top-left, fading around the sphere
        const rim = ctx.createLinearGradient(cx - R, cy - R, cx + R, cy + R)
        rim.addColorStop(0, 'rgba(255,255,255,0.28)')
        rim.addColorStop(0.45, 'rgba(255,255,255,0.07)')
        rim.addColorStop(1, 'rgba(255,255,255,0.02)')
        ctx.beginPath()
        ctx.arc(cx, cy, R - 0.5, 0, Math.PI * 2)
        ctx.strokeStyle = rim
        ctx.lineWidth = 1.2
        ctx.stroke()

        // Very faint atmosphere just outside the limb
        const halo = ctx.createRadialGradient(cx, cy, R, cx, cy, R * 1.09)
        halo.addColorStop(0, 'rgba(150,170,200,0.10)')
        halo.addColorStop(1, 'rgba(150,170,200,0)')
        ctx.beginPath()
        ctx.arc(cx, cy, R * 1.09, 0, Math.PI * 2)
        ctx.fillStyle = halo
        ctx.fill()
      } else {
        const grad = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R)
        grad.addColorStop(0, 'rgba(255,255,255,0.95)')
        grad.addColorStop(0.65, 'rgba(244,244,245,0.75)')
        grad.addColorStop(1, 'rgba(228,228,231,0.35)')
        ctx.beginPath()
        ctx.arc(cx, cy, R, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      }

      // land dots
      for (let i = 0; i < dots.length; i += 1) {
        const p = project(dots[i][0], dots[i][1], R, cx, cy)
        if (!p) continue
        const size = 0.5 + p.z * 1.1
        ctx.globalAlpha = dark ? 0.1 + p.z * 0.6 : 0.18 + p.z * 0.62
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fillStyle = dark ? '#f4f4f5' : '#18181b'
        ctx.fill()
      }
      ctx.globalAlpha = 1

      // Position the HTML pins over the canvas (kept out of React's render loop)
      markers.forEach((m, i) => {
        const el = labelRefs.current[i]
        if (!el) return
        if (m.lat == null || m.lon == null) {
          el.style.opacity = '0'
          return
        }
        const p = project(m.lat, m.lon, R, cx, cy)
        if (!p) {
          el.style.opacity = '0'
          el.style.pointerEvents = 'none'
          return
        }
        // Fade in as the point rotates toward the viewer
        const vis = Math.max(0, Math.min(1, (p.z - 0.06) / 0.28))
        el.style.opacity = String(vis)
        el.style.pointerEvents = vis > 0.6 ? 'auto' : 'none'
        el.style.transform = `translate(${p.x}px, ${p.y}px)`
        el.style.zIndex = String(10 + Math.round(p.z * 10))
      })
    }

    const tick = () => {
      if (!st.dragging) {
        st.rot += st.vel || 0.0016
        st.vel *= 0.95
        if (Math.abs(st.vel) < 0.0016) st.vel = 0
      }
      draw()
      raf = requestAnimationFrame(tick)
    }

    if (reduce) {
      draw()
    } else {
      raf = requestAnimationFrame(tick)
    }

    const onDown = (e) => {
      st.dragging = true
      st.lastX = e.clientX
      st.lastY = e.clientY
      canvas.setPointerCapture?.(e.pointerId)
    }
    const onMove = (e) => {
      if (!st.dragging) return
      const dx = e.clientX - st.lastX
      const dy = e.clientY - st.lastY
      st.lastX = e.clientX
      st.lastY = e.clientY
      st.rot += dx * 0.005
      st.vel = dx * 0.005
      st.tilt = Math.min(Math.max(st.tilt + dy * 0.004, -1.1), 1.1)
      if (reduce) draw()
    }
    const onUp = () => {
      st.dragging = false
    }
    canvas.addEventListener('pointerdown', onDown)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      canvas.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [markers, reduce, dark])

  return (
    <div ref={wrapRef} className={`relative h-full w-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="h-full w-full cursor-grab touch-none active:cursor-grabbing"
        aria-label="Interactive globe showing your location and mine"
        role="img"
      />

      {/* Pins + labels, positioned each frame from the canvas projection */}
      {markers.map((m, i) => (
        <div
          key={m.label ?? i}
          ref={(el) => {
            labelRefs.current[i] = el
          }}
          className="pointer-events-none absolute left-0 top-0 opacity-0 transition-opacity duration-200 will-change-transform"
        >
          <div className="-translate-x-1/2 -translate-y-full pb-0.5">
            {/* teardrop pin */}
            <svg viewBox="0 0 24 32" className="mx-auto h-6 w-[18px] drop-shadow-sm" aria-hidden="true">
              <path
                d="M12 0C5.4 0 0 5.4 0 12c0 8.4 12 20 12 20s12-11.6 12-20c0-6.6-5.4-12-12-12z"
                fill={m.pinFill ?? '#ffffff'}
              />
              <circle cx="12" cy="12" r="5.5" fill={m.color} />
            </svg>
            {m.label && (
              <span
                className="mt-1 block whitespace-nowrap rounded-full border border-black/10 bg-white/90 px-2.5 py-1 text-[12px] text-ink shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/10 dark:text-white"
                style={{ transform: 'translateX(0)' }}
              >
                {m.label}
                {m.temp != null && <span className="ml-1.5 text-ink/45 dark:text-white/45">{m.temp}°</span>}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
