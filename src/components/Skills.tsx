import { skills } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="section-title text-center">Skills</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-10 md:gap-12">
            {Object.entries(skills).map(([category, items], idx) => (
              <Reveal key={category} delay={idx * 80}>
                <div>
                  <h3 className="text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] font-semibold mb-4 text-center sm:text-left">
                    {category}
                  </h3>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="skill-pill">
                        {skill}
                      </span>
                    ))}
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
