import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import BrandThumb from './BrandThumb'

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Link to={`/work/${project.slug}`} className="group block" aria-label={project.title}>
        <div className="overflow-hidden rounded-3xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-500 ease-smooth group-hover:-translate-y-1 group-hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.35)]">
          <div className="aspect-[16/10] w-full transition-transform duration-700 ease-smooth group-hover:scale-[1.03]">
            <BrandThumb brand={project.brand} />
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
