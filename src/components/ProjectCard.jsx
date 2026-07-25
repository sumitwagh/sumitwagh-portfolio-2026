import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Link to={`/work/${project.slug}`} className="group block" aria-label={project.title}>
        <div className="overflow-hidden rounded-3xl transition-transform duration-500 ease-smooth group-hover:-translate-y-1.5">
          <div className="aspect-[16/10] w-full overflow-hidden bg-[#f4f4f4] dark:bg-white/5">
            <img
              src={project.thumb}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.04]"
            />
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-[22px] leading-snug transition-colors duration-300 group-hover:text-ink/60 dark:group-hover:text-white/70 md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-1 text-[22px] leading-snug text-ink/45 dark:text-white/45 md:overflow-hidden md:text-ellipsis md:whitespace-nowrap md:text-2xl">
            {project.subtitle}
          </p>
        </div>
      </Link>
    </Reveal>
  )
}
