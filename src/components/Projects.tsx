import { projects } from "@/lib/data";
import { Reveal } from "./Reveal";
import { GithubIcon } from "./Icons";
import { ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="section-title text-center">Projects</h2>
          </Reveal>

          <div className="space-y-6">
            {projects.map((project, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <article className="card">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-hover)] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 shrink-0">
                      {project.links.github && project.links.github !== "#" && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                          aria-label={`${project.title} GitHub`}
                        >
                          <GithubIcon size={20} />
                        </a>
                      )}
                      {project.links.video && project.links.video !== "#" && (
                        <a
                          href={project.links.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                          aria-label={`${project.title} demo`}
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Details */}
                  <ul className="styled-list text-sm md:text-base text-[var(--text-tertiary)] mb-5">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1.5 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] border border-[var(--border)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
