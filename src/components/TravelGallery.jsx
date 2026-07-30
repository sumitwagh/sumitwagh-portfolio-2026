
import Reveal from './Reveal'

// Lightweight flat-illustration "postcards" — no image assets, fully responsive.
function Scene({ variant }) {
  const scenes = {
    mountains: (
      <>
        <rect width="100" height="70" fill="url(#sky-cool)" />
        <circle cx="24" cy="18" r="7" fill="#fdf3b8" />
        <path d="M0 70 L30 34 L48 70 Z" fill="#9aa3af" />
        <path d="M34 70 L64 26 L94 70 Z" fill="#5b6572" />
        <path d="M58 39 L64 26 L70 39 Z" fill="#eef2f7" />
      </>
    ),
    beach: (
      <>
        <rect width="100" height="70" fill="url(#sky-warm)" />
        <circle cx="78" cy="18" r="7" fill="#fce38a" />
        <rect y="46" width="100" height="24" fill="#5bc6c0" />
        <path d="M22 46c-4-10-1-20 2-24 1 6 4 10 8 12-5 1-8 6-10 12z" fill="#2f9e94" />
        <ellipse cx="42" cy="58" rx="10" ry="3" fill="#2f9e94" opacity="0.6" />
      </>
    ),
    desert: (
      <>
        <rect width="100" height="70" fill="url(#sky-dawn)" />
        <circle cx="70" cy="20" r="10" fill="#f6b26b" opacity="0.9" />
        <path d="M0 70 Q28 44 52 58 T100 52 V70 Z" fill="#e6b98f" />
        <path d="M0 70 Q34 56 60 66 T100 62 V70 Z" fill="#cf9d73" />
      </>
    ),
    balloons: (
      <>
        <rect width="100" height="70" fill="url(#sky-pink)" />
        <path d="M0 70 L26 48 L48 70 Z" fill="#c9cdd6" />
        <path d="M30 70 L58 44 L88 70 Z" fill="#aeb4bf" />
        <g>
          <circle cx="40" cy="24" r="8" fill="#e8687a" />
          <rect x="38.5" y="32" width="3" height="3" fill="#7a4a2b" />
        </g>
        <g>
          <circle cx="66" cy="20" r="6" fill="#f2a742" />
          <rect x="64.8" y="26" width="2.4" height="2.4" fill="#7a4a2b" />
        </g>
      </>
    ),
    hills: (
      <>
        <rect width="100" height="70" fill="url(#sky-green)" />
        <circle cx="20" cy="16" r="6" fill="#fdf3b8" />
        <path d="M0 70 Q26 40 52 70 Z" fill="#7fae5f" />
        <path d="M40 70 Q70 38 100 70 Z" fill="#5d9243" />
      </>
    ),
    city: (
      <>
        <rect width="100" height="70" fill="url(#sky-dusk)" />
        <circle cx="80" cy="18" r="6" fill="#ffd9a1" />
        <rect x="14" y="40" width="12" height="30" fill="#6b7280" />
        <rect x="30" y="30" width="14" height="40" fill="#4b5563" />
        <rect x="48" y="46" width="10" height="24" fill="#6b7280" />
        <rect x="62" y="34" width="16" height="36" fill="#556070" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 100 70" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="sky-cool" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#cfe0ff" /><stop offset="1" stopColor="#eef4ff" /></linearGradient>
        <linearGradient id="sky-warm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#bfe9ff" /><stop offset="1" stopColor="#e9f7ff" /></linearGradient>
        <linearGradient id="sky-dawn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffe0c2" /><stop offset="1" stopColor="#fff3e6" /></linearGradient>
        <linearGradient id="sky-pink" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffd7e6" /><stop offset="1" stopColor="#fff0e8" /></linearGradient>
        <linearGradient id="sky-green" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#d6f0d0" /><stop offset="1" stopColor="#eefbe9" /></linearGradient>
        <linearGradient id="sky-dusk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#dcd6f7" /><stop offset="1" stopColor="#f3eefb" /></linearGradient>
      </defs>
      {scenes[variant]}
    </svg>
  )
}

const cards = [
  { place: 'Pune, 2024', variant: 'city', rot: '-2deg' },
  { place: 'Ladakh, 2025', variant: 'mountains', rot: '1.5deg' },
  { place: 'Goa, 2024', variant: 'beach', rot: '-1.2deg' },
  { place: 'Jaipur, 2023', variant: 'desert', rot: '2deg' },
  { place: 'Turkey, 2023', variant: 'balloons', rot: '-1.6deg' },
  { place: 'Meghalaya, 2023', variant: 'hills', rot: '1.3deg' },
  { place: 'Kerala, 2025', variant: 'beach', rot: '-2.2deg' },
]

export default function TravelGallery() {
  // Duplicate the set so the marquee loops seamlessly
  const doubled = [...cards, ...cards]

  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] mt-16 w-screen md:mt-20">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow">Off screen</p>
          <h2 className="mt-2 max-w-3xl text-[clamp(1.4rem,2.6vw,1.9rem)] leading-[1.15] text-ink/80 dark:text-white/80">
            Curious about cities, street food, and the stories behind old doors.
          </h2>
        </Reveal>
      </div>

      {/* Full-bleed continuous marquee — no edge fade */}
      <div className="marquee-plain mt-8 w-full md:mt-10">
        <div className="marquee-track gap-6 py-4 md:gap-12" style={{ '--dur': '55s' }}>
          {doubled.map((c, i) => (
            <figure
              key={c.place + i}
              aria-hidden={i >= cards.length}
              className="polaroid group w-[180px] shrink-0 rounded-[14px] bg-white p-3 pb-4 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] dark:bg-neutral-100 sm:w-[210px]"
              style={{ '--r': c.rot }}
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[6px]">
                <div className="h-full w-full transition-transform duration-700 ease-smooth group-hover:scale-105">
                  <Scene variant={c.variant} />
                </div>
              </div>
              <figcaption className="pt-3 text-center text-[15px] italic text-neutral-500">{c.place}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
