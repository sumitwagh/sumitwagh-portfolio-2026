import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun, List, X, ArrowUpRight } from '@phosphor-icons/react'
import avatar from '../assets/img/avatar.png'
import { RESUME_URL } from '../data/site'

const links = [
  { to: '/work', label: 'Work' },
  { to: '/shots', label: 'Shots' },
  { to: '/uses', label: 'Uses' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-4 z-50 md:top-6">
      <div className="container-site">
        <nav
          className={`flex items-center justify-between rounded-full py-2.5 pl-3 pr-3 backdrop-blur-[7px] backdrop-saturate-150 transition-all duration-500 ease-smooth ${
            scrolled
              ? 'border border-white/50 bg-white/55 shadow-[0_8px_32px_rgba(0,0,0,0.10)] dark:border-white/12 dark:bg-white/[0.08]'
              : 'border border-white/40 bg-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:border-white/8 dark:bg-white/[0.04]'
          }`}
        >
          <Link to="/" className="group flex items-center gap-3" aria-label="Sumit Wagh — Home">
            <img
              src={avatar}
              alt="My Profile Picture - Sumit Wagh"
              width="40"
              height="40"
              className="h-10 w-10 rounded-full object-cover transition-transform duration-500 ease-smooth group-hover:rotate-6 group-hover:scale-105"
            />
            <span className="text-[17px]">Sumit Wagh</span>
          </Link>

          <div className="flex items-center gap-1">
            <ul className="hidden items-center md:flex">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `nav-link relative rounded-full px-4 py-2 text-[14px] uppercase transition-colors duration-300 hover:text-ink dark:hover:text-white ${
                        isActive ? 'text-ink dark:text-white' : 'text-ink/65 dark:text-white/60'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {l.label}
                        {isActive && (
                          <motion.span
                            layoutId="nav-dot"
                            className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-ink dark:bg-white"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="nav-link ml-1 hidden items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-[14px] uppercase text-ink transition-all duration-300 ease-smooth hover:border-ink hover:bg-ink hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-ink md:inline-flex"
            >
              Résumé
              <ArrowUpRight size={16} weight="light" />
            </a>

            <span className="mx-1.5 hidden h-5 w-px bg-ink/12 dark:bg-white/15 md:block" aria-hidden="true" />

            <button
              type="button"
              onClick={() => setDark((d) => !d)}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink/80 transition-all duration-300 hover:rotate-12 hover:bg-ink/5 dark:text-white/80 dark:hover:bg-white/10"
            >
              {dark ? <Sun size={20} weight="light" /> : <Moon size={20} weight="light" />}
            </button>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink/80 transition-colors hover:bg-ink/5 dark:text-white/80 dark:hover:bg-white/10 md:hidden"
            >
              {open ? <X size={22} weight="light" /> : <List size={22} weight="light" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 overflow-hidden rounded-3xl border border-white/60 bg-white/85 p-2 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-black/70 md:hidden"
            >
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `nav-link block rounded-2xl px-4 py-3 text-[15px] uppercase transition-colors ${
                        isActive
                          ? 'bg-ink/5 text-ink dark:bg-white/10 dark:text-white'
                          : 'text-ink/70 dark:text-white/70'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="nav-link flex items-center gap-1.5 rounded-2xl px-4 py-3 text-[15px] uppercase text-ink/70 dark:text-white/70"
                >
                  Résumé <ArrowUpRight size={18} weight="light" />
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
