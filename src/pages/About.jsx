import { ArrowUpRight } from '@phosphor-icons/react'
import { books, journey } from '../data/content'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import profile from '../assets/img/profile.jpg'

// 36px section heading, responsive-safe
const sectionHeading = 'text-[28px] leading-tight sm:text-[32px] lg:text-[36px]'

export default function About() {
  return (
    <main className="container-site pt-16 md:pt-20">
      <Seo
        title="About"
        description="From a small town near the Ajanta caves to designing healthcare products — the story and journey of designer Sumit Wagh."
        path="/about"
      />

      {/* Intro — tighter spacing, stronger hierarchy */}
      <div className="grid items-center gap-10 md:grid-cols-[1fr_280px] md:gap-14">
        <Reveal>
          <p className="eyebrow">About</p>
          <h1 className="mt-4 text-[clamp(2.2rem,4.8vw,3.6rem)] leading-[1.1]">
            Designer by curiosity, engineer by training, storyteller by habit.
          </h1>
        </Reveal>

        <Reveal delay={0.15} className="order-first md:order-none">
          <img
            src={profile}
            alt="Portrait of Sumit Wagh"
            className="aspect-[4/5] w-full rounded-3xl object-cover grayscale"
          />
        </Reveal>
      </div>

      {/* Story — reduced gap after the intro, larger body to match Work Detail */}
      <section className="mt-10 max-w-read space-y-6 text-[16px] leading-[24px] text-ink/85 dark:text-white/80 sm:text-[18px] sm:leading-[27px] md:mt-12 lg:text-[20px] lg:leading-[30px]">
        <Reveal>
          <p>
            I grew up in Sillod, a small town beside the world-famous Ajanta caves in India. Between cricket
            matches and hours lost on the family computer, I found the thing that would shape my whole career:
            a machine that did exactly what you told it to. That fascination led me to a Bachelor&rsquo;s in
            Computer Science, and then to Hyderabad to learn to build for the web — PHP, JavaScript, HTML, CSS.
          </p>
        </Reveal>
        <Reveal>
          <p>
            Code taught me how products work; design taught me why they matter. A freelancer friend, Swapnil,
            pulled me into the world of UI/UX and I never looked back. For 7+ years now I&rsquo;ve been designing
            interfaces for healthcare and SaaS — Revenue Cycle Management, remote patient monitoring, EHR systems,
            and the AI tools reshaping all of them.
          </p>
        </Reveal>
        <Reveal>
          <p>
            My sweet spot is complex, high-stakes products: the ones where a confusing screen has real
            consequences. I care about systems that scale and the small interactions that make them feel human.
            Away from the screen, you&rsquo;ll find me travelling, gaming, or working through another book.
          </p>
        </Reveal>
      </section>

      {/* Journey — reference layout: role left, company + date right */}
      <section className="mt-20 md:mt-24">
        <Reveal>
          <h2 className={sectionHeading}>Journey so far</h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink/55 dark:text-white/55">
            In a nutshell — 7+ years of experience, a portfolio of products shipped across healthcare and
            SaaS, and a few 0-to-1 journeys along the way.
          </p>
        </Reveal>

        <ul className="mt-10 border-t border-line dark:border-white/10">
          {journey.map((j, i) => (
            <Reveal as="li" key={j.company} delay={i * 0.08} className="border-b border-line dark:border-white/10">
              <a
                href={j.href}
                target="_blank"
                rel="noreferrer"
                className={`group flex flex-col gap-3 py-7 transition-opacity duration-300 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:py-8 ${
                  i === 0
                    ? 'text-ink dark:text-white'
                    : 'text-ink/45 hover:text-ink/80 dark:text-white/40 dark:hover:text-white/75'
                }`}
              >
                {/* Role — left */}
                <h3 className="text-[clamp(1.5rem,3vw,2rem)] leading-tight">{j.role}</h3>

                {/* Company + date — right */}
                <div className="flex items-center gap-4 sm:justify-end sm:text-right">
                  <div className="order-2 sm:order-1">
                    <p className="flex items-center gap-2 text-[clamp(1.25rem,2.4vw,1.75rem)] leading-tight sm:justify-end">
                      {j.company}
                      <ArrowUpRight
                        size={20}
                        weight="light"
                        className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </p>
                    <p className="mt-1 text-[15px] text-current opacity-70">{j.period}</p>
                  </div>
                  <span className="order-1 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-white p-1.5 dark:border-white/10 sm:order-2">
                    {j.logoSrc ? (
                      <img src={j.logoSrc} alt={`${j.company} logo`} className="h-full w-full object-contain" />
                    ) : (
                      <span className="text-sm text-ink">{j.logo}</span>
                    )}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Books — premium hover interaction */}
      <section className="mt-20 md:mt-24">
        <Reveal>
          <h2 className={sectionHeading}>Books I really like</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {books.map((b, i) => (
            <Reveal key={b.title} delay={(i % 6) * 0.05}>
              <figure className="group [perspective:1000px]">
                <div className="relative overflow-hidden rounded-lg shadow-sm transition-all duration-500 ease-smooth will-change-transform group-hover:-translate-y-2 group-hover:rotate-[-1.5deg] group-hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.35)]">
                  <img
                    src={b.image}
                    alt={`${b.title} by ${b.author}`}
                    loading="lazy"
                    className="aspect-[187/285] w-full object-cover"
                  />
                  {/* moving sheen */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-smooth group-hover:translate-x-full" />
                  {/* title reveal */}
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="block text-[13px] leading-tight text-white">{b.title}</span>
                    <span className="block text-[11px] text-white/70">{b.author}</span>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
