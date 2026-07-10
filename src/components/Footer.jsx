import { EnvelopeSimple, XLogo, LinkedinLogo, DribbbleLogo, ArrowRight } from '@phosphor-icons/react'
import { contact } from '../data/site'


const socials = [
  { label: 'Email', href: `mailto:${contact.email}`, Icon: EnvelopeSimple },
  { label: 'X', href: contact.x, Icon: XLogo },
  { label: 'LinkedIn', href: contact.linkedin, Icon: LinkedinLogo },
  { label: 'Dribbble', href: contact.dribbble, Icon: DribbbleLogo },
]

export default function Footer() {
  return (
    <footer className="relative z-10 mt-28 md:mt-36">
      <div className="container-site">
        {/* Closing line */}
        <div className="border-t border-line py-16 text-center dark:border-white/10 md:py-20">
          <p className="mx-auto max-w-2xl text-[clamp(1.6rem,3.4vw,2.4rem)] leading-tight text-ink/90 dark:text-white/90">
            Have a product worth building? Let&rsquo;s make it feel effortless.
          </p>
          <a href={`mailto:${contact.email}`} className="btn-dark mt-8">
            Let&rsquo;s Talk
            <ArrowRight size={16} weight="light" />
          </a>
        </div>

        <div className="flex flex-col items-center gap-6 pb-10 md:flex-row md:justify-between md:pb-12">
          <p className="order-2 text-sm text-ink/70 dark:text-white/60 md:order-1">© 2026 Sumit Wagh</p>

          <ul className="order-1 flex items-center gap-3 md:order-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-ink"
                >
                  <Icon size={19} weight="light" />
                </a>
              </li>
            ))}
          </ul>

          <p className="order-3 text-sm text-ink/70 dark:text-white/60">Designed &amp; built with care</p>
        </div>
      </div>
    </footer>
  )
}
