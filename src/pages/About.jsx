import { books } from '../data/content'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import signature from '../assets/img/signature.svg'
import portrait from '../assets/img/portrait.webp'
import TravelGallery from '../components/TravelGallery'

const story = [
  `I grew up in Sillod, a small town an hour from the Ajanta caves, where the family computer was the most interesting thing in the house. It did exactly what you told it to — no more, no less — and that bargain still fascinates me.`,
  `I took a Computer Science degree, moved to Hyderabad, and spent a few years building for the web in PHP, JavaScript, HTML and CSS. Code taught me how products actually work; it took a freelancer friend nudging me toward UI/UX before I realised I cared far more about why they work.`,
  `Seven years on, I design for healthcare and SaaS — revenue cycle management, remote patient monitoring, EHR systems, and the AI tools rearranging all of it. These are products people open because something needs doing, often while tired, rushed, and responsible for someone else.`,
  `Good design here is rarely the clever bit; it's the boring discipline of removing one more step, naming one more thing properly, and making the scary action feel reversible. That's the work I find most worth doing well.`,
]

export default function About() {
  return (
    <main className="pt-16 md:pt-20">
      <Seo
        title="About"
        description="From a small town near the Ajanta caves to designing healthcare products — the story of designer Sumit Wagh."
        path="/about"
      />
{/* About */}
<section className="container-site py-8 md:py-12">
  {/* Header */}
  <Reveal>
    <h1 className="mt-3 text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.08] tracking-[-0.02em]">
      The person
      behind the
      products.
    </h1>

    <p className="mt-8 max-w-4xl text-[20px] leading-9 text-ink/65 dark:text-white/60">
      I'm{" "}
      <span className="font-medium text-ink dark:text-white">
        Sumit Wagh
      </span>
      , a Senior UI Designer based in Pune, India. For the past seven years,
      I've been designing enterprise healthcare, AI, and SaaS products that
      simplify complex workflows into intuitive experiences.
    </p>
  </Reveal>

  {/* Content */}
  <div className="mt-20 grid gap-14 md:grid-cols-[320px_minmax(0,1fr)] lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-24">

    {/* Left */}
    <Reveal className="flex flex-col items-center md:sticky md:top-28 md:self-start">

      <figure className="overflow-hidden rounded-[18px] border border-line bg-[#f5f5f5] dark:border-white/10 dark:bg-white/[0.03]">
        <img
          src={portrait}
          alt="Sumit Wagh"
          className="w-full object-cover"
          loading="lazy"
        />
      </figure>

      <img
        src={signature}
        alt="Signature"
        className="mt-6 h-12 w-auto opacity-90 dark:invert"
      />


    </Reveal>

    {/* Story */}
    <Reveal delay={0.1}>

      <div className="space-y-14">

        <section>
          <p className="mb-3 text-md uppercase text-ink/70 dark:text-white/60" style={{ letterSpacing: "0.12em" }}>
            How It Started
          </p>

          <p className="max-w-[680px] text-[20px] leading-[1.9] text-ink/75 dark:text-white/70">
            {story[0]}
          </p>
        </section>

        <section>
          <p className="mb-3 text-md uppercase text-ink/70 dark:text-white/60" style={{ letterSpacing: "0.12em" }}>
            From Code to Design
          </p>

          <p className="max-w-[680px] text-[20px] leading-[1.9] text-ink/75 dark:text-white/70">
            {story[1]}
          </p>
        </section>

        <section>
          <p className="mb-3 text-md uppercase text-ink/70 dark:text-white/60" style={{ letterSpacing: "0.12em" }}>
            Why Healthcare
          </p>

          <p className="max-w-[680px] text-[20px] leading-[1.9] text-ink/75 dark:text-white/70">
            {story[2]}
          </p>
        </section>

        <section>
          <p className="mb-3 text-md uppercase text-ink/70 dark:text-white/60" style={{ letterSpacing: "0.12em" }}>
            What Keeps Me Curious
          </p>

          <p className="max-w-[680px] text-[20px] leading-[1.9] text-ink/75 dark:text-white/70">
            {story[3]}
          </p>
        </section>

      </div>

    </Reveal>

  </div>
</section>
      {/* Off screen — horizontal travel gallery */}
      <TravelGallery />

      {/* Books — a light personal footnote, kept compact */}
      <section className="container-site mt-16 md:mt-20">
        <Reveal>
          <p className="eyebrow">On my shelf</p>
          <h2 className="mt-2 text-[22px] leading-tight text-ink/80 dark:text-white/80 sm:text-[26px]">
            A few books I keep coming back to
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-3 gap-x-5 gap-y-8 sm:grid-cols-4 md:grid-cols-6">
          {books.slice(0, 6).map((b, i) => (
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
