import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import Globe from './Globe'
import Reveal from './Reveal'

const HOME = { city: 'Pune', lat: 18.5204, lon: 73.8567 }

async function getTemp(lat, lon) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`,
  )
  if (!res.ok) throw new Error('weather unavailable')
  const data = await res.json()
  const t = data?.current?.temperature_2m
  return typeof t === 'number' ? Math.round(t) : null
}

/* Approximate the visitor from their IP — no permission prompt, nothing stored. */
async function getVisitor() {
  const res = await fetch('https://ipapi.co/json/')
  if (!res.ok) throw new Error('location unavailable')
  const d = await res.json()
  if (!d || d.error || typeof d.latitude !== 'number') throw new Error('location unavailable')
  return {
    city: d.city || d.region || d.country_name,
    lat: d.latitude,
    lon: d.longitude,
    country: (d.country_code || d.country || '').toUpperCase(),
  }
}

/* Watch the `dark` class Tailwind toggles on <html>. */
function useDarkMode() {
  const [dark, setDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark'),
  )
  useEffect(() => {
    const el = document.documentElement
    const obs = new MutationObserver(() => setDark(el.classList.contains('dark')))
    obs.observe(el, { attributes: true, attributeFilter: ['class'] })
    return () => obs.disconnect()
  }, [])
  return dark
}

/* Distance between two points, so the copy can react to how far apart we are. */
function haversineKm(a, b) {
  const R = 6371
  const dLat = ((b.lat - a.lat) * Math.PI) / 180
  const dLon = ((b.lon - a.lon) * Math.PI) / 180
  const la1 = (a.lat * Math.PI) / 180
  const la2 = (b.lat * Math.PI) / 180
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin(dLon / 2) ** 2
  return Math.round(2 * R * Math.asin(Math.sqrt(h)))
}

/* The handful of places that still measure road distance in miles. */
const IMPERIAL = new Set(['US', 'GB', 'UK', 'LR', 'MM'])

function formatDistance(km, country) {
  if (km == null) return null
  if (IMPERIAL.has(country)) {
    const miles = Math.round(km * 0.621371)
    return `${miles.toLocaleString()} ${miles === 1 ? 'mile' : 'miles'}`
  }
  return `${Math.round(km).toLocaleString()} km`
}

export default function RightNow() {
  const reduce = useReducedMotion()
  const dark = useDarkMode()
  const [visitor, setVisitor] = useState(null)
  const [visitorTemp, setVisitorTemp] = useState(null)
  const [homeTemp, setHomeTemp] = useState(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let alive = true
    getTemp(HOME.lat, HOME.lon)
      .then((t) => alive && setHomeTemp(t))
      .catch(() => {})
    getVisitor()
      .then(async (v) => {
        if (!alive) return
        setVisitor(v)
        try {
          const t = await getTemp(v.lat, v.lon)
          if (alive) setVisitorTemp(t)
        } catch {
          /* temperature is optional */
        }
      })
      .catch(() => alive && setFailed(true))
    return () => {
      alive = false
    }
  }, [])

  const markers = [
    { lat: HOME.lat, lon: HOME.lon, color: '#f59e0b', label: HOME.city, temp: homeTemp },
    ...(visitor
      ? [{ lat: visitor.lat, lon: visitor.lon, color: dark ? '#e4e4e7' : '#18181b', label: visitor.city, temp: visitorTemp }]
      : []),
  ]

  const km = visitor ? haversineKm(visitor, HOME) : null
  const distance = formatDistance(km, visitor?.country ?? '')
  const warmer = visitorTemp != null && homeTemp != null ? visitorTemp - homeTemp : null

  // A closing line that actually reacts to where they are.
  let closer = 'Different skies, same internet.'
  if (km != null && km < 60) closer = 'Practically neighbours.'
  else if (warmer != null && Math.abs(warmer) <= 1) closer = 'Same weather, different window. Small world.'
  else if (warmer != null && warmer > 1) closer = `You're ${warmer}° warmer — I'd trade.`
  else if (warmer != null && warmer < -1) closer = `That's ${Math.abs(warmer)}° cooler than here. Enjoy it.`

  const strong = 'text-ink dark:text-white'

  return (
    <section className="container-site pt-28 md:pt-36">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_0.9fr] md:gap-16">
        <Reveal>
          <p className="text-[16px] uppercase text-ink/70 dark:text-white/60" style={{ letterSpacing: '0.10em' }}>
            Right now
          </p>
          <h2 className="mt-4 text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.05]">
            {distance ? `${distance} apart, give or take.` : 'Two dots on a globe'}
          </h2>

          <div className="mt-8 space-y-5 text-[19px] leading-relaxed text-ink/65 dark:text-white/60 md:text-[22px]">
            {failed ? (
              <p>
                I can&rsquo;t tell where you are — and honestly, that&rsquo;s fine. I&rsquo;m in{' '}
                <span className={strong}>{HOME.city}</span>
                {homeTemp != null && (
                  <>
                    , where it&rsquo;s <span className={strong}>{homeTemp}°C</span> and the chai is always on
                  </>
                )}
                . Spin the globe anyway.
              </p>
            ) : (
              <>
                <p>
                  You&rsquo;re somewhere near <span className={strong}>{visitor?.city ?? '…'}</span>
                  {visitorTemp != null && (
                    <>
                      , where it&rsquo;s <span className={strong}>{visitorTemp}°C</span> as you read this
                    </>
                  )}
                  .
                </p>
                <p>
                  I&rsquo;m at my desk in <span className={strong}>{HOME.city}</span>
                  {homeTemp != null && (
                    <>
                      {' '}
                      at <span className={strong}>{homeTemp}°C</span>
                    </>
                  )}
                  , pushing pixels around a healthcare dashboard. {closer}
                </p>
              </>
            )}
          </div>
          {!failed && visitor && (
            <p className="mt-6 max-w-md text-[13px] leading-relaxed text-ink/55 dark:text-white/45">
              Location is a rough guess from your IP address via a third-party
              service (ipapi.co). No precise GPS is requested, and nothing is
              stored or tracked.
            </p>
          )}
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto aspect-square w-full max-w-[480px]">
            <Globe markers={markers} reduce={reduce} dark={dark} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
