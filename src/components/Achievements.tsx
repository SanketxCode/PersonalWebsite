import { achievements } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Trophy } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="section-title text-center">Achievements</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {achievements.map((item, idx) => (
              <Reveal key={idx} delay={idx * 80}>
                <div className="card group">
                  <div className="flex items-start gap-4">
                    <Trophy
                      size={20}
                      className="text-[var(--accent)] shrink-0 mt-1 group-hover:scale-110 transition-transform"
                    />
                    <div>
                      <p className="text-sm md:text-base font-medium text-[var(--text-primary)] mb-1 leading-snug">
                        {item.title}
                      </p>
                      {item.detail && (
                        <p className="text-xs md:text-sm text-[var(--text-tertiary)]">
                          {item.detail}
                        </p>
                      )}
                    </div>
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
