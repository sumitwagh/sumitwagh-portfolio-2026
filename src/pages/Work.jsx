import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'

export default function Work() {
  return (
    <main className="container-site pt-16 md:pt-24">
      <Seo
        title="Work"
        description="Selected product design case studies by Sumit Wagh — healthcare SaaS platforms, fintech products, and brand systems."
        path="/work"
      />
      <Reveal>
        <h1 className="text-[clamp(2.4rem,5vw,3.75rem)]">Selected Work</h1>
        <p className="mt-5 max-w-xl text-lg text-ink/60 dark:text-white/60">
          A closer look at how I approach problems — the thinking, the process, and the outcomes.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} delay={(i % 2) * 0.1} />
        ))}
      </div>
    </main>
  )
}
