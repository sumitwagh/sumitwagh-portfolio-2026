import {
  EnvelopeSimple,
  XLogo,
  LinkedinLogo,
  DribbbleLogo,
  ArrowRight,
} from "@phosphor-icons/react";
import { contact } from "../data/site";
import Reveal from "./Reveal";

const socials = [
  { label: "Email", href: `mailto:${contact.email}`, Icon: EnvelopeSimple },
  { label: "X", href: contact.x, Icon: XLogo },
  { label: "LinkedIn", href: contact.linkedin, Icon: LinkedinLogo },
  { label: "Dribbble", href: contact.dribbble, Icon: DribbbleLogo },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32">
      <div className="container-site">
        <Reveal>
          <div className="border-t border-line py-20 dark:border-white/10">

            {/* Availability */}
            <div className="mb-8 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-4 py-2 text-md tracking-wide text-ink/90 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for freelance & full-time
              </span>
            </div>

            {/* Heading */}
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
                Let's build something
                <br />
                people love to use.
              </h2>

              <a
                href={`mailto:${contact.email}`}
                className="btn-dark mt-10 inline-flex"
              >
                Let's Talk
                <ArrowRight size={16} weight="light" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Bottom Footer */}

        <div className="flex flex-col items-center gap-8 border-t border-line py-10 dark:border-white/10 md:flex-row md:justify-between">

          <p className="text-md text-ink/60 dark:text-white/50">
            © 2026 Sumit Wagh
          </p>

          <ul className="flex items-center gap-4">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-lg dark:border-white/10 dark:bg-transparent dark:hover:border-white"
                >
                  <Icon
                    size={20}
                    weight="light"
                    className="transition-transform duration-300 group-hover:rotate-6"
                  />
                </a>
              </li>
            ))}
          </ul>

          <p className="text-md text-ink/60 dark:text-white/50">
            Designed & developed in Claude Code.
          </p>

        </div>
      </div>
    </footer>
  );
}