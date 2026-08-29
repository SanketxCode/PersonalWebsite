import { experience } from "@/lib/data";
import { Reveal } from "./Reveal";
import { MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="section-title text-center">Experience</h2>
          </Reveal>

          <div>
            {experience.map((exp, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="timeline-item">
                  {/* Timeline decoration */}
                  <div className="timeline-dot">
                    <div className="timeline-dot-inner" />
                  </div>
                  <div className="timeline-line" />

                  {/* Content */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-2">
                        <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)]">
                          {exp.role}
                        </h3>
                        {exp.grade && (
                          <span className="text-xs font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-2.5 py-1 rounded border border-[var(--accent-border)]">
                            {exp.grade}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm md:text-base">
                        <span className="font-medium text-[var(--text-secondary)]">
                          {exp.company}
                        </span>
                        <span className="text-[var(--text-muted)]">·</span>
                        <span className="text-[var(--text-tertiary)]">
                          {exp.period}
                        </span>
                        <span className="text-[var(--text-muted)]">·</span>
                        <span className="inline-flex items-center gap-1.5 text-[var(--text-tertiary)]">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="styled-list text-sm md:text-base text-[var(--text-secondary)]">
                      {exp.highlights.map((item, i) => (
                        <li key={i}>{highlightMetrics(item)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Bold percentage/number metrics in experience bullets */
function highlightMetrics(text: string): React.ReactNode {
  const parts = text.split(/(\d+%|\d+\+?(?:\s*(?:times?|x)))/gi);
  return parts.map((part, i) =>
    /\d+%|\d+\+?(?:\s*(?:times?|x))/i.test(part) ? (
      <span key={i} className="stat-highlight">
        {part}
      </span>
    ) : (
      part
    )
  );
}
