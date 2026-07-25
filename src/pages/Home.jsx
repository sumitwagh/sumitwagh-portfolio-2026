import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Experience from "../components/Experience";
import RightNow from "../components/RightNow";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { contact } from "../data/site";
import { scrollToTarget } from "../lib/scroll";
import illustration from "../assets/img/profile-illustration.svg";
import Stat from "../components/Stats";

const words =
  "Designing enterprise healthcare experiences that feel effortless.".split(
    " ",
  );

export default function Home() {
  const reduce = useReducedMotion();

  const scrollToWork = () => {
    const el = document.getElementById("selected-work");
    if (el) scrollToTarget(el, { offset: -100 });
  };

  return (
    <main>
      <Seo
        title="Product Designer"
        description="Sumit Wagh is a product designer in Pune, India — seven years turning complex healthcare and SaaS products into software people can trust."
        path="/"
      />

      {/* Hero — text left, animated illustration right */}
      <section className="container-site pt-16 md:pt-20 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[60%_40%] lg:gap-4">
          <div>
            {/* Availability — refined status chip */}
            {/* <Reveal>
              <a
                href={`mailto:${contact.email}`}
                className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-white/60 py-1.5 pl-2.5 pr-4 text-[13px] text-ink/70 backdrop-blur-sm transition-colors duration-300 hover:border-ink/20 hover:text-ink dark:border-white/10 dark:bg-white/[0.06] dark:text-white/65 dark:hover:border-white/25 dark:hover:text-white"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span
                  className="text-[12px] uppercase"
                  style={{ letterSpacing: "0.06em" }}
                >
                  Available for freelance &amp; full-time
                </span>
              </a>
            </Reveal> */}

            <h1 className="mt-7 w-full text-[clamp(2.1rem,5.6vw,64px)] leading-[1.02]">
              {words.map((w, i) => (
                <motion.span
                  key={w + i}
                  initial={reduce ? false : { opacity: 0, y: "0.5em" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.06 + 0.045 * i,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mr-[0.2em] inline-block"
                >
                  {w}
                </motion.span>
              ))}
            </h1>

            <Reveal delay={0.4}>
              <p className="mt-6 text-[18px] leading-relaxed text-ink/55 dark:text-white/50 md:text-[22px]">
                Product Designer with 7+ years of experience crafting enterprise
                healthcare, AI, and SaaS products. I simplify complex workflows
                into intuitive experiences that help teams work faster and make
                better decisions
              </p>
            </Reveal>

            <Reveal
              delay={0.5}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <button type="button" onClick={scrollToWork} className="btn-dark">
                View Work <ArrowRight size={16} weight="light" />
              </button>
              <a href={`mailto:${contact.email}`} className="btn-outline">
                Let&rsquo;s Talk
              </a>
            </Reveal>
          </div>

          {/* Illustration — gentle, continuous float */}
          <Reveal delay={0.2} className="order-first lg:order-none">
            <motion.div
              className="relative mx-auto w-full max-w-[540px] lg:max-w-none"
              animate={reduce ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            >
              <img
                src={illustration}
                alt="Illustration of Sumit Wagh"
                className="h-auto w-full select-none"
                draggable="false"
              />
            </motion.div>
          </Reveal>
        </div>
      </section>
      {/* Hero Stats */}
     <section className="mt-20">
  <div className="container-site">
    <Reveal delay={0.2}>
      <div className="border-y border-line py-6 dark:border-white/10">

        <div className="grid gap-y-14 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-line dark:lg:divide-white/10">

          <div className="lg:px-8">
            <Stat
              number="7+"
              label="Years of Product Design"
            />
          </div>

          <div className="lg:px-8">
            <Stat
              number="250+"
              label="Prototypes Delivered"
            />
          </div>

          <div className="lg:px-8">
            <Stat
              number="40+"
              label="Client Designed"
            />
          </div>

          <div className="lg:px-8">
            <Stat
              number="5+"
              label="Enterprise Products"
            />
          </div>

        </div>

      </div>
    </Reveal>
  </div>
</section>
      {/* Selected Works */}
      <section
        id="selected-work"
        className="container-site scroll-mt-24 pt-20 md:pt-24"
      >
        <Reveal className="flex items-end justify-between">
          <h2 className="text-[clamp(1.75rem,3.4vw,2.5rem)]">Selected Work</h2>
          <Link
            to="/work"
            className="group inline-flex items-center gap-1.5 text-base text-ink/70 transition-colors hover:text-ink dark:text-white/60 dark:hover:text-white md:text-lg"
          >
            View all
            <ArrowRight
              size={17}
              weight="light"
              className="transition-transform duration-300 ease-smooth group-hover:translate-x-1"
            />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.slice(0, 4).map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={(i % 2) * 0.1} />
          ))}
        </div>
      </section>

      {/* Experience */}
      <Experience />

      {/* Right now — globe, your weather and mine */}
      <RightNow />
    </main>
  );
}
