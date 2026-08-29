import { education } from "@/lib/data";
import { Reveal } from "./Reveal";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="section-title text-center">Education</h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="card">
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-[var(--accent-subtle)] border border-[var(--accent-border)] flex items-center justify-center">
                  <GraduationCap size={24} className="text-[var(--accent)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-[var(--text-primary)] mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-sm md:text-base text-[var(--text-secondary)] mb-3">
                    {education.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm md:text-base text-[var(--text-tertiary)]">
                    <span>{education.period}</span>
                    <span className="text-[var(--text-muted)]">·</span>
                    <span>
                      CGPA:{" "}
                      <span className="stat-highlight">{education.cgpa}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
